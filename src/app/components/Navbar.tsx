"use client";
import Image from "next/image";
import { FC, useEffect } from "react";
import WalletButton from "./ux/button/WalletButton";
import { HiOutlineDotsVertical } from "react-icons/hi";
import Link from "next/link";
import { changeNavbarColor } from "@/assets";

//navitems={navitems} logo={""} buttonColor={"#F6CF4E"}

interface Props {
  children?: React.ReactNode;
  logo: string;
  n?: boolean;
}

const Navbar: FC<Props> = ({ children, logo, n }) => {
  
  //transicion de estilos de la navbar
  useEffect(() => {
    window?.addEventListener("scroll", changeNavbarColor);
  }, []);

  return (
    <nav
      id="nav"
      className="flex items-center justify-center transition-all duration-300 w-[100%] min-h-[4rem] sm:min-h-[4rem] h-[5rem] z-50 fixed top-0 left-0 right-0"
    >
      <div className="flex justify-between items-center w-[90%]">
        <Link href={"/goldenelf"}>
          <Image
            src={logo}
            alt="icon"
            height={52.5}
            width={132}
          />
        </Link>

        <HiOutlineDotsVertical className="flex sm:hidden m-[1rem] text-[1.4rem] text-[#b4b4b7]" />

        <ul className="justify-between font-light w-[65%] text-[0.75rem] sm:w-[30rem] sm:text-[0.9rem] hidden sm:flex">
          {children}
        </ul>

        <div className="hidden sm:flex ">
          <WalletButton n={n} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
