import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function AddItem({ handleModal }) {
  const { category } = useSelector((state) => state.inventories);

  return (
    <div>
      <div className="fixed z-1 bg-black/30 inset-0   pt-20">
        <div className="bg-white rounded-lg w-[500px] h-auto mx-auto py-4 let swipeIn">
          <div className="p-4 border-b mb-4 flex justify-between">
            <div>Add New Item</div>
            <button onClick={handleModal}>
              <IoCloseSharp />
            </button>
          </div>
          {category.length > 2 ? (
            <div className="px-4 space-y-4">
              <input
                type="text"
                className="border p-3 outline-none rounded-lg w-full mb-2"
                placeholder="Name"
              />
              <select className="border p-3 outline-none rounded-lg w-full mb-2">
                <option value=""> --Select Category-- </option>
                <option value="">Story Book</option>
                <option value="">Story Book</option>
                <option value="">Story Book</option>
              </select>
              <input
                type="number"
                className="border p-3 outline-none rounded-lg w-full mb-2"
                placeholder="price"
              />
              <button className="rounded-lg p-2 mt-2 bg-slate-600 text-white w-full">
                Add Item
              </button>
            </div>
          ) : (
            <div className="py-6 px-3 grid place-content-center text-center">
              To add an item you need a category
              <Link
                to="/dashboard/category"
                className="text-slate-600 font-medium"
              >
                Add Category
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AddItem;
