import React, { FC } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";

interface Props {
  handleSelect: any;
  options: any;
  setIsOpen: any;
  isOpen: any;
}

const DrowpDownMenu: FC<Props> = ({
  handleSelect,
  options,
  setIsOpen,
  isOpen,
}) => {

    
  return (
    <div className="absolute inline-block text-left w-[100%] ">
      <div className="flex items-center justify-end">
        <HiOutlineDotsVertical
          onClick={() => setIsOpen(!isOpen)}
          className="flex sm:hidden m-[1rem] text-[1.4rem] text-[#b4b4b7]"
        />

      </div>

      {isOpen && (
        <div className="origin-top-right absolute flex justify-center items-center w-[100%] h-[90vh] bg-[#121212] text-[#f2f2f2] ring-1 ">
        
            <ul className="h-[80vh] font-bold w-[90%] text-[1.8rem] sm:w-[30rem] flex flex-col sm:hidden">
              {options}
            </ul>
        </div>
      )}
    </div>
  );
};

export default DrowpDownMenu;
