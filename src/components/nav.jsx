import logo_socio_dourado from "../assets/logo_socio_dourado.png";

function Nav() {
  return (
    <div className="flex items-center gap-14 sm:justify-center">
      <img
        className="max-h-[80px] w-auto sm:max-h-[70px]"
        src={logo_socio_dourado}
      />
      <nav className="flex gap-8 items-center z-99 sm:hidden">
        <a className="font-anton text-white text-lg cursor-pointer hover:border-b-2 border-yellowCuiaba transition">
          PLANOS
        </a>
        <a className="font-anton text-white text-lg cursor-pointer hover:border-b-2 border-yellowCuiaba transition">
          REDE DE VANTAGENS
        </a>
        <a className="font-anton text-white text-lg cursor-pointer hover:border-b-2 border-yellowCuiaba transition">
          DÚVIDAS
        </a>
        <a className="font-anton text-white text-lg cursor-pointer hover:border-b-2 border-yellowCuiaba z-[98] transition">
          CONTATO
        </a>
      </nav>
    </div>
  );
}

export default Nav;
