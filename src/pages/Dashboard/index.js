import { Route, Routes } from "react-router-dom";

import Header from "components/Navigation/Header";
import Sidebar from "components/Navigation/Sidebar";
import Home from "components/dashboard/Home";
import Category from "components/dashboard/Category";
import SingleCategory from "components/dashboard/SingleCategory";
import { useState } from "react";

const Index = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <div className="max-w-[1440px] mx-auto  bg-[#F4F4F5]">
      <div className="flex min-h-screen">
        {isMobile && (
          <div
            className="bg-black/30 fixed inset-0 z-[4]"
            onClick={() => {
              setIsMobile(!isMobile);
            }}
          ></div>
        )}
        <div
          className={` ${
            isMobile ? "isOpen" : ""
          } sidebar w-[300px] flex z-[5] bg-slate-600  fixed h-screen `}
        >
          <Sidebar />
        </div>

        <div className={`relative  md:ml-[300px] w-full`}>
          <Header isMobile={isMobile} setIsMobile={setIsMobile} />
          <div className="py-4 section-container ">
            <Routes>
              <Route exact path="/home" element={<Home />} />
              <Route exact path="/category" element={<Category />} />
              <Route exact path="/category/:id" element={<SingleCategory />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
