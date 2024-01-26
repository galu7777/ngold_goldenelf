"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CallButton } from ".";
import { FaWallet } from "react-icons/fa";
import WalletButton from "./ux/button/WalletButton";
import { HiOutlineDotsVertical } from "react-icons/hi";

const Navbar = () => {
  //transicion de estilos de la navbar
  useEffect(() => {
    const changeNavbarColor = () => {
      const navbar = document.getElementById("nav");
      if (window.scrollY >= 88) {
        navbar?.classList.add(
          "bg-black/[0.5]",
          "backdrop-blur-md",
          "backdrop-brightness-75",
        );
        navbar?.classList.remove("h-[5rem]");
      } else {
        navbar?.classList.remove(
          "bg-black/[0.5]",
          "backdrop-blur-md",
          "backdrop-brightness-75",
          "h-[5rem]"
        );
        navbar?.classList.add("h-[5rem]");
      }
    };
    window?.addEventListener("scroll", changeNavbarColor);
  }, []);

  return (
    <nav
      id="nav"
      className="flex items-center justify-center transition-all duration-300 w-[100%] min-h-[4rem] sm:min-h-[4rem] h-[5rem] z-50 fixed top-0 left-0 right-0"
    >
      <div className="flex justify-between items-center w-[90%]">
          <Image
            src={"/logo_gonden_elf.png"}
            alt="Golden elf icon"
            height={52.5}
            width={132}
          />

        <HiOutlineDotsVertical className="flex sm:hidden m-[1rem] text-[1.4rem] text-[#b4b4b7]"/>

        <ul className="justify-between font-light w-[65%] text-[0.75rem] sm:w-[30rem] sm:text-[0.9rem] hidden sm:flex">
          <li>White Paper</li>
          <li>Nosotros</li>
          <li>Ngold</li>
          <li>Tradea</li>
          <li>Coleccion</li>
        </ul>

        <div className="hidden sm:flex ">
          <WalletButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
