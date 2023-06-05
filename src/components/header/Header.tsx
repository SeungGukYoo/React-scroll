import React from "react";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full border-[#ddd]	border-b">
      <nav className="max-w-[1024px] h-[44px] m-auto px-[1rem]">
        <div className="w-full h-full flex justify-between items-center">
          <a className="navText" href="#">
            Rooms
          </a>
          <a className="navText" href="#">
            Ideas
          </a>
          <a className="navText" href="#">
            Stores
          </a>
          <a className="navText" href="#">
            Contact
          </a>
        </div>
      </nav>
      <nav className="max-w-[1024px] px-[1rem] h-[52px]  m-auto">
        <div className="h-full flex items-center">
          <a className="mr-auto text-[1.4rem] font-semibold" href="#">
            AirMug Pro
          </a>
          <a className="ml-[2em] text-[0.8rem]" href="#">
            개요
          </a>
          <a className="ml-[2em] text-[0.8rem]" href="#">
            제품사양
          </a>
          <a className="ml-[2em] text-[0.8rem]" href="#">
            구입하기
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
