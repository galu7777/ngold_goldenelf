"use client";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import WalletButton from "./ux/button/WalletButton";
import { HiOutlineDotsVertical } from "react-icons/hi";
import Link from "next/link";
import { changeNavbarColor } from "@/assets";
import { DrowpDownMenu } from ".";




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

  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option:any) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  console.log(children);


  return (
    <nav
      id="nav"
      className={`${isOpen?"":""} flex items-center justify-center transition-all duration-300 w-[100%] min-h-[12vh] sm:min-h-[4rem] h-[15vh] z-50 fixed top-0 left-0 right-0`}
    >
      <div className="flex justify-between items-center w-[90%]">
        <Link href={"/goldenelf"}>
          <Image src={logo} alt="icon" height={52.5} width={132} />
        </Link>


        <ul className="justify-between font-light w-[65%] text-[0.75rem] sm:w-[30rem] sm:text-[0.9rem] hidden sm:flex">
          {children}
        </ul>

        <div className="hidden sm:flex ">
          <WalletButton n={n} />
        </div>
      </div>
      <DrowpDownMenu handleSelect={handleSelect} setIsOpen={setIsOpen} isOpen={isOpen} options={children}></DrowpDownMenu>

    </nav>
  );
};

export default Navbar;
