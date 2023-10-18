import React from "react";
import { Outlet } from "react-router-dom";
import { Breadcrumbs, TopBar } from "..";

export const Layout = () => {
  // console.log("Layout");
  return (
    <>
      <header>
        <TopBar>
          <Breadcrumbs />
        </TopBar>
      </header>
      <main>
        <Outlet />
      </main>
      <footer style={{margin:"75px", textAlign:"center"}}>2023</footer>
    </>
  );
};
