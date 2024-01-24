import React, { FC } from "react";
import { Card } from "..";

interface Props {
    icon:React.ReactNode
    title: string
    content: string
  }

const BenefitsCard:FC<Props> = ({icon,title,content}) => {
  return (
    <Card styles="h-[23rem] w-[35%] ">
      <div className="flex flex-col px-[3rem] pt-[2rem] justify-around h-[20rem]">
        <div className=" text-[2rem] text-[#77FFBD] h-[5rem] w-[5rem] flex justify-center items-center border-solid border-[1px] border-white/[0.1] bg-white/[0.026] backdrop-blur-xl backdrop-brightness-75 rounded-full">
          {icon}
        </div>
        <div className="flex flex-col text-left min-h-[9.9rem] max-w-[25rem]">
          <h3 className="text-[3rem] font-bold">{title}</h3>
          <p className="text-[0.9rem] text-[#DADADA]">
            {content}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default BenefitsCard;
