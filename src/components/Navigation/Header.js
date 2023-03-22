import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
import { logout } from "Redux/Actions/ActionCreators";

function Header({ isMobile, setIsMobile }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isOpen, setisOpen] = useState(false);
  const handleLogout = () => {
    dispatch(logout(navigate));
  };

  return (
    <header className=" bg-white border-b border-gray-300 text-black  py-1 z-10   sticky top-0 inset-x-0">
      <div className="flex justify-between section-container  items-center">
        <div className="flex space-x-2 items-center">
          <button
            onClick={() => {
              setIsMobile(!isMobile);
            }}
            className="block md:hidden"
          >
            <GiHamburgerMenu />
          </button>
          <Link to="/dashboard/home" className="text-center   font-bold">
            Inventory Management System
          </Link>
        </div>

        <div className=" font-medium flex items-center">
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
              className="text-2xl mt-1"
            >
              <CgProfile />
            </button>
            {isOpen && (
              <div className="top-8 right-2 rounded-lg absolute bg-white shadow w-48  flex flex-col">
                <Link
                  to="/dashboard/home"
                  className="p-3 hover:bg-gray-100 rounded-t-lg "
                >
                  User profile
                </Link>
                <button
                  className="p-3 hover:bg-gray-100 rounded-t-lg text-left"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
