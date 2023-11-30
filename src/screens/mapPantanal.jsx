import mapa_estadio_2022 from "../assets/mapa-estadio-2022.png";
import { HiMiniPlusCircle } from "react-icons/hi2";

function MapPantanal() {
  return (
    <div className="my-10 w-full flex items-center justify-center sm:flex-col">
      <div className="flex items-center justify-center gap-20 sm:flex-col sm:gap-3 ">
        <div className="flex flex-col gap-5">
          <div>
            <h4 className="font-anton text-3xl text-greenCuiaba sm:text-center">
              O mapa da Arena Pantanal
            </h4>
            <p className="font-inter text-lg sm:text-center">
              Conheça os setores da arena
            </p>
          </div>
          <button className="w-full h-10 text-base font-anton bg-yellowCuiaba text-greenCuiaba rounded-2xl flex items-center justify-center gap-1 hover:scale-[0.98] transition-all sm:hidden">
            <HiMiniPlusCircle />
            DETALHES
          </button>
        </div>
        <img className="max-w-lg sm:max-w-[85vw]" src={mapa_estadio_2022} />
      </div>
    </div>
  );
}

export default MapPantanal;
