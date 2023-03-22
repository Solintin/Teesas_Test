import React from "react";
import { IoCloseSharp } from "react-icons/io5";

function AddItem({ handleModal }) {
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

          <div className="px-4 space-y-4">
            <input
              type="text"
              className="border p-3 outline-none rounded-lg w-full mb-2"
              placeholder="Name"
            />
        
            <button className="rounded-lg p-2 mt-2 bg-slate-600 text-white w-full">
              Add New Category
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddItem;
