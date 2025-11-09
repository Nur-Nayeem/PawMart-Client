import React, { use } from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import { ThemeContext } from "../contexts/ThemeContext";

const MainLayout = () => {
  const { theme } = use(ThemeContext);
  return (
    <div className={theme == "light" ? "gradient-bg" : "gradient-bg-dark"}>
      <header className="fixed top-2 w-full z-50">
        <nav className="container mx-auto">
          <Navbar />
        </nav>
      </header>
      <main className="container mx-auto pt-30">
        <Outlet />
      </main>
      <footer>Footer</footer>
    </div>
  );
};

export default MainLayout;
