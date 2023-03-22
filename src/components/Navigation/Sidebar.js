import React from "react";
import { BsFillGridFill } from "react-icons/bs";
import { BiCategory } from "react-icons/bi";
import { BsFillGearFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { BiHelpCircle } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";

// BsFillGridFill
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function Sidebar({ isMobile, setIsMobile }) {
  const location = useLocation();
  const pathname = location.pathname;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch({ type: "LOGOUT_USER" });
    navigate("/");
  };

  return (
    <div
      className="pt-4 pl-20 w-full text-white "
      onClick={() => {
        setIsMobile(false);
      }}
    >
      <Link to="/" className="text-xl font-semibold text-white ml-4">
        {" "}
        IMS
      </Link>
      <div className="mt-20 font-bold text-sm">
        <Link
          to="/dashboard/home"
          className={`py-5  pl-2 rounded-l-lg flex space-x-4 ${
            pathname.includes("home") && "bg-[#F4F4F5] text-black"
          }`}
        >
          <BsFillGridFill />
          <h3>Dashboard</h3>
        </Link>
        <Link
          to="/dashboard/category"
          className={`py-5  pl-2 rounded-l-lg flex space-x-4 ${
            pathname.includes("category") && "bg-[#F4F4F5] text-black"
          }`}
        >
          <BiCategory />
          <h3>Category</h3>
        </Link>
        <Link
          to="#"
          className={`py-5  pl-2 rounded-l-lg flex space-x-4 ${
            pathname.includes("appointment") && "bg-[#F4F4F5] text-black"
          }`}
        >
          <BsFillGearFill />
          <h3>Settings</h3>
        </Link>

        <Link
          to="#"
          className={`py-5  pl-2 rounded-l-lg flex space-x-4 ${
            pathname.includes("profile") && "bg-[#F4F4F5] text-black"
          }`}
        >
          <FaUser />
          <h3>My profile</h3>
        </Link>
        <Link
          to="#"
          className={`py-5  pl-2 rounded-l-lg flex space-x-4 ${
            pathname.includes("help") && "bg-[#F4F4F5] text-black"
          }`}
        >
          <BiHelpCircle />
          <h3>Help</h3>
        </Link>
        <button
          onClick={handleLogout}
          className={`py-5  pl-2 rounded-l-lg flex space-x-4`}
        >
          <FiLogOut />
          <h3>Logout</h3>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
