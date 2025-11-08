import React from "react";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
      <header>
        <nav>navbar</nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </div>
  );
};

export default MainLayout;
