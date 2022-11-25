import { FC } from "react";
import { Outlet } from "react-router-dom";

const BaseRoute: FC = () => {
  const user = localStorage.getItem("user");
  console.log(user);

  if (!user) {
    alert("SEM USUARIO LOGADO");
    window.location.href = window.location.origin + "/";
    return null;
  } else return <Outlet />;
};

export default BaseRoute;
