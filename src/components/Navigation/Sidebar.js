import React from "react";

import users from "assets/Svg/user.svg";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function Sidebar() {
  const location = useLocation();
  const pathname = location.pathname;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch({ type: "LOGOUT_USER" });
    navigate("/");
  };

  return (
    <div className="pt-4 pl-20 w-full text-white">
      <Link to="/">
        {" "}
        <img src={users} alt="" />
      </Link>
      <div className="mt-20 font-bold text-sm">
        <Link
          to="/dashboard/home"
          className={`py-5  pl-2 rounded-l-lg flex space-x-4 ${
            pathname.includes("home") && "bg-[#F4F4F5] text-black"
          }`}
        >
          <img src={users} alt="" />
          <h3>Dashbord</h3>
        </Link>
        <Link
          to="/dashboard/category"
          className={`py-5  pl-2 rounded-l-lg flex space-x-4 ${
            pathname.includes("category") && "bg-[#F4F4F5] text-black"
          }`}
        >
          <img src={users} alt="" />
          <h3>Category</h3>
        </Link>
        <Link
          to="#"
          className={`py-5  pl-2 rounded-l-lg flex space-x-4 ${
            pathname.includes("appointment") && "bg-[#F4F4F5] text-black"
          }`}
        >
          <img src={users} alt="" />
          <h3>Settings</h3>
        </Link>

        <Link
          to="#"
          className={`py-5  pl-2 rounded-l-lg flex space-x-4 ${
            pathname.includes("profile") && "bg-[#F4F4F5] text-black"
          }`}
        >
          <img src={users} alt="" />
          <h3>My profile</h3>
        </Link>
        <Link
          to="#"
          className={`py-5  pl-2 rounded-l-lg flex space-x-4 ${
            pathname.includes("help") && "bg-[#F4F4F5] text-black"
          }`}
        >
          <img src={users} alt="" />
          <h3>Help</h3>
        </Link>
        <button
          onClick={handleLogout}
          className={`py-5  pl-2 rounded-l-lg flex space-x-4`}
        >
          <img src={users} alt="" />
          <h3>Logout</h3>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
