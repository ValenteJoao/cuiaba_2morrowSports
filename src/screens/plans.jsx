import CardsPlans from "../components/cardsPlans";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import mirim1 from "../assets/mirim1.png";
import dourado1 from "../assets/dourado1.png";
import bronze1 from "../assets/bronze1.png";
import prata1 from "../assets/prata1.png";
import ouro1 from "../assets/ouro1.png";
import diamante1 from "../assets/diamante1.png";
import { useModal } from "../context/ModalContext";

function Plans() {
  const { openModalPlans } = useModal();

  const slideLeft = () => {
    const slider = document.getElementById("slider");
    if (slider) {
      slider.scrollLeft -= slider.offsetHeight;
    }
  };

  const slideRight = () => {
    const slider = document.getElementById("slider");
    if (slider) {
      slider.scrollLeft += slider.offsetHeight;
    }
  };
  return (
    <div className="w-full h-full bg-backgroundCampo bg-cover bg-center flex items-center flex-col gap-10 pb-20 sm:gap-2 sm:pb-10">
      <div className="w-full h-20 bg-yellowCuiaba flex items-center justify-center ">
        <h2 className="text-greenCuiaba text-[1.8vw] font-anton z-50 sm:text-[3vh]">
          CONHEÇA OS NOSSOS PLANOS
        </h2>
      </div>
      <div className="flex items-center flex-col gap-2 w-8/12 sm:mt-5">
        <h3 className="font-anton text-white text-xl text-center">
          Tem planos para todos. Tem um perfeito para você.
        </h3>
        <p className="font-inter text-white text-sm text-center">
          São várias opções à sua escolha, todos dão direito a assistir a todos
          os jogos do Dourado na Arena Pantanal.
        </p>
      </div>

      <div className="flex items-center justify-center w-11/12 sm:w-screen">
        <button className="mb-16 sm:hidden">
          <BsFillArrowLeftCircleFill
            onClick={slideLeft}
            className="arrow"
            fill="white"
            size={25}
          />
        </button>

        <div
          className="flex gap-16 max-w-[74%] overflow-hidden pt-12 pb-3 mx-14 items-center scroll-smooth sm:max-w-full sm:w-[100vw] sm:mx-0 sm:gap-5 sm:overflow-x-scroll sm:px-[23vw] sm:pt-20"
          id="slider"
          style={{ WebkitScrollbar: { display: "none" } }}
        >
          <CardsPlans
            card={mirim1}
            namePlan="PLANO MIRIM"
            description="Acesso livre em qualquer arquibancada, junto com o titular. Somente
          para dependentes até 12 anos."
            price="R$ 100,00"
            btn="PRESENCIALMENTE"
            date="ANUAL"
          />
          <CardsPlans
            card={dourado1}
            namePlan="PLANO DOURADO"
            description="Acesso livre na Arquibancada Lateral Leste, ala superior."
            price="R$ 49,90"
            btn="ASSINAR"
            date="MÊS"
          />
          <CardsPlans
            card={bronze1}
            namePlan="PLANO BRONZE"
            description="Acesso livre na Arquibancada Sul, ala inferior, atrás do gol."
            price="R$ 74,90"
            btn="ASSINAR"
            date="MÊS"
          />
          <CardsPlans
            card={prata1}
            namePlan="PLANO PRATA"
            description="Acesso livre no setor Leste Inferior, nas laterais do gramado."
            price="R$ 99,90"
            btn="ASSINAR"
            date="MÊS"
          />
          <CardsPlans
            card={ouro1}
            namePlan="PLANO OURO"
            description="Acesso livre no setor Oeste, ala Inferior, nas laterais do gramado."
            price="R$ 149,90"
            btn="ASSINAR"
            date="MÊS"
          />
          <CardsPlans
            card={diamante1}
            namePlan="PLANO DIAMANTE"
            description="Acesso aos camarotes Open Bar de chope e petiscos e visão privilegiada."
            price="R$ 399,90"
            btn="ASSINAR"
            date="MÊS"
          />
        </div>
        <button className="mb-16 sm:hidden">
          <BsFillArrowRightCircleFill
            onClick={slideRight}
            className="arrow"
            fill="white"
            size={25}
          />
        </button>
      </div>

      <div className="w-2/12 h-[1px] bg-white rounded-full sm:my-8 sm:w-[40vw]"></div>

      <div className="flex flex-col items-center justify-between gap-5">
        <h4 className="font-anton text-white text-xl sm:text-center sm:w-10/12">
          Compare nossos planos. Escolha o mais adequado para seu perfil.
        </h4>
        <button
          onClick={openModalPlans}
          className="text-lg font-anton bg-yellowCuiaba text-greenCuiaba px-8 py-2 rounded-xl animate-bounce"
        >
          COMPARE OS PLANOS
        </button>
      </div>
    </div>
  );
}

export default Plans;
