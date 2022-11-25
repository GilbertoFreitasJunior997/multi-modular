import { FC, useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import { Content, ContentContainer, Navbar, PageContainer } from "./styles";

const Layout: FC = () => {
  return (
    <PageContainer>
      <Navbar>
        <div>Page Name</div>
        <div>Buttons</div>
      </Navbar>
      <Sidebar />
      <ContentContainer>
        <Content>
          <div id="content-root" />
          <Outlet />
        </Content>
      </ContentContainer>
    </PageContainer>
  );
};

export default Layout;
