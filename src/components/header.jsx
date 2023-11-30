import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { RiLoginCircleFill } from "react-icons/ri";
import { useModal } from "../context/ModalContext";
import logo_cuiaba from "../assets/logo_cuiaba.png";
import MenuToggle from "./MenuToggle";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const { openModalLogin } = useModal();

  return (
    <header className="h-16 w-full sm:w-screen bg-greenCuiaba flex items-center justify-center animate-slideBottom bg-opacity-80 fixed z-50 shadow-md">
      <div className="w-8/12 h-5/6 flex items-center justify-between sm:w-screen">
        <div className="flex gap-2 basis-1/3 sm:hidden">
          <FaFacebook
            className="cursor-pointer hover:scale-95 transition-transform"
            size={25}
            color="white"
          />
          <AiFillInstagram
            className="cursor-pointer hover:scale-95 transition-transform"
            size={25}
            color="white"
          />
          <FaXTwitter
            className="cursor-pointer hover:scale-95 transition-transform"
            size={25}
            color="white"
          />
          <FaYoutube
            className="cursor-pointer hover:scale-95 transition-transform"
            size={25}
            color="white"
          />
        </div>

        <div className="flex basis-1/3 justify-center sm:basis-full">
          <img className="max-w-[40px]" src={logo_cuiaba} />
        </div>

        <MenuToggle />

        <div className="flex basis-1/3 justify-end sm:hidden ">
          <button
            onClick={openModalLogin}
            className="bg-yellowCuiaba font-anton text-greenCuiaba2 text-lg px-3 py-1 flex items-center gap-2 cursor-pointer hover:scale-[0.98] transition-transform"
          >
            <RiLoginCircleFill />
            ACESSAR
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
