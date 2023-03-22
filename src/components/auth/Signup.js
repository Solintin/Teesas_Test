import React, { useState } from "react";
import EyeOff from "assets/Svg/eyeoff.svg";
import Eyeopen from "assets/Svg/eyeopen.svg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "Redux/Actions/ActionCreators";
function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [type, setType] = useState("password");
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setloading] = useState(false);

  const handleType = () => {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  };

  const register = () => {
    const registraionParams = {
      firstName,
      lastName,
      email,
      password,
      id: Date.now(),
    };
    dispatch(registerUser(registraionParams, navigate, setloading));
  };

  return (
    <div>
      <div className="poppins max-w-xl mx-auto">
        <div className="z-[-1] fixed bg-[#1F2937] h-[250px] top-0 inset-0 rounded-b-[65px] pt-[100px] text-center"></div>

        <div className="p-5 mt-20">
          <h1 className="text-2xl text-white font-semibold text-center">
            SIGN IN
          </h1>

          <div className="bg-white h-full shadow-xl rounded-3xl py-10 px-4 mt-5">
            <div className="grid grid-cols-2 gap-6">
              <div className="mb-4 flex flex-col">
                <label className="mb-2">First Name</label>
                <input
                  type="text"
                  placeholder="John"
                  className="border border-gray-700 px-4 py-3 outline-none rounded-lg"
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
              </div>
              <div className="mb-4 flex flex-col">
                <label className="mb-2">Last Name</label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="border border-gray-700 px-4 py-3 outline-none rounded-lg"
                  onChange={(e) => {
                    setlastName(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="mb-4 flex flex-col">
              <label className="mb-2">Email</label>
              <input
                type="email"
                placeholder="johndoe@gmail.com"
                className="border border-gray-700 px-4 py-3 outline-none rounded-lg"
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
            </div>
            <div className="mt-[30px] flex flex-col">
              <label className="mb-2">Password?</label>
              <div className="flex border border-gray-700 px-4 py-3 space-x-2 items-center rounded-lg">
                <input
                  type={type}
                  placeholder="********"
                  className="outline-none rounded-lg w-full"
                  onChange={(e) => {
                    setpassword(e.target.value);
                  }}
                />
                <button onClick={handleType}>
                  {type === "password" && <img src={EyeOff} alt="" />}
                  {type === "text" && <img src={Eyeopen} alt="" />}
                </button>
              </div>
            </div>

            <button
              className="bg-slate-600 mt-8 py-3 w-full text-white rounded-lg"
              onClick={register}
            >
              {!loading && <div className="font-medium">SIGN UP</div>}
              {loading && <div className="font-medium">Loading...</div>}
            </button>
            <div className="flex justify-center mt-4 items-center">
              <span className="mr-2">You have have an account already? </span>
              <Link to="/" className="font-medium">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
