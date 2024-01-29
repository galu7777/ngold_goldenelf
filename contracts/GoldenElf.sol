// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

// Contrato GoldenElf
contract GoldenElf is ERC721, Ownable {
    using Strings for uint256;
    // Dirección del propietario inicial
    address public _initialOwner = 0x9465B25131b9ee5fcfAA34DeC91ED5De4db14c4E;
    
    // Estructura de Datos para las obras de arte NFT
    struct Art {
        string name;
        uint256 id;
        string image;
        uint256 dna;
        uint256 rarity;
    }

    // Datos de rareza
    struct Rarity {
        string name;
        string url;
        uint256 price;
    }

    // Mapeo de rarezas
    mapping(string => Rarity) public rarities;

    // Almacenamiento de las obras de arte NFT
    Art[] public arts_works;

    // Contador de tokens NFT
    uint256 public COUNTER;

    // Precio predeterminado de los tokens NFT
    uint256 public fee = 8 ether;

    // Mapa para rastrear la cantidad de tokens NFT emitidos por rareza
    mapping(string => uint256) public tokensIssued;

    // Variable para almacenar el suministro total de NFTs
    uint256 public totalSupply;

    // Evento para registrar la creación de nuevas obras de arte NFT
    event NewArtWork(address indexed owner, uint256 id, uint256 dna);

    // Constructor del contrato
    constructor()
    ERC721('GoldenElf', 'GELF')
    Ownable(_initialOwner) {
        // Inicialización de las rarezas con precios
        rarities["Founders"] = Rarity("Founders", "https://res.cloudinary.com/div8rdrjb/image/upload/v1706200015/GoldenElf/elf-1_hfq9gf.jpg", 0.05 ether);
        rarities["Common"] = Rarity("Common", "https://res.cloudinary.com/div8rdrjb/image/upload/v1706200175/GoldenElf/elf-10_svfptn.jpg", 0.01 ether);
        rarities["Special"] = Rarity("Special", "https://res.cloudinary.com/div8rdrjb/image/upload/v1706200017/GoldenElf/elf-8_xjqhb5.jpg", 0.03 ether);
        rarities["Legendary"] = Rarity("Legendary", "https://res.cloudinary.com/div8rdrjb/image/upload/v1706200017/GoldenElf/elf-9_w3ic2b.jpg", 0.07 ether);
        rarities["Hollywood"] = Rarity("Hollywood", "https://res.cloudinary.com/div8rdrjb/image/upload/v1706200017/GoldenElf/elf-8_xjqhb5.jpg", 0.08 ether);
        rarities["Global"] = Rarity("Global", "https://res.cloudinary.com/div8rdrjb/image/upload/v1706200016/GoldenElf/elf-2_xipnsb.jpg", 0.12 ether);
        rarities["Universal"] = Rarity("Universal", "https://res.cloudinary.com/div8rdrjb/image/upload/v1706200016/GoldenElf/elf-6_qj1zfw.jpg", 0.32 ether);
        rarities["CruxKing"] = Rarity("CruxKing", "https://res.cloudinary.com/div8rdrjb/image/upload/v1706200015/GoldenElf/elf-3_aozssj.jpg", 0.40 ether);
    }

    // Función para que el usuario elija la rareza y pague la tarifa correspondiente
    function createCustomArtWork(string memory _name, string memory _rarity) external payable {
        require(msg.value >= rarities[_rarity].price, "Fondos insuficientes");
        _createArtWork(_name, _rarity);
    }

    // Función interna para la creación de una obra de arte NFT
    function _createArtWork(string memory _name, string memory _rarity) internal {
        require(tokensIssued[_rarity] < getMaxLimit(_rarity), "Limite de rareza alcanzado");
        
        uint256 randDna = _createRandomNum(10**16);
        Rarity memory artRarity = rarities[_rarity];

        Art memory newArtWork = Art(_name, COUNTER, artRarity.url, randDna, artRarity.price);
        arts_works.push(newArtWork);
        _safeMint(msg.sender, COUNTER);
        emit NewArtWork(msg.sender, COUNTER, randDna);
        COUNTER++;

        // Incrementar el contador de tokens emitidos para la rareza
        tokensIssued[_rarity]++;

        // Incrementar el suministro total de NFTs
        totalSupply++;
    }

    // Función para obtener el límite máximo de tokens emitidos por rareza
    function getMaxLimit(string memory _rarity) public pure returns (uint256) {
        if (keccak256(bytes(_rarity)) == keccak256(bytes("Founders"))) {
            return 99;
        } else if (keccak256(bytes(_rarity)) == keccak256(bytes("Common"))) {
            return 4270;
        } else if (keccak256(bytes(_rarity)) == keccak256(bytes("Special"))) {
            return 2999;
        } else if (keccak256(bytes(_rarity)) == keccak256(bytes("Legendary"))) {
            return 1999;
        } else if (keccak256(bytes(_rarity)) == keccak256(bytes("Hollywood"))) {
            return 499;
        } else if (keccak256(bytes(_rarity)) == keccak256(bytes("Global"))) {
            return 120;
        } else if (keccak256(bytes(_rarity)) == keccak256(bytes("Universal"))) {
            return 11;
        } else if (keccak256(bytes(_rarity)) == keccak256(bytes("CruxKing"))) {
            return 2;
        } else {
            // Valor predeterminado en caso de rareza no reconocida
            return 0;
        }
    }

    // Función para que el propietario actualice el precio de una rareza
    function updateRarityPrice(string memory _rarity, uint256 _newPrice) external onlyOwner {
        rarities[_rarity].price = _newPrice;
    }

    // Función para actualizar el precio de los tokens NFT
    function updateFee(uint256 _fee) external onlyOwner {
        fee = _fee;
    }

    // Función para obtener información sobre el contrato inteligente, incluido el suministro total
    function infoSmartContract() external view returns (address, uint256, uint256) {
        address SC_address = address(this);
        uint256 SC_money = address(this).balance / 10**18;
        return (SC_address, SC_money, totalSupply);
    }

    // Función para obtener todas las obras de arte NFT creadas
    function getArtWorks() external view returns (Art[] memory) {
        return arts_works;
    }

    // Función para obtener las obras de arte NFT de un usuario
    function getOwnerArtWork(address _owner) external view returns (Art[] memory) {
        Art[] memory result = new Art[](balanceOf(_owner));
        uint256 counter_owner = 0;
        for (uint256 i = 0; i < arts_works.length; i++) {
            if (ownerOf(i) == _owner) {
                result[counter_owner] = arts_works[i];
                counter_owner++;
            }
        }
        return result;
    }

    // Función para realizar el pago y crear una obra de arte NFT con rareza aleatoria
    function createRandomArtWork(string memory _name) external payable {
        require(msg.value >= fee, "Fondos insuficientes");
        _createArtWork(_name, getRandomRarity());
    }

    // Función para extraer ethers desde el contrato inteligente al propietario
    function withdraw() external payable onlyOwner {
        address payable _owner = payable(owner());
        _owner.transfer(address(this).balance);
    }

    // Función para generar un número aleatorio
    function _createRandomNum(uint256 _mod) internal view returns (uint256) {
        bytes32 has_randomNum = keccak256(abi.encodePacked(block.timestamp, msg.sender));
        uint256 randomNumber = uint256(has_randomNum);
        return randomNumber % _mod;
    }

    // Función para obtener una rareza aleatoria
    function getRandomRarity() internal view returns (string memory) {
        uint8 randRarity = uint8(_createRandomNum(100));
        if (randRarity < 10) {
            return "Founders";
        } else if (randRarity < 30) {
            return "Common";
        } else if (randRarity < 50) {
            return "Special";
        } else if (randRarity < 70) {
            return "Legendary";
        } else if (randRarity < 80) {
            return "Hollywood";
        } else if (randRarity < 90) {
            return "Global";
        } else if (randRarity < 95) {
            return "Universal";
        } else {
            return "CruxKing";
        }
    }
}
