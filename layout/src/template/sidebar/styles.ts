import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../../style/colors";

export const Container = styled.div`
  background-color: ${colors.primary};
  color: ${colors.light};
  width: 200px;

  grid-row: 1 / 3;
  grid-column: 1 / 2;

  display: grid;
  grid-template-rows: 40px 60px 1fr 40px;
`;

export const Title = styled.h1`
  font-size: 1.4em;

  text-align: center;
  line-height: 40px;
`;

export const ChangeModuleContainer = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ChangeModuleButton = styled.button`
  height: 70%;
  width: 90%;

  border: none;
  border-radius: 8px;
  background-color: ${colors.light};
  cursor: pointer;

  transition: all 200ms ease-in-out;

  :active {
    transform: scale(0.95);
  }
`;

export const LinkList = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const LinkItem = styled(Link)`
  text-decoration: none;
  color: ${colors.light};
  height: 30px;
`;

export const Version = styled.div`
  text-align: center;
`;
