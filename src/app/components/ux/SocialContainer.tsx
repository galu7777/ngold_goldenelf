import React from "react";
import { SocialButton } from ".";
import { FaDiscord, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const SocialContainer = () => {
  return (
    <div className="flex justify-between w-[9rem]">
      <SocialButton icon={FaDiscord({})} />
      <SocialButton icon={BsTwitterX({})} />
      <SocialButton icon={FaInstagram({})} />
    </div>
  );
};

export default SocialContainer;
