import {
  BenefitsCard,
  CallButton,
  Card,
  InfoItem,
  NFTCard,
  Navbar,
  SocialButton,
  SocialContainer,
  WalletButton,
} from "../../components";
import { FaWallet } from "react-icons/fa";
import { PiArrowsLeftRightBold } from "react-icons/pi";
import { TbWorld } from "react-icons/tb";
import { PiMedalFill } from "react-icons/pi";
import Image from "next/image";
import FilterItems from "@/app/components/ux/items/FilterItem";

export default function Collection() {
  return (
    <>
      <main className="flex w-[100%] min-h-screen flex-col items-center  relative">
        <Navbar />
        <div
          className={`  bg-[url('/landingbg.jpg')] w-[100%] bg-no-repeat bg-cover bg-right-bottom z-40`}
        >
          <div
            className={` bg-black/[0.4] w-[100%] backdrop-brightness-75 min-h-[15rem] flex justify-center items-center`}
          ></div>
        </div>
        {/* ------------------------> Info section <------------------------ */}
        <div className="flex justify-center items-center w-[100%] h-[15rem] bg-[#171433] ">
          <div className="flex justify-between items-center w-[80%]">
            <div className="flex flex-col w-[37%] justify-between h-[6rem] ">
              <h1 className="text-[5rem] leading-[5rem] sm:leading-[2.5rem] sm:text-[2.5rem] font-bold">
                Golden Elf
              </h1>
              <p className="text-[0.8rem] leading-[0.9rem] font-extralight">
                Golden Elf es una colección de 9,999 NFT basados en las leyendas
                e historias de los mineros de la región de Remedios en
                Antioquía, Colombia.{" "}
              </p>
            </div>
            <div className="flex justify-evenly items-center h-[4.5rem] w-[50%] bg-[#F8F8F8]/[0.1] rounded-[1.5rem]">
              <InfoItem title="Items" content="999.999" />
              <InfoItem title="Items Listed" content="852" />
              <InfoItem title="Lowest (ETH)" content="0,027" />
              <InfoItem title="Vol (ETH)" content="0,053" />
            </div>
          </div>
        </div>
        {/* ------------------------> filters section <------------------------ */}
        <div className="flex justify-between w-[80%] items-center h-[10rem]">
          <div className="flex flex-col justify-between h-[4rem]">
            <p className="text-[0.85rem] font-extralight">Filtrar por</p>
            <div className="flex ">
              <FilterItems content="CRUX KING" />
              <FilterItems content="SPECIAL" />
              <FilterItems content="LEGENDARY" />
              <FilterItems content="COMMON" />
            </div>
          </div>

          <div className="flex flex-col justify-between h-[4rem]">
            <p className="text-[0.85rem] font-extralight">Ordenar por</p>
            <div className="flex text-center justify-center cursor-pointer items-center bg-[#36325F] h-[2rem] px-[1rem] rounded-xl mr-[1rem]">
              <p className=" font-medium text-[0.9rem]">Popularidad</p>
              <svg
                className="fill-white "
                width={"20px"}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z"></path>
              </svg>
            </div>
          </div>
        </div>
        {/* ------------------------> cards section <------------------------ */}

        <div className="w-[80%] flex">
            <NFTCard/>
            <NFTCard/>
            <NFTCard/>
            <NFTCard/>

        </div>
      </main>
    </>
  );
}
