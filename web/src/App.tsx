import { Route, BrowserRouter, Routes } from "react-router-dom";
import { path } from "./paths";

const Home = () => {
  return <div>Welcome to Everything!</div>;
};

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path={path.home} element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
