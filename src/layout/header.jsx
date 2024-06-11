import logo from "../../public/Microsoft_To-Do_icon.png";
import useThem from "../hooks/useThem";
import { IoMoonSharp } from "react-icons/io5";
import { BiSolidSun } from "react-icons/bi";
const Header = () => {
  const [them, setThem] = useThem();

  return (
    <header className="container dark:bg-slate-600  bg-slate-100  flex justify-between m-auto p-5 border border-blue-700 rounded-3xl mt-5 ">
      <span className="flex gap-3">
        <img src={logo} alt="logo" className="w-12 h-12" />
        <div className="mt-2 font-mono font-bold text-blue-500 text-2xl">
          To Do App
        </div>
      </span>

      <div className="mt-1">
        {them == "light" ? (
          <button onClick={() => setThem("dark")}>
            <IoMoonSharp className="w-8 h-8 m-auto items-center text-blue-500" />
          </button>
        ) : (
          <button onClick={() => setThem("light")}>
            <BiSolidSun className="w-8 h-8 m-auto items-center text-blue-500" />
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
