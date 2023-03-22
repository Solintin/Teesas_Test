import React, { useState } from "react";
import EyeOff from "assets/Svg/eyeoff.svg";
import Eyeopen from "assets/Svg/eyeopen.svg";
import { Link } from "react-router-dom";
function Login() {
  const [type, setType] = useState("password");
  const handleType = () => {
    if (type === "password") {
      setType("text");
    } else {
      setType("password");
    }
  };
  return (
    <div>
      <div class="poppins max-w-xl mx-auto">
        <div class="z-[-1] fixed bg-[#1F2937] h-[250px] top-0 inset-0 rounded-b-[65px] pt-[100px] text-center"></div>

        <div class="p-5 mt-20">
          <h1 class="text-2xl text-white font-semibold text-center">SIGN IN</h1>

          <div class="bg-white h-full shadow-xl rounded-3xl py-10 px-4 mt-5">
            <div class="grid grid-cols-2 gap-6">
              <div class="mb-4 flex flex-col">
                <label class="mb-2">First Name</label>
                <input
                  type="text"
                  placeholder="John"
                  class="border border-gray-700 px-4 py-3 outline-none rounded-lg"
                />
              </div>
              <div class="mb-4 flex flex-col">
                <label class="mb-2">Last Name</label>
                <input
                  type="text"
                  placeholder="Doe"
                  class="border border-gray-700 px-4 py-3 outline-none rounded-lg"
                />
              </div>
            </div>

            <div class="mb-4 flex flex-col">
              <label class="mb-2">Email</label>
              <input
                type="email"
                placeholder="johndoe@gmail.com"
                class="border border-gray-700 px-4 py-3 outline-none rounded-lg"
              />
            </div>
            <div class="mt-[30px] flex flex-col">
              <label class="mb-2">Password?</label>
              <div class="flex border border-gray-700 px-4 py-3 space-x-2 items-center rounded-lg">
                <input
                  type={type}
                  placeholder="********"
                  class="outline-none rounded-lg w-full"
                />
                <button onClick={handleType}>
                  {type === "password" && <img src={EyeOff} alt="" />}
                  {type === "text" && <img src={Eyeopen} alt="" />}
                </button>
              </div>
            </div>

            <button class="bg-sbc-core py-3 w-full text-white rounded-lg">
              <div class="font-medium">SIGN UP</div>
            </button>
            <div class="flex justify-center mt-4 items-center">
              <span class="mr-2">You have have an account already? </span>
              <Link to="/" class="font-medium">
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
