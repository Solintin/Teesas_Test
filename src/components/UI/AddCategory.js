import React, { useState } from "react";
import toast from "react-hot-toast";
import { IoCloseSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { addCategory } from "Redux/Actions/ActionCreators";
import { formatDate } from "Utils/helper";

function AddItem({ handleModal }) {
  const { currentUser } = useSelector((state) => state.user);

  const [categoryName, setCategoryName] = useState("");

  const dispatch = useDispatch();
  const handleCategory = () => {
    if (categoryName === "") {
      toast.error("Category name can't be empty");
      return;
    }

    const payload = {
      id: Date.now(),
      user: currentUser.id,
      name: categoryName,
      createdAt: formatDate(Date.now()),
    };
    dispatch(addCategory(payload, handleModal));
  };
  return (
    <div>
      <div className="fixed z-1 bg-black/30 inset-0   pt-20 px-4">
        <div className="bg-white rounded-lg md:w-[500px] w-full h-auto mx-auto py-4 let swipeIn">
          <div className="p-4 border-b mb-4 flex justify-between">
            <div>Add New Cateogry</div>
            <button onClick={handleModal}>
              <IoCloseSharp />
            </button>
          </div>

          <div className="px-4 space-y-4">
            <input
              type="text"
              className="border p-3 outline-none rounded-lg w-full mb-2"
              placeholder="Name"
              onChange={(e) => {
                setCategoryName(e.target.value);
              }}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleCategory();
                }
              }}
            />

            <button
              onClick={handleCategory}
              className="rounded-lg p-2 mt-2 bg-slate-600 text-white w-full"
            >
              Add New Category
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddItem;
