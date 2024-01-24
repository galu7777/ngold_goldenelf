import { BenefitsCard, CallButton, Card, Navbar } from "./components";
import { FaWallet } from "react-icons/fa";
import { PiArrowsLeftRightBold } from "react-icons/pi";
import { TbWorld } from "react-icons/tb";
import { PiMedalFill } from "react-icons/pi";

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
              <div className="flex flex-col items-center justify-between h-[19rem] ">
                <h1 className="text-[7rem] font-bold">Golden Elf</h1>
                <div className="w-[85%] flex flex-col justify-between items-center h-[8rem]">
                  <p className="text-[0.9rem] font-light text-center ">
                    Golden Elf es una colección de 9,999 NFT basados en las
                    leyendas e historias de los mineros de la región de Remedios
                    en Antioquía, Colombia.
                  </p>
                  <CallButton
                    text="Descargar White Paper"
                    styles="bg-transparent border-solid border-[2px] border-[#fffff] text-[#ffffff] text-[0.9rem] w-[13rem]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" z-0 h-[100rem] absolute w-[100%] top-[58rem] blur-sm left-[0] bg-gradient-to-tr from-[#0C0A22]  to-[#05040D] skew-y-[-25deg]" />
        <div className="h-[70rem] w-[100%] flex flex-col justify-around">
          <div className="flex justify-around">
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
          <div className="flex justify-around">
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
      </main>
    </>
  );
}
