import bobs from "../assets/bobs.png";
import colegio_cin from "../assets/colegio_cin.png";
import dourado_store from "../assets/dourado_store.png";
import farmacia_unimed from "../assets/farmacia_unimed.png";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

function Partners() {
  const slideLeft = () => {
    const slider2 = document.getElementById("slider2");
    if (slider2) {
      slider2.scrollLeft -= slider2.offsetHeight;
    }
  };

  const slideRight = () => {
    const slider2 = document.getElementById("slider2");
    if (slider2) {
      slider2.scrollLeft += slider2.offsetHeight;
    }
  };
  return (
    <div className="flex flex-col items-center h-80 justify-center gap-10 w-full sm:h-96">
      <div className="w-8/12 ">
        <h4 className="font-anton text-3xl text-greenCuiaba sm:text-center">
          Conheça os nossos parceiros
        </h4>
        <p className="font-inter text-lg text-greenCuiaba sm:text-sm sm:text-center sm:mt-3">
          Rede de vantagens disponivel a partir do{" "}
          <span className="font-inter font-bold italic">plano dourado</span>
        </p>
      </div>
      <div className="flex items-center justify-center w-[95vw]">
        <button className=" mr-14 sm:hidden">
          <BsFillArrowLeftCircleFill
            onClick={slideLeft}
            className="arrow"
            fill="grey"
            size={25}
          />
        </button>
        <div
          className="flex gap-14 max-w-[55%] overflow-hidden items-center scroll-smooth sm:overflow-auto sm:gap-1 sm:max-w-[85vw]"
          id="slider2"
        >
          <img className="max-w-[160px]" src={bobs} alt="" />
          <img className="max-w-[160px]" src={colegio_cin} alt="" />
          <img className="max-w-[160px]" src={dourado_store} alt="" />
          <img className="max-w-[160px]" src={farmacia_unimed} alt="" />
          <img className="max-w-[160px]" src={bobs} alt="" />
          <img className="max-w-[160px]" src={colegio_cin} alt="" />
          <img className="max-w-[160px]" src={dourado_store} alt="" />
        </div>
        <button className="ml-14 sm:hidden">
          <BsFillArrowRightCircleFill
            onClick={slideRight}
            className="arrow"
            fill="grey"
            size={25}
          />
        </button>
      </div>
    </div>
  );
}

export default Partners;
