import React from "react";
import Image from "next/image";
import { AiOutlineBell, AiOutlineSetting } from "react-icons/ai";

function Header() {
  return (
    <div className="header flex items-center justify-between py-4 border-b border-solid border-gray-600 mx-3">
      <div className="flex items-center">
        <Image
          id="Image"
          className="block h-12 w-auto"
          src="https://1000marcas.net/wp-content/uploads/2021/07/Marvel-Comics-logo.png"
          alt="marvel logo"
          width={100}
          height={100}
        />
        <div className="">
          <button className="ml-2 hover:text-amber-500  ml-5">HOME</button>
        </div>
        <div className="">
          <button className="ml-2 hover:text-amber-500  ml-5">
            PERSONAJES
          </button>
        </div>
      </div>
      <div className="icons flex">
        <div className="mr-2">
          <button className="hover:text-amber-500  mr-5">
            <AiOutlineBell className="w-8 h-8" />
          </button>
        </div>
        <div>
          <button className="hover:text-amber-500 mr-5">
            <AiOutlineSetting className="w-8 h-8" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
