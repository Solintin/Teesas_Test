import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";

import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setisOpen] = useState(false);

  return (
    <header className=" bg-white border-b border-gray-300 text-black  py-1 z-10   sticky top-0 inset-x-0">
      <div className="flex justify-between section-container  items-center">
        <div className="flex space-x-8 items-center">
          <Link to="/trainee/dashboard" className="text-center py-2  font-bold">
            Inventory Management System
          </Link>
        </div>

        <div className="space-x-8 font-medium flex items-center ">
          <div className="relative">
            {isOpen && (
              <div
                className="fixed inset-0"
                onClick={() => {
                  setisOpen(false);
                }}
              ></div>
            )}
            <button
              onClick={() => {
                setisOpen(!isOpen);
              }}
              className="text-2xl"
            >
              <CgProfile  />
            </button>
            {isOpen && (
              <div className="top-8 right-2 rounded-lg absolute bg-white shadow w-48  flex flex-col">
                <Link
                  to="/trainee/dashboard"
                  className="p-3 hover:bg-gray-100 rounded-t-lg "
                >
                  User profile
                </Link>
                <Link
                  to="/trainee/dashboard"
                  className="p-3 hover:bg-gray-100 rounded-t-lg "
                >
                  Logout
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
