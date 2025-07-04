import { Route, BrowserRouter, Routes } from "react-router-dom";
import { path } from "./paths";

import { NavBar } from "./components/NavBar";
import { Home } from "./views/Home";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NavBar />} >
          <Route path={path.home} element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
