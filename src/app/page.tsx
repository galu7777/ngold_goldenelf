import { CallButton, Navbar } from "./components";

export default function Home() {
  return (
    <>
      <main className="flex w-[100%] min-h-screen flex-col items-center justify-center relative">
        <Navbar />
        <div
          className={`  bg-[url('/landingbg.jpg')] w-[100%] bg-no-repeat bg-cover bg-right-bottom `}
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

        <div className="h-screen">
        </div>
      </main>
    </>
  );
}
