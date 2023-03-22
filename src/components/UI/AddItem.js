import React, { useState } from "react";
import toast from "react-hot-toast";
import { IoCloseSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addItem } from "Redux/Actions/ActionCreators";
import { formatDate } from "Utils/helper";

function AddItem({ handleModal }) {
  const { category } = useSelector((state) => state.inventories);
  const { currentUser } = useSelector((state) => state.user);

  const userCategory = category.filter((item) => item.user === currentUser.id);
  const [CatId, setCatId] = useState(null);
  const [price, setPrice] = useState("");
  const [itemName, setitemName] = useState("");

  const dispatch = useDispatch();
  const handleAddItem = () => {
    if (itemName === "" || price === "" || CatId === null) {
      toast.error("All fields are required");
      return;
    }

    const payload = {
      id: Date.now(),
      user: currentUser.id,
      name: itemName,
      price: price,
      categoryId: parseInt(CatId), //if string is passed as categoryID, then parseInt Parses the data to a number
      createdAt: formatDate(Date.now()),
    };
    dispatch(addItem(payload, handleModal));
  };
  return (
    <div>
      <div className="fixed z-1 bg-black/30 inset-0   pt-20 px-4">
        <div className="bg-white rounded-lg md:w-[500px] w-full h-auto mx-auto py-4 let swipeIn">
          <div className="p-4 border-b mb-4 flex justify-between">
            <div>Add New Item</div>
            <button onClick={handleModal}>
              <IoCloseSharp />
            </button>
          </div>
          {category.length >= 1 ? (
            <div className="px-4 space-y-4">
              <input
                type="text"
                className="border p-3 outline-none rounded-lg w-full mb-2"
                placeholder="Name"
                onChange={(e) => {
                  setitemName(e.target.value);
                }}
              />
              <select
                onChange={(e) => {
                  setCatId(e.target.value);
                }}
                className="border p-3 outline-none rounded-lg w-full mb-2"
              >
                <option value=""> --Select Category-- </option>
                {userCategory.map((item, idx) => (
                  <option value={item.id} key={idx}>
                    {item.name}
                  </option>
                ))}
              </select>
              <input
                type="number"
                className="border p-3 outline-none rounded-lg w-full mb-2"
                placeholder="price"
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    handleAddItem();
                  }
                }}
              />
              <button
                onClick={handleAddItem}
                className="rounded-lg p-2 mt-2 bg-slate-600 text-white w-full"
              >
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
