import React, { FC } from "react";

interface Props {
    icon:React.ReactNode
    title: string
    content: string
    stat: string
    styles?: string
  }

const InfoStats:FC<Props> = ({icon,title,content,stat,styles}) => {
  return (
    <div className={`${styles} relative flex flex-col justify-between text-center h-[15rem] sm:h-[14rem] items-center`}>
      <div className=" sm:w-[20rem] flex flex-col items-center justify-between h-[9rem] ">
        <div className="text-[2.5rem]">
        {icon}
        </div>
        <p className="text-[1.5rem] w-[80%] sm:w-[15rem] leading-[1.5rem] font-bold">
          {title}
        </p>
        <p className="text-[0.9rem] leading-[0.9rem] w-[90%] sm:w-[22rem] font-medium  ">
          {content}
        </p>
      </div>
      <p className="font-extrabold text-[3.5rem]">{stat}</p>
    </div>
  );
};

export default InfoStats;
