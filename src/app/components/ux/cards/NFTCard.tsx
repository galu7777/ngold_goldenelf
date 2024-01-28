import Image from "next/image";
import React, { FC } from "react";
import { FaEthereum } from "react-icons/fa";

interface Props {
  styles?:String
  imgstyles?:String
  small?:boolean
}

const NFTCard:FC<Props> = ({styles,imgstyles,small}) => {
  return (
    <div className={` px-[1.4rem] py-[1.4rem] rounded-[1rem] flex flex-col items-center justify-between shadow-sm  bg-white/[0.13] backdrop-blur-sm backdrop-brightness-75 ${small? " mb-[1rem] sm:w-[15.5rem] h-[23rem]":"sm:w-[22rem] sm:h-[30rem] w-[17rem] h-[25rem] border-solid border-[1px] border-white/[0.3]"}`}>
      <Image
        src={"/7643d9a8-86ca-48eb-be3c-c3f483e71218.jpg"}
        alt="elf_8"
        width={300}
        height={300}
        className={` rounded-[0.5rem] ${small==true?" h-[210px]  w-[210px] ":"sm:h-[300px]  sm:w-[300px]"}`} 
      />
      <div className="flex flex-col w-[100%] h-[30%] justify-around items-start">
        <div>
          <p className={` ${small==true? "text-[1rem]":" text-[1.3rem]"} font-bold`}>Police Elf #2134</p>
          <p className="text-[0.8rem] font-light">Cruxader King</p>
        </div>
        <div className="flex justify-between items-center w-[100%] pt-[1rem] border-solid border-t-[1px] border-[#353535] ">
          <p className={`${small==true? "text-[0.8rem]":" text-[0.9rem]"} font-light text-[#BDBDBD]`}>$2,223.23</p>
          <div className="flex items-center text-[#77FFBD]">
            <FaEthereum />
            <p className={`${small==true? "text-[0.8rem]":" text-[1.3rem]"} font-bold`}>3.2 ETH</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
