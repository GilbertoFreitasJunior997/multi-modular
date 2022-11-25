import styled from "styled-components";
import colors from "../style/colors";

export const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 40px 1fr;
`;

export const Navbar = styled.div`
  background-color: ${colors.primary};
  color: ${colors.light};

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 45px;

  grid-row: 1 / 2;
  grid-column: 2 / 3;
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;

  background-color: ${colors.secondary};

  display: flex;
  align-items: center;
  justify-content: center;

  grid-row: 2 / 3;
  grid-column: 2 / 3;
`;

export const Content = styled.div`
  width: 97%;
  height: 97%;
  padding: 20px;
  border: none;
  border-radius: 8px;

  background-color: ${colors.light};
  div:first:not([id="ignore-container"]) {
  }
`;
