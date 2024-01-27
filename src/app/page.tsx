import Link from "next/link";
import React from "react";

const home = () => {
  return (
    <div className=" flex justify-center items-center h-screen">
      <div className="flex flex-col justify-between items-center h-[5rem]">
        <Link href={"/goldenelf"}>
          <p>Golden Elf</p>
        </Link>
        <Link href={"/ngold"}>
          <p>Ngold</p>
        </Link>
      </div>
    </div>
  );
};

export default home;
