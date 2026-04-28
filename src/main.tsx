import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./components/theFooter";
import Header from "./components/theHeader";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "normalize.css";
import "./global.scss";
import "./tailwind.css";

export const Layout = () => (
  <>
    <div className="construction-overlay" />
    <div className="construction-tape" title="En construction">En construction</div>
    <Header />
    <Outlet />
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        lazy: () => import("~/pages/index"),
      },
      {
        path: "/cours",
        lazy: () => import("~/pages/cours/index"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
