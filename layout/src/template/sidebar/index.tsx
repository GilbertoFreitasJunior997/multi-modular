import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

const Sidebar: FC = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");

  const [base, setBase] = useState(true);

  return (
    <S.Container>
      <S.Title>SISTEMA</S.Title>
      <S.ChangeModuleContainer>
        <S.ChangeModuleButton
          onClick={() => {
            if (!user) {
              alert("FAÇA LOGIN PARA MUDAR DE MODULO");
              return;
            }

            if (!base) navigate("/");

            setBase((v) => !v);
          }}
        >
          {base ? "IR PARA " : "SAIR DO "}FINANCEIRO
        </S.ChangeModuleButton>
      </S.ChangeModuleContainer>
      <S.LinkList>
        <S.LinkItem to="/">BASE</S.LinkItem>
        {!base && <S.LinkItem to="/financeiro">FINANCEIRO</S.LinkItem>}
      </S.LinkList>

      <S.Version>v 0.0.1</S.Version>
    </S.Container>
  );
};

export default Sidebar;
