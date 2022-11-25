import { FC } from "react";

const LandingPage: FC = () => {
  return (
    <div>
      <h1>BEM VINDO AO MODULO BASE</h1>
      <br />
      <button
        onClick={() => {
          localStorage.setItem("user", "usuario_exemplo");
          alert("LOGADO");
        }}
      >
        LOGIN
      </button>
      <br />
      <button
        onClick={() => {
          localStorage.removeItem("user");
          alert("DESLOGADO");
        }}
      >
        LOGOFF
      </button>
    </div>
  );
};

export default LandingPage;
