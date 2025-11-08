import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="gradient-bg">
      <header className="container mx-auto">
        <Navbar />
      </header>
      <main className="container mx-auto mt-10">
        <Outlet />
      </main>
      <footer>Footer</footer>
    </div>
  );
};

export default MainLayout;
