import { BenefitsCard, CallButton, Card, Navbar } from "./components";
import { FaWallet } from "react-icons/fa";
import { PiArrowsLeftRightBold } from "react-icons/pi";
import { TbWorld } from "react-icons/tb";
import { PiMedalFill } from "react-icons/pi";
import WalletButton from "./components/ux/button/WalletButton";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="flex w-[100%] min-h-screen flex-col items-center justify-center relative">
        <Navbar />
        <div
          className={`  bg-[url('/landingbg.jpg')] w-[100%] bg-no-repeat bg-cover bg-right-bottom z-40`}
        >
          <div
            className={` bg-black/[0.4] w-[100%] backdrop-brightness-75 min-h-screen`}
          >
            <div className="flex flex-col items-center justify-center h-screen ">
              <div className="flex flex-col items-center justify-between sm:h-[19rem] ">
                <h1 className="text-[5rem] text-center leading-[5rem] sm:leading-[7rem] sm:text-[7rem] font-bold">
                  Golden Elf
                </h1>
                <div className="w-[85%] flex flex-col justify-between items-center h-[13rem]">
                  <p className="text-[0.8rem] sm:text-[0.9rem] font-light text-center ">
                    Golden Elf es una colección de 9,999 NFT basados en las
                    leyendas e historias de los mineros de la región de Remedios
                    en Antioquía, Colombia.
                  </p>
                  <div className="flex flex-col justify-between h-[55%]">
                    <CallButton
                      text="Descargar White Paper"
                      styles="bg-transparent border-solid border-[2px] border-[#fffff] text-[#ffffff] text-[0.9rem] sm:w-[13rem] w-[15rem]"
                    />
                    <WalletButton styles="w-[15rem] flex sm:hidden" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" z-0 h-[60rem] absolute w-[100%] top-[58rem]  left-[0] bg-gradient-to-tr from-[#0C0A22]  to-[#05040D] skew-y-[-25deg]" />
        <div className="h-[105rem] sm:h-[70rem] w-[100%] flex flex-col justify-end sm:justify-evenly ">
          <div className="flex flex-col sm:flex-row justify-around items-center">
            <BenefitsCard
              title="Colecciona"
              icon={FaWallet({})}
              content="Compra una parte de nuestra historia y sé parte de la comunidad Gold Elf.¡Explora, elige y colecciona ahora! Dibujados por @luisordoñezoficial, mejor caricaturista del mundo."
            />
            <BenefitsCard
              title="Tradea"
              icon={PiArrowsLeftRightBold({})}
              content="Intercambia todos los coleccionables oficiales de Golden elf con la tecnología blockchain, transfiere de forma segura la propiedad de tu NFT a cualquier otra persona en cualquier momento."
            />
          </div>
          <div className="flex flex-col sm:flex-row justify-around items-center">
            <BenefitsCard
              title="Conecta"
              icon={TbWorld({})}
              content="Conéctate con nuestra apasionante comunidad online de aficionados y celebra descubriendo nuevos amigos."
            />
            <BenefitsCard
              title="Gana"
              icon={PiMedalFill({})}
              content="Obten beneficios como: Monedas de oro físicas reales, Cuadros físicos con firmados por el artista Luis Ordoñez, Estatuas del Golden Elf bañadas en oro de 24 kilates y mucho mas."
            />
          </div>
        </div>

        <div className=" bg-[url('/bghouse.png')] bg-no-repeat bg-cover w-[100%] h-[110rem] bg-[center_top_-11rem] z-10 ">
         <div className="flex flex-col items-center justify-center h-[70rem] sm:h-[80rem]">

          <div className="h-[10rem] sm:h-[7rem] text-[4.5rem] text-center sm:text-[6rem] font-extrabold leading-[4.5rem] sm:leading-[5.5rem] [text-shadow:_2px_2px_4px_rgb(0_0_0_/_25%)]">
            <h3>Golden Elf</h3>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center">
            <div className=" shadow-md rounded-full bg-white/[0.099] overflow-hidden backdrop-blur-sm backdrop-brightness-75 m-[0.5rem] sm:m-[2rem]">
              <Image
                src={"/elf_8.webp"}
                alt="elf_8"
                width={300}
                height={300}
                className=" h-[260px] sm:h-[300px] w-[260px] sm:w-[300px]"
              />
            </div>
            <div className="flex flex-col text-center sm:items-start items-center justify-between h-[17rem] sm:h-[15rem] sm:text-left w-[90%] sm:w-[35%] m-[0.5rem] sm:mx-[2rem]">
              <div className="flex flex-col justify-between h-auto sm:h-[10rem]">
                <p className="text-[0.9rem] font-light">
                  0.0005 ETH | 1 de 100 minteados
                </p>
                <div className=" text-[3.5rem] sm:text-[3.5rem] font-bold leading-[4.5rem] sm:leading-[3.5rem] [text-shadow:_2px_2px_4px_rgb(0_0_0_/_25%)]">
                  <h2>Mintear</h2>
                </div>
                <p className="text-[0.8rem] sm:text-[0.9rem] sm:leading-[1.2rem] font-light">
                  Intercambia todos los coleccionables oficiales de Golden elf
                  con la tecnología blockchain, transfiere de forma segura la
                  propiedad de tu NFT a cualquier otra persona en cualquier
                  momento.
                </p>
              </div>
              <WalletButton styles="w-[50%]" />
            </div>
          </div>
         </div>

        </div>
        <div className="w-[100%] h-[93rem]  " />
      </main>
    </>
  );
}
