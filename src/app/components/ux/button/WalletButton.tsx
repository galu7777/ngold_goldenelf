"use client"
import  { FC, useState } from "react";
import { CallButton } from "..";
import { FaWallet } from "react-icons/fa";
import { displayLastNumbers, requestAccount } from "@/assets";

interface Props {
    styles?:string
  }

const WalletButton:FC<Props> = ({styles}) => {
    const [walletAddress, setWalletAddress] = useState(""); 
  

  //funcion para interactuar con el smart contract
  async function conectWallet() {
    if (typeof window.ethereum !== "undefined") {
      //await requestAccount();
      //const provider = new ethers.providers.Web3Provider(window?.ethereum)
    }
  }

  
  return (
    <CallButton
      onClick={() => requestAccount({walletAddress,setWalletAddress,window})}
      text={walletAddress.length ? displayLastNumbers(walletAddress) : "Conectar Wallet"}
      icon={walletAddress.length ? FaWallet({}) : null}
      styles={`${styles} min-w-[10rem] sm:min-w-[8.5rem] text-[0.9rem] sm:text-[0.8rem] ${
        walletAddress.length
          ? "bg-transparent border-solid border-[2px] border-[#fffff] text-[#ffffff]"
          : " bg-[#77FFBD] text-[#000000] font-medium"
      }`}
    ></CallButton>
  );
};

export default WalletButton;
