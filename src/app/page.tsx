import Image from "next/image";
import Link from "next/link";
import React from "react";

const home = () => {
  return (
    <div className=" flex justify-center items-center h-screen">
      <div className="flex flex-col justify-between items-center h-[10rem] w-[100%] ">
        <Link className="flex cursor-pointer items-center justify-evenly w-[18rem] bg-white/[0.1]  backdrop-blur-xl backdrop-brightness-75 rounded-[1rem]" href={"/goldenelf"}>
        <div className="flex items-center mr-[2rem] justify-center w-[7rem] h-[4rem]">
            <Image
              src={"/logo_gonden_elf.png"}
              alt="icon"
              height={52.5}
              width={132}
            />
          </div>
          <p>Golden Elf</p>
        </Link>
        <Link className="flex cursor-pointer items-center justify-evenly w-[18rem] bg-white/[0.1]  backdrop-blur-xl backdrop-brightness-75 rounded-[1rem]" href={"/ngold"}>
          <div className="flex mr-[2rem] items-center justify-center w-[7rem] h-[4rem] ">
            <Image
              src={"/logo_light.png"}
              alt="icon"
              height={52.5}
              width={100}
            />
          </div>

          <p>Ngold</p>
        </Link>
      </div>
    </div>
  );
};

export default home;
