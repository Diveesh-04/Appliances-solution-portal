import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Items from "./pages/Items";
import ProblemDetails from "./pages/ProblemDetails";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Layout for pages that share the Header and Footer
const MainLayout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/categories", element: <Categories /> },
      { path: "/items/:categoryId", element: <Items /> },
      { path: "/problemdetails/:category/:subcategory/:item", element: <ProblemDetails /> },
    ],
  },
];

const router = createBrowserRouter(routes, {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true,
  },
});

const App = () => <RouterProvider router={router} />;

export default App;