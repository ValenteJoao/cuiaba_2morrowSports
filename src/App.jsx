import "./App.css";
import ModalLogin from "./components/modalLogin";
import ModalPlans from "./components/modalPlans";
import { ModalProvider } from "./context/ModalContext";
import Footer from "./screens/footer";
import Home from "./screens/home";
import MapPantanal from "./screens/mapPantanal";
import NextGames from "./screens/nextGames";
import Partners from "./screens/partners";
import Plans from "./screens/plans";

function App() {
  return (
    <div className="w-full">
      <ModalProvider>
        <ModalPlans />
        <ModalLogin />
        <Home />
        <Plans />
        <MapPantanal />
        <NextGames />
        <Partners />
        <Footer />
      </ModalProvider>
    </div>
  );
}

export default App;
