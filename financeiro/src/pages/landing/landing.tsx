import { FC } from "react";

const LandingPage: FC = () => {
  const user = localStorage.getItem("user");

  return <h1> {user}, BEM VINDO AO FINANCEIRO! </h1>;
};

export default LandingPage;
