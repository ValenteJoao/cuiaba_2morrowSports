import { useState } from "react";
import logo_socio_dourado from "../assets/logo_socio_dourado.png";
import { IoClose, IoEye, IoEyeOff } from "react-icons/io5";
import { useModal } from "../context/ModalContext";

function ModalLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { isModalOpenLogin, closeModalLogin } = useModal();

  const handleLogin = () => {
    // Lógica de autenticação aqui
    console.log("Login:", email, password);
    // Adicione sua lógica de autenticação aqui, como enviar dados para um servidor, etc.
  };

  const handleForgotPassword = () => {
    // Lógica para lidar com esqueceu a senha
    console.log("Esqueceu a senha");
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div
      className={`flex flex-col bg-greenCuiaba2 h-full w-4/12 fixed z-[99] right-0 items-center justify-center sm:w-full ${
        isModalOpenLogin ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="flex absolute top-5 right-10">
        <IoClose
          className="cursor-pointer"
          size={30}
          color="white"
          onClick={closeModalLogin}
        />
      </div>
      <form className="flex flex-col w-7/12 sm:w-9/12 gap-8 items-center">
        <img className="mb-5 max-w-[200px]" src={logo_socio_dourado} />
        <div className="flex flex-col gap-8 w-full">
          <input
            className="w-full px-5 py-3 bg-greenCuiaba2 border border-green3 focus:outline-none text-white font-inter text-sm placeholder:text-green3"
            type="email"
            placeholder="CPF ou E-mail"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="relative">
            <input
              className="w-full px-5 py-3 bg-greenCuiaba2 border border-green3 focus:outline-none text-white font-inter text-sm placeholder:text-green3"
              type={showPassword ? "text" : "password"}
              placeholder="Senha"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute top-1/2 right-4 transform -translate-y-1/2"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <IoEye size={20} color="white" />
              ) : (
                <IoEyeOff size={20} color="white" />
              )}
            </button>
          </div>
        </div>
        <div className="w-full flex flex-col items-end gap-2">
          <button
            type="button"
            onClick={handleLogin}
            className="w-full h-10 text-base font-anton bg-yellowCuiaba text-greenCuiaba flex items-center justify-center gap-2 hover:scale-[0.98] transition-all"
          >
            Acessar
          </button>
          <span
            className="text-white font-inter text-xs font-light cursor-pointer"
            onClick={handleForgotPassword}
          >
            Esqueceu a senha?
          </span>
        </div>
        <div className="mt-3 sm:flex">
          <span className="text-white font-inter text-sm cursor-pointer sm:text-center">
            Ainda não é sócio? <br className="hidden sm:flex" />
            <a className="underline sm:text-center" href="#">
              Associe-se aqui.
            </a>
          </span>
        </div>
      </form>
    </div>
  );
}

export default ModalLogin;
