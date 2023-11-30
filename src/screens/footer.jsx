import logo_cuiaba from "../assets/logo_cuiaba.png";
import logo_socio_dourado from "../assets/logo_socio_dourado.png";
import morrowsportslogowhite from "../assets/2morrowsportslogowhite1.png";

function Footer() {
  return (
    <footer className="flex flex-col w-full h-60 bg-greenCuiaba items-center justify-between sm:justify-center sm:w-screen sm:h-auto sm:gap-10">
      <div className="flex flex-col w-8/12 items-center justify-center pt-8 sm:w-screen">
        <div className="flex sm:flex-col sm:items-center justify-cente sm:gap-5">
          <div className="flex flex-col w-1/3 gap-2 justify-center sm:w-screen sm:items-center">
            <p className="font-anton text-white text-base">
              Cuiabá Esporte Clube
            </p>
            <p className="font-inter text-white text-xs">
              Alameda B, 100 - Jd. Industriário Cuiaba/MT
            </p>
            <p className="font-inter text-white text-xs">
              contato@sociodourado.com.br
            </p>
            <p className="font-inter text-white text-xs">
              CNPJ: 04.847.144/0001-39
            </p>
          </div>
          <div className="flex w-1/3 items-center justify-center gap-8 sm:w-screen">
            <img className="max-w-[70px]" src={logo_cuiaba} alt="" />
            <img className="max-h-[60px]" src={logo_socio_dourado} alt="" />
          </div>
          <div className="flex flex-col gap-2 w-1/3 items-end justify-center sm:hidden">
            <p className="font-anton text-white text-base ">
              Horário de Funcionamento
            </p>
            <p className="font-inter text-white text-right text-xs w-5/6 sm:text-center">
              Durante a semana das 08:30hs às 13hs e das 14hs às 18hs. Horários
              especiais em dias de jogos
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center bg-white w-full gap-12 h-16 sm:flex-col sm:h-auto sm:gap-4 sm:py-3">
        <div>© 2023 Cuiabá Esporte Clube</div>
        <div className="flex items-center justify-center gap-2">
          <p>Coordenado por:</p>
          <img className="max-h-[35px]" src={morrowsportslogowhite} alt="" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
