import { useEffect, useState } from "react";
import { DarkModeSwitch } from 'react-toggle-dark-mode';

export function Header() {
  const [currentTime, setCurrentTime] = useState('');
  const [isDarkMode, setDarkMode] = useState(false);

const toggleDarkMode = (checked: boolean) => {
  setDarkMode(checked);
  if(checked){
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  }else{
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";

  }
};

  useEffect(() => {
    
    if(localStorage?.theme === "dark"){
      setDarkMode(true);
    }else{
      setDarkMode(false);
    }

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
    <nav className="bg-slate-900 dark:bg-slate-900/75 dark:border-slate-300/10 w-full border-b border-gray-200  mb-5">
<div className="flex flex-col md:flex-row md:items-center justify-between mx-auto p-4">
  <img src="logo.png" className="h-12" style={{maxWidth: "50px"}} alt="Flowbite Logo" />

  <div className="flex space-x-3 justify-end md:space-x-0 md:order-2 rtl:space-x-reverse">
    <span className="self-center text-2xl font-semibold whitespace-nowrap text-white dark:text-white ml-1">
    Administrador PAC
    </span>
  </div>

  <div className="flex items-center dark:text-white text-white justify-end mt-3 md:mt-0 md:w-auto md:order-2">
  <DarkModeSwitch
      style={{ margin: '10px' }}
      checked={isDarkMode}
      onChange={toggleDarkMode}
      size={30}
      sunColor="orange"
    />

  <span>{currentTime}</span>

  </div>
</div>
    </nav>
  );
}
