import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landing/landing";
import BaseRoute from "./routes/base";

const App: FC = () => {
  return (
    <>
      <BrowserRouter basename="financeiro">
        <Routes>
          <Route element={<BaseRoute />}>
            <Route index element={<LandingPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
