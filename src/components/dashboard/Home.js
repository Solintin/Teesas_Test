import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { VscEmptyWindow } from "react-icons/vsc";
import AddItem from "components/UI/AddItem";

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
    setIsModalOpen(!isModalOpen)
  };
  return (
    <div className="mt-6">
      {isModalOpen && <AddItem handleModal={handleModal} />}
      <div className="flex justify-between items-center py-4">
        <div>
          {" "}
          <h1 className="font-bold text-xl">Dashboard</h1>{" "}
        </div>
        <div>
          <button 
          onClick={()=>{setIsModalOpen(!isModalOpen)}} className="rounded-lg p-2 bg-slate-600 text-white">
            Add Item
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {[1, 3].map((item, idx) => (
          <div className="box_container space-x-2 flex justify-between items-center py-4 px-2" key={idx}>
            <div className="h-10 w-10 rounded-full bg-blue-300 text-greem grid place-content-center p-2">
              DO
            </div>
            <div>
              <h1 className="text-5xl font-bold text-right">32</h1>
              <p className="text-right text-gray-500">Total No of categories</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white w-full mt-6 pt-4 rounded-lg">
        <div className="grid grid-cols-2  items-center px-4">
          <div className="fonr-semibold text-xl">List of items</div>
          <div>
            <input
              type="search"
              placeholder="Search By Name or Category"
              className="border p-3 outline-none rounded-lg w-full"
            />
          </div>
        </div>
        {data.length > 0 ? (
          <div className="mt-6 ">
            <div className="bg-[#E6EFEF] font-medium p-4 grid grid-cols-12 gap-4">
              <div className="col-span-1">#</div>
              <div className="col-span-2">Item Name</div>
              <div className="col-span-2">Item Category</div>
              <div className="col-span-3">Item Price</div>
              <div className="col-span-2">CreatedAt</div>
              <div className="col-span-2 text-center">Actions</div>
            </div>
            {data.map((item, idx) => (
              <div
                className=" border-b p-4 grid grid-cols-12 gap-4 items-center hover:bg-slate-300  capitalize"
                key={idx}
              >
                <div className="col-span-1"> {idx + 1} </div>
                <div className="col-span-2">{item.name} </div>
                <div className="col-span-2"> {item.Category}</div>
                <div className="col-span-3 ">{item.Price}</div>
                <div className="col-span-2">{item.createdAt}</div>
                <div className="col-span-2 flex justify-center relative">
                  <button
                    onClick={() => {
                      handleActionDropDown(idx);
                    }}
                  >
                    <BsThreeDotsVertical />
                  </button>

                  {idx === actionNo && (
                    <div
                      v-if="idx == actionNo"
                      className="z-[9] fixed inset-0"
                      onClick={() => {
                        handleActionDropDown(null);
                      }}
                    ></div>
                  )}
                  {idx === actionNo && (
                    <div className="z-10 absolute -left-28 shadow-md border bg-white rounded md:h-20 h-auto md:w-44 w-36 flex flex-col divide-y-2">
                      <button className="px-4 md:py-2 py-1 text-xs md:text-base flex items-center space-x-2">
                        <FiEdit />

                        <span>Edit Item</span>
                      </button>
                      <button className="text-red-500 px-4 md:py-2 py-1 text-xs md:text-base flex items-center space-x-2">
                        <AiOutlineDelete />
                        <span>Delete Item</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white w-full mt-6 p-4 rounded-lg grid place-content-center">
            <div className=" my-4 font-bold text-gray-500">
              <VscEmptyWindow className="h-48 w-48 mb-10" alt="" />
              No Item Found
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
