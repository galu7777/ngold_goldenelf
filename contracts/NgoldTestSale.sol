// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import './NgoldTest.sol';
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract NgoldTestSale {
    address payable public admin;
    address payable private ethFunds = payable(0x39Ad49e6eBb46DFBDbffF4Fd3C47873Da10D517c); //account 2
    NgoldTest public token;
    uint256 public tokensSold;
    AggregatorV3Interface internal priceFeed;

    uint256 public transactionCount;

    event Sell(address _buyer, uint256 _amount);

    struct Transaction {
        address buyer;
        uint256 amount;
    }

    mapping(uint256 => Transaction) public transaction;

    constructor(NgoldTest _token) {
        priceFeed = AggregatorV3Interface(0x1b44F3514812d835EB1BDB0acB33d3fA3351Ee43);
        token = _token;
        admin = payable(msg.sender);
    }

    function getGoldPrice() public view returns(int) {
        (, int price, , , ) = priceFeed.latestRoundData();
        return (price / 10**8);
    }

    function ngoldTestPriceInGold() public view returns(int) {
        int goldPrice = getGoldPrice();
        return goldPrice;
    }

    function buyToken(uint256 _amount) public payable {
        int ngoldTestPriceGold = ngoldTestPriceInGold();
        require(int(msg.value) >= ngoldTestPriceGold * int(_amount));
        require(token.balanceOf(address(this)) >= _amount);
        require(token.transfer(msg.sender, _amount));
        ethFunds.transfer(msg.value);
        tokensSold += _amount;
        transaction[transactionCount] = Transaction(msg.sender, _amount);
        transactionCount++;
        emit Sell(msg.sender, _amount);
    }

    function endSale() public {
        require(msg.sender == admin);
        uint256 amount = token.balanceOf(address(this));
        require(token.transfer(admin, amount));
        admin.transfer(address(this).balance);
    }
}
