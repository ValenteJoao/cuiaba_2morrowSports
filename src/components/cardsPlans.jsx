function CardsPlans({ card, namePlan, description, price, btn, date }) {
  return (
    <div className="flex flex-col relative items-center justify-center z-0">
      <img
        className="w-[8vw] absolute -top-12 z-50 sm:w-[18vh] sm:-top-16"
        src={card}
      />
      <div className="w-52 h-56 bg-white flex  flex-col items-center justify-center rounded-2xl gap-3 relative border-4 border-yellowCuiaba sm:w-[55vw] ">
        <h3 className="font-anton text-2xl text-greenCuiaba">{namePlan}</h3>
        <p className="font-inter text-center w-10/12 text-xs text-greenCuiaba2">
          {description}
        </p>
        <div className="bg-yellowCuiaba p-3 flex items-center justify-center rounded-2xl absolute -bottom-7">
          <div className="font-anton text-lg text-greenCuiaba">
            {price} /{" "}
            <span className="font-anton text-greenCuiaba text-sm">{date}</span>
          </div>
        </div>
      </div>
      <div
        className={`${
          btn === "ASSINAR"
            ? "border-yellowCuiaba text-yellowCuiaba cursor-pointer hover:scale-105 hover:bg-yellowCuiaba hover:text-greenCuiaba transition-transform"
            : "border-white text-white"
        } border-2 font-anton p-2 flex items-center justify-center rounded-2xl mt-10 w-32`}
      >
        {btn}
      </div>
    </div>
  );
}

export default CardsPlans;
