import {
  BenefitsCard,
  CallButton,
  Card,
  InfoItem,
  InfoStats,
  NFTCard,
  Navbar,
  SocialButton,
  SocialContainer,
  WalletButton,
} from "../components";
import { FaWallet } from "react-icons/fa";
import { PiArrowsLeftRightBold } from "react-icons/pi";
import { TbAffiliate, TbAffiliateFilled, TbWorld } from "react-icons/tb";
import { PiMedalFill } from "react-icons/pi";
import Image from "next/image";
import FilterItems from "@/app/components/ux/items/FilterItem";
import Link from "next/link";
import { IoWalletOutline, IoWalletSharp } from "react-icons/io5";

const navitems = ["White Paper", "Nosotros", "Golden Elf"];

export default function NgoldPage() {
  return (
    <>
      <main className="flex w-[100%] min-h-screen flex-col items-center relative bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#131D29] to-[#06080C]">
        <Navbar logo={"/logo_light.png"} n={true}>
          <li>White Paper</li>
          <div className="border-solid border-b-[1px] mb-[1rem] h-[1rem] border-[#5F5F5F]" />
          <li>Nosotros</li>
          <div className="border-solid border-b-[1px] mb-[1rem] h-[1rem] border-[#5F5F5F]" />
          <Link href={"/goldenelf"}>
            <li>Golden Elf</li>
          </Link>
        </Navbar>

        <div className="flex h-[38rem] sm:h-[45rem] justify-center w-[100%]  items-center">
          <div className="absolute overflow-hidden max-w-[100%] z-0">
            <div className="overflow-hidden max-w-[100%] stroketext font-bold leading-[15rem] text-[#232A32] text-[15rem] z-0">
              <p className="relative right-[35rem] w-[300rem]">
                CONFLUENCIA CONFLUENCIA{" "}
              </p>
              <p className="relative right-[5rem] w-[300rem]">
                CONFLUENCIA CONFLUENCIA{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center w-[90%] sm:w-[70%] h-[23rem] z-10 justify-between">
            <div className="flex items-center w-[100%] sm:w-[35rem]">
              <h1 className=" text-[2.8rem] leading-[3rem] sm:leading-[5rem] sm:text-[5rem] text-center sm:text-right font-bold ">
                Confluencia Real & Digital
              </h1>
            </div>
            <Image
              src={"/NGOLDCOIN.png"}
              width={250}
              height={250}
              alt="ngoldIcon"
            ></Image>
          </div>
        </div>
        {/*-----------------------------> info section <---------------------------*/}
        <div className="w-[100%] flex flex-col items-center">
          <div className="flex flex-col justify-between sm:flex-row h-[19rem] w-[90%] sm:w-[80%] mb-[4rem] sm:mb-[10rem]">
            <h3 className="text-[2.5rem] sm:w-[50%] w-[80%] self-start sm:self-center font-bold sm:leading-[6rem] leading-[2.5rem] sm:text-[6rem] text-left">
              UN TOKEN COMO EL CENTRO
            </h3>
            <p className="text-[0.8rem] sm:w-[40%] w-[90%] self-end sm:self-center text-[#A8A8A8] sm:text-[0.9rem] text-right">
              El dinero digital, los pagos internacionales y las aplicaciones se
              alojan en la tecnología NGOLD. La comunidad ha creado una economía
              digital próspera, así como nuevas formas de unir el mundo material
              y el digital.
            </p>
          </div>
          <div className="flex flex-col justify-between sm:flex-row-reverse h-[17rem] w-[90%] sm:w-[80%]">
            <h3 className="text-[2.5rem] sm:w-[50%] w-[60%] self-start sm:self-center font-bold sm:leading-[6rem] leading-[2.5rem] sm:text-[6rem] text-left sm:text-right">
              DE TU MUNDO
            </h3>
            <p className="text-[0.8rem] sm:w-[40%] w-[90%] self-end sm:self-center text-[#A8A8A8] sm:text-[0.9rem] text-right sm:text-left">
              El uso de NGOLD va más allá del dinero digital. Cualquier cosa que
              tenga puede ser representada, vendida y utilizada como un token no
              fungible (NFT). Las oportunidades se expanden constantemente.
            </p>
          </div>
        </div>
        {/*-----------------------------> stats section <---------------------------*/}
        <div className=" z-0 h-[75rem] sm:h-[30rem] absolute w-[100%] top-[85rem] sm:top-[110rem] left-[0] bg-gradient-to-br from-[#f2f2f2]  to-[#D1D1D1] skew-y-[7deg]" />

        <div className="text-[#222222] z-10 flex flex-col sm:flex-row w-[90%] h-[50rem] justify-between relative top-[19rem] sm:top-[26rem]">
          <InfoStats
            styles="bottom-[4rem]"
            icon={TbAffiliateFilled({})}
            stat="346"
            title="NODOS"
            content="Ethereum lo administran miles de voluntarios alrededor del mundo, conocidos como nodos."
          />
          <InfoStats
            icon={TbWorld({})}
            stat="1.06 M"
            title="TRANSACCIONES DE HOY"
            content="El número de transacciones procesadas con éxito en la red durante las últimas 24 horas."
          />
          <InfoStats
            styles="top-[4rem]"
            icon={IoWalletSharp({})}
            stat="28.86 M"
            title="TOTAL DE NGOLD APOSTADOS"
            content="La cantidad total de ETH actualmente en juego y asegurando la red."
          />
        </div>
        <div className="w-[100%] h-[33rem] sm:hidden" />
        {/*-----------------------------> community section <---------------------------*/}
        <div className="w-[100%] h-[35rem] sm:h-[55rem] flex justify-center items-center">
          <Card styles=" h-[25rem] sm:h-[34rem] w-[80%] flex justify-evenly items-center">
            <div className="flex flex-col justify-between items-center sm:items-start w-[90%] h-[20rem] sm:h-[25rem] sm:w-[35%]">
              <Image
                src={"/logo_light.png"}
                alt="Ngold icon"
                height={52.5}
                width={132}
              />

              <h4 className=" font-bold text-[2rem] sm:text-[3.5rem] leading-[2rem] text-center sm:text-left sm:leading-[3.5rem]">
                Unete a nuestra Comunidad
              </h4>

              <SocialContainer />
            </div>
            <div className="hidden sm:flex">
              <Image
                src={"/NGOLDCOIN.png"}
                alt="Ngold coin"
                width={400}
                height={400}
                className=" "
              />
            </div>
          </Card>
        </div>
      </main>
    </>
  );
}
