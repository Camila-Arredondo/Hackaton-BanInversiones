import { useState } from "react";

export function Header() {

  return (
    <nav className="bg-gray-200  w-full border-b border-gray-200  mb-5">
      <div className=" flex flex-wrap items-center justify-between mx-auto p-4">
         <img src="logo.png" className="h-12" alt="Flowbite Logo" />

        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">


        </div>
        <div className="items-center justify-between  md:flex md:w-auto md:order-1" id="navbar-sticky">
        <div className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black ml-1">
              Administrador PAC
            </div>

        </div>
      </div>
    </nav>
  );

}
