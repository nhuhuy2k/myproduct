import { Routes, Route } from "react-router-dom";

import Home from "../pages/home/Home";
import Category from "../pages/category/Category";

const publicRoutes = [
  { path: "/", compoment: Home },
  { path: "/:category", compoment: Category },
];

const RoutesConfig = () => {
  return (
    <Routes>
      {publicRoutes.map((route, index) => {
        return (
          <Route key={index} path={route.path} element={<route.compoment />} />
        );
      })}
    </Routes>
  );
};
export default RoutesConfig;
