import React from "react";
import Header from "../Components/Header";
import { Outlet } from "react-router";
import Latest from "../Components/Latest";
import Navbar from "../Components/Navbar";
import LeftAside from "../pages/LeftAside";
import RightAside from "../pages/RightAside";

const HomeLayout = () => {
  return (
    <div className="max-w-[1600px] mx-auto px-5">
      <header>
        <Header></Header>
        <section>
          <Latest></Latest>
        </section>
        <section>
          <Navbar></Navbar>
        </section>
      </header>

      <main className="grid grid-cols-12 mt-5 gap-4">
        <aside className="col-span-3 text-center sticky top-0 h-fit">
          <LeftAside></LeftAside>
        </aside>
        <main className="col-span-6 text-center ">
          <Outlet></Outlet>
        </main>
        <aside className="col-span-3 text-center sticky top-0 h-fit">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
