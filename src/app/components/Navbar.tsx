"use client";
import Image from "next/image";
import { useState } from "react";
import { CallButton } from ".";
import { FaWallet } from "react-icons/fa";

const Navbar = () => {
  const [walletAddress, setWalletAddress] = useState("");

  //Requerir accesso a la WALLET de META MASK del usuario
  async function requestAccount() {
    if (walletAddress.length) return;

    if (window?.ethereum) {
      try {
        const accounts = await window?.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
        console.log(accounts);
      } catch (e: any) {
        console.log(e.message);
      }
    } else {
      return;
    }
  }

  //funcion para interactuar con el smart contract
  async function conectWallet() {
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();
      //const provider = new ethers.providers.Web3Provider(window?.ethereum)
    }
  }

  const changeNavbarColor = () => {
    const navbar = document.getElementById("nav");
    if (window.scrollY >= 88) {
      navbar?.classList.add(
        "bg-black/[0.1]",
        "backdrop-blur-xl",
        "backdrop-brightness-75",
        "h-[5rem]"
      );      
      } else {
    
      navbar?.classList.remove(
        "bg-black/[0.1]",
        "backdrop-blur-xl",
        "backdrop-brightness-75",
        "h-[5rem]"
      );
    }
  };

  window?.addEventListener("scroll", changeNavbarColor);

  return (
    <nav
      id="nav"
      className="flex items-center justify-center transition-all duration-150 w-[100%] h-[7rem] z-50 fixed top-0 left-0 right-0"
    >
      <div className="flex justify-between items-center w-[90%]">
        <Image
          src={"/logo_gonden_elf.png"}
          alt="Golden elf icon"
          width={140}
          height={150}
        />

        <ul className="flex justify-between font-light w-[30rem] text-[0.9rem]">
          <li>White Paper</li>
          <li>Nosotros</li>
          <li>Ngold</li>
          <li>Tradea</li>
          <li>Coleccion</li>
        </ul>

        <CallButton
          onClick={() => requestAccount()}
          text={walletAddress.length ? walletAddress : "Conectar Wallet"}
          icon={walletAddress.length ? FaWallet({}) : null}
          styles={`w-[10rem] text-[0.9rem] ${
            walletAddress.length
              ? "bg-transparent border-solid border-[2px] border-[#fffff] text-[#ffffff]"
              : " bg-[#77FFBD] text-[#000000] font-medium"
          }`}
        ></CallButton>
      </div>
    </nav>
  );
};

export default Navbar;
