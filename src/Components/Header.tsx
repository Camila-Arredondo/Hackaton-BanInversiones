import { useEffect, useState } from "react";

export function Header() {
  const [currentTime, setCurrentTime] = useState('');
  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const formattedTime = `${padWithZero(now.getDate())}/${padWithZero(now.getMonth() + 1)}/${now.getFullYear()} ${padWithZero(now.getHours())}:${padWithZero(now.getMinutes())}:${padWithZero(now.getSeconds())}`;
      setCurrentTime(formattedTime);
    }, 1000);

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, []);
  const padWithZero = (number: any) => {
    return number < 10 ? `0${number}` : number;
  };
  return (
    <nav className="bg-gray-200  w-full border-b border-gray-200  mb-5">
<div className="flex flex-col md:flex-row md:items-center justify-between mx-auto p-4">
  <img src="logo.png" className="h-12" style={{maxWidth: "50px"}} alt="Flowbite Logo" />

  <div className="flex space-x-3 justify-end md:space-x-0 md:order-2 rtl:space-x-reverse">
    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black ml-1">
    Administrador PAC
    </span>
  </div>

  <div className="flex items-center justify-end mt-3 md:mt-0 md:w-auto md:order-2">
  <span>{currentTime}</span>

  </div>
</div>
    </nav>
  );
}
