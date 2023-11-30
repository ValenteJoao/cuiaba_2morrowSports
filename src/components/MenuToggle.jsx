import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { RiLoginCircleFill } from "react-icons/ri";
import { useModal } from "../context/ModalContext";

function MenuToggle() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { openModalLogin } = useModal();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    // Impede o scroll quando o menu está aberto
    document.body.style.overflow = menuOpen ? "auto" : "hidden";
  };

  return (
    <div className="sm:flex hidden w-6 h-6 items-center justify-center sm:fixed right-5">
      <button
        onClick={toggleMenu}
        className="text-white cursor-pointer focus:outline-none fixed z-[99]"
      >
        {menuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
      </button>

      {/* Conteúdo do menu */}
      {menuOpen && (
        <div className="h-screen w-full bg-greenCuiaba2 opacity-95 top-0 left-0 fixed flex flex-col items-end justify-around pt-20">
          <div className="flex flex-col text-end gap-10 w-screen items-end pr-6">
            <a className="font-anton text-white text-3xl">PLANOS</a>
            <a className="font-anton text-white text-3xl">REDE DE VANTAGENS</a>
            <a className="font-anton text-white text-3xl ">DÚVIDAS</a>
            <a className="font-anton text-white text-3xl">CONTATO</a>
          </div>
          <div className="flex justify-end pr-6">
            <button
              onClick={openModalLogin}
              className="bg-yellowCuiaba font-anton text-greenCuiaba2 text-2xl px-4 py-2 flex items-center gap-2"
            >
              <RiLoginCircleFill />
              ACESSAR
            </button>
          </div>
          <div className="flex gap-6 w-screen justify-center items-cente mb-10">
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
        </div>
      )}
    </div>
  );
}

export default MenuToggle;
