import Image from "next/image";
import React from "react";
import { FaEthereum } from "react-icons/fa";

const NFTCard = () => {
  return (
    <div className="border-solid border-[1px] border-white/[0.3] px-[1.4rem] py-[1.4rem] rounded-[1rem] flex flex-col items-center justify-between shadow-sm h-[30rem] w-[17rem] sm:w-[22rem] bg-white/[0.13] backdrop-blur-sm backdrop-brightness-75">
      <Image
        src={"/7643d9a8-86ca-48eb-be3c-c3f483e71218.jpg"}
        alt="elf_8"
        width={300}
        height={300}
        className=" rounded-[0.5rem] h-[250px] sm:h-[300px] w-[250px] sm:w-[300px]"
      />
      <div className="flex flex-col w-[100%] h-[30%] justify-around items-start">
        <div>
          <p className="text-[1.3rem] font-bold">Police Elf #2134</p>
          <p className="text-[0.8rem] font-light">Cruxader King</p>
        </div>
        <div className="flex justify-between items-center w-[100%]">
          <div className="flex items-center text-[#77FFBD]">
            <FaEthereum />
            <p className="text-[1rem] font-bold">3.2 ETH</p>
          </div>
          <p className="text-[0.9rem] font-light text-[#BDBDBD]">$2,223.23</p>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
