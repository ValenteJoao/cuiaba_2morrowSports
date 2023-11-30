import Header from "../components/header";
import Nav from "../components/nav";
import deyverson from "../assets/DEYVERSON2.png";
import Lottie from "lottie-react";
import swipe from "../assets/swipe.json";

function Home() {
  return (
    <div className="w-full h-screen bg-timeBackground bg-cover bg-top flex flex-col items-center justify-between sm:h-[100vh]">
      <Header />
      <main className="w-8/12 h-[85%] flex flex-col pt-24 sm:w-screen sm:items-center sm:justify-center gap-12 sm:h-[80vh] sm:gap-1">
        <div className="h-28 flex items-center z-1 sm:w-screen sm:justify-center">
          <Nav />
        </div>

        <div className="flex sm:flex-col sm:h-full sm:items-center sm:justify-center justify-between items-end h-full ">
          <div className="flex h-full items-center">
            <h1 className="font-anton text-[6vw] leading-none text-white pt-4 sm:text-[9vh] sm:pt-0 sm:text-center">
              SEJA UM
              <br /> SÓCIO
              <br />
              TORCEDOR
              <br /> <span className="text-yellowCuiaba">DOURADO</span>
            </h1>
          </div>

          <img
            className="max-w-[45vw] max-h-[85vh] object-contain absolute right-36 bottom-0 -z-0 sm:hidden"
            src={deyverson}
            alt="Deyverson"
          />
        </div>
      </main>
      <Lottie
        animationData={swipe}
        loop={true}
        className="max-w-[80px] pb-5 sm:pb-20"
      />
    </div>
  );
}

export default Home;
