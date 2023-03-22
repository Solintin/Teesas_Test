import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { IoCloseSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { editCategory } from "Redux/Actions/ActionCreators";

function AddItem({ handleModal, id }) {
  const { category } = useSelector((state) => state.inventories);
  const [categoryName, setCategoryName] = useState("");

  const getCategory = category.find((item) => item.id === id);

  const dispatch = useDispatch();

  const handleCategoryEdit = () => {
    if (categoryName === "") {
      toast.error("Category name can't be empty");
      return;
    }

    const payload = {
      ...getCategory,
      name: categoryName,
    };
    dispatch(editCategory(payload.id, payload, handleModal));
  };
  useEffect(() => {
    setCategoryName(getCategory.name);
  }, [getCategory]);
  return (
    <div>
      <div className="fixed z-1 bg-black/30 inset-0   pt-20 px-4">
        <div className="bg-white rounded-lg md:w-[500px] w-full h-auto mx-auto py-4 let swipeIn">
          <div className="p-4 border-b mb-4 flex justify-between">
            <div>Edit Category</div>
            <button onClick={handleModal}>
              <IoCloseSharp />
            </button>
          </div>

          <div className="px-4 space-y-4">
            <input
              type="text"
              className="border p-3 outline-none rounded-lg w-full mb-2"
              placeholder="Name"
              value={categoryName}
              onChange={(e) => {
                setCategoryName(e.target.value);
              }}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleCategoryEdit();
                }
              }}
            />

            <button
              onClick={handleCategoryEdit}
              className="rounded-lg p-2 mt-2 bg-slate-600 text-white w-full"
            >
              Edit Category
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddItem;
