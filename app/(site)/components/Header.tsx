import React from "react";
import { AiOutlineBell, AiOutlineSetting } from "react-icons/ai";

function Header() {
  return (
    <div className="header flex items-center justify-between py-4 border-b border-solid border-gray-600 mx-3">
      <div className="flex items-center">
        <img
          id="Image"
          className="block h-12 w-auto"
          src="https://1000marcas.net/wp-content/uploads/2021/07/Marvel-Comics-logo.png"
          alt="marvel logo"
          width={100}
          height={100}
        />
        <button className="ml-2 colors">HOME</button>
        <button className="ml-2">PERSONAJES</button>
      </div>
      <div className="icons flex">
        <div className="mr-2">
          <button>
            <AiOutlineBell className="w-8 h-8" />
          </button>
        </div>
        <div>
          <button>
            <AiOutlineSetting className="w-8 h-8" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
