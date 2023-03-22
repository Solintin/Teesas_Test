import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { VscEmptyWindow } from "react-icons/vsc";
import AddCategory from "components/UI/AddCategory";
import Eyeopen from "assets/Svg/eyeopen.svg";

function Home() {
  const data = [
    {
      id: "456",
      user: "Soliualaley",
      name: "Rich Dad Poor Dad",
      Category: "Public",
      Price: "NGN 1200.00",
      createdAt: "June 12 2023",
    },
    {
      id: "456",
      user: "Soliualaley",
      name: "Rich Dad Poor Dad",
      Category: "Public",
      Price: "NGN 1200.00",
      createdAt: "June 12 2023",
    },
    {
      id: "456",
      user: "Soliualaley",
      name: "Rich Dad Poor Dad",
      Category: "Public",
      Price: "NGN 1200.00",
      createdAt: "June 12 2023",
    },
    {
      id: "456",
      user: "Soliualaley",
      name: "Rich Dad Poor Dad",
      Category: "Public",
      Price: "NGN 1200.00",
      createdAt: "June 12 2023",
    },
    {
      id: "456",
      user: "Soliualaley",
      name: "Rich Dad Poor Dad",
      Category: "Public",
      Price: "NGN 1200.00",
      createdAt: "June 12 2023",
    },
    {
      id: "456",
      user: "Soliualaley",
      name: "Rich Dad Poor Dad",
      Category: "Public",
      Price: "NGN 1200.00",
      createdAt: "June 12 2023",
    },
  ];

  const [actionNo, setactionNo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(null);

  const handleActionDropDown = (idx) => {
    setactionNo(idx);
  };
  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div className="mt-6">
      {isModalOpen && <AddCategory handleModal={handleModal} />}
      <div className="flex justify-between items-center py-4">
        <div>
          {" "}
          <h1 className="font-bold text-xl">Categories</h1>{" "}
        </div>
        <div>
          <button
            onClick={() => {
              setIsModalOpen(!isModalOpen);
            }}
            className="rounded-lg p-2 bg-slate-600 text-white"
          >
            Add Item
          </button>
        </div>
      </div>

      <div className="bg-white w-full mt-6 pt-4 rounded-lg">
        <div className="grid grid-cols-2  items-center px-4">
          <div className="fonr-semibold text-xl"></div>
          <div>
            <input
              type="search"
              placeholder="Search By Category Name"
              className="border p-3 outline-none rounded-lg w-full"
            />
          </div>
        </div>
        {data.length > 0 ? (
         <div className="grid grid-cols-3 gap-4">
            
         </div>
        ) : (
          <div className="bg-white w-full mt-6 p-4 rounded-lg grid place-content-center">
            <div className=" my-4 font-bold text-gray-500">
              <VscEmptyWindow className="h-48 w-48 mb-10" alt="" />
              No Category Found
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
