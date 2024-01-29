"use client"
import Image from "next/image";
import React, { FC } from "react";
import { FaEthereum } from "react-icons/fa";
import Web3 from "web3";
import abi from '../../../../assets/wallet/abi.json';

interface Props {
  styles?: string;
  imgstyles?: string;
  small?: boolean;
}

const NFTCard: FC<Props> = ({ styles, imgstyles, small }) => {
  const handleBuyNFT = async () => {
    try {
      const web3 = new Web3(window.ethereum);
      const accounts = await window?.ethereum.request({
        method: "eth_requestAccounts",
      });
      const contractAddress = "0x48427bFCCfffad01cd207939067a81dD3Bbc5E4a";
      const contractAbi = abi.abi;
      const contract = new web3.eth.Contract(contractAbi, contractAddress);
      
      const gasAmount = 300000;

      try {
        const response = await contract.methods
          .createCustomArtWork("CommonElf", "Common")
          .send({
            from: accounts[0],
            value: web3.utils.toWei("0.01", "ether"),
            gas: gasAmount.toString(),
            gasPrice: web3.utils.toWei("30", "gwei"),
          });
      
        //console.log('Transaction response:', response);
      } catch (error) {
        console.error('Error sending transaction:', error);
      }
    } catch (error:any) {
      console.error('Error buying NFT:', error);
      // Muestra mensajes de error específicos según el tipo de error
      if (error.code === 4001) {
        console.error('Usuario rechazó la transacción');
      } else {
        console.error('Error desconocido:', error.message);
      }
    }
  };
  
  return (
    <div onClick={small === true ? handleBuyNFT : ()=>{}} className={` cursor-pointer px-[1.4rem] py-[1.4rem] rounded-[1rem] flex flex-col items-center justify-between shadow-sm  bg-white/[0.13] backdrop-blur-sm backdrop-brightness-75 ${small ? " mb-[1rem] sm:w-[15.5rem] h-[23rem]" : "sm:w-[22rem] sm:h-[30rem] w-[17rem] h-[25rem] border-solid border-[1px] border-white/[0.3]"}`}>
      <Image
        src={"/7643d9a8-86ca-48eb-be3c-c3f483e71218.jpg"}
        alt="elf_8"
        width={300}
        height={300}
        className={` rounded-[0.5rem] ${small === true ? " h-[210px]  w-[210px] " : "sm:h-[300px]  sm:w-[300px]"}`}
      />
      <div className="flex flex-col w-[100%] h-[30%] justify-around items-start">
        <div>
          <p className={` ${small === true ? "text-[1rem]" : " text-[1.3rem]"} font-bold`}>Police Elf #2134</p>
          <p className="text-[0.8rem] font-light">Comon</p>
        </div>
        <div className="flex justify-between items-center w-[100%] pt-[1rem] border-solid border-t-[1px] border-[#353535] ">
          <p className={`${small === true ? "text-[0.8rem]" : " text-[0.9rem]"} font-light text-[#BDBDBD]`}>$2,223.23</p>
          <div className="flex items-center text-[#77FFBD]">
            <FaEthereum />
            <p className={`${small === true ? "text-[0.8rem]" : " text-[1.3rem]"} font-bold`}>0.01 ETH</p>
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
