import { IoClose } from "react-icons/io5";
import tabelaplanos_v1 from "../assets/tabelaplanos_v1.jpg";
import { useModal } from "../context/ModalContext";

function ModalPlans() {
  const { isModalOpenPlans, closeModalPlans } = useModal();

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-10 flex items-center justify-center z-[99] ${
        isModalOpenPlans ? "visible" : "hidden"
      }`}
    >
      {/* Sobreposição escura */}
      <div
        className="fixed top-0 left-0 w-full h-full bg-black opacity-50"
        onClick={closeModalPlans}
      ></div>

      {/* Conteúdo do modal */}
      <div className="flex bg-white p-10 rounded-lg relative">
        <div className="flex absolute top-3 right-3">
          <IoClose
            className="cursor-pointer"
            size={30}
            color="#066334"
            onClick={closeModalPlans}
          />
        </div>
        <img
          className="max-w-xl sm:max-w-[70vw] rounded-xl"
          src={tabelaplanos_v1}
        />
      </div>
    </div>
  );
}

export default ModalPlans;
