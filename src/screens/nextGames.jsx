import gameDay from "../assets/gameDay.png";
import mascote from "../assets/mascote.png";
import { HiMiniTicket } from "react-icons/hi2";

function NextGames() {
  return (
    <div className="w-full h-96 bg-estadioBackground bg-cover bg-center flex flex-col items-center justify-center gap-7 relative">
      <div className="flex flex-col justify-center items-center gap-2">
        <h4 className="font-anton text-3xl text-white mb-2">Próximos jogos</h4>
        <div>
          <img className="max-w-sm sm:max-w-[75vw] sm:pl-[6vw]" src={gameDay} />
        </div>
        <p className="text-center font-inter text-sm text-white">
          Brasileiro Série A - 2º Turno - 36ª Rodada
          <br /> 📅 Data: 29/11/23 às 20:00
          <br /> 📍 Local: Arena Pantanal
        </p>
      </div>

      <div>
        <button className="w-60 h-10 text-base font-anton bg-yellowCuiaba text-greenCuiaba rounded-2xl flex items-center justify-center gap-2 hover:scale-[0.98] transition-all">
          <HiMiniTicket />
          COMPRE AGORA O SEU INGRESSO
        </button>
      </div>

      <img
        className="absolute max-w-[25vw] -bottom-36 right-24 sm:hidden"
        src={mascote}
      />
    </div>
  );
}

export default NextGames;
