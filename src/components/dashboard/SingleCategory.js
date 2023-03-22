import React, { useState } from "react";

import { VscEmptyWindow } from "react-icons/vsc";
import AddItemIntoCategory from "components/UI/AddItemIntoCategory";
import ItemIcon from "assets/Svg/item.png";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { digitFormatter } from "Utils/helper";
import { removeItem } from "Redux/Actions/ActionCreators";
import EditItem from "components/UI/EditItem";

function Home() {
  const { id } = useParams();
  console.log(id);
  const { categoryItems } = useSelector((state) => state.inventories);
  console.log(categoryItems);
  const dispatch = useDispatch();

  const userItems = categoryItems.filter((item) => item.categoryId === +id);

  const [isModalOpen, setIsModalOpen] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(null);
  const [itemToEdit, setitemToEdit] = useState(null);

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const handleDelete = (itemId) => {
    dispatch(removeItem(itemId));
  };
  const handleEditModal = () => {
    setIsEditModalOpen(false);
  };
  const handleEdit = (item) => {
    setIsEditModalOpen(true);
    setitemToEdit(item);
  };

  return (
    <div className="mt-6">
      {isModalOpen && (
        <AddItemIntoCategory catId={id} handleModal={handleModal} />
      )}
      {isEditModalOpen && (
        <EditItem item={itemToEdit} handleModal={handleEditModal} />
      )}
      <div className="flex justify-between items-center py-4">
        <div>
          <h1 className="font-bold text-xl">Categories</h1>
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

      <div className="bg w-full mt-6 pt-4 rounded-lg">
        {userItems.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-4">
            {userItems.map((item, idx) => (
              <div className="box_container w-full" key={idx}>
                <img
                  src={ItemIcon}
                  alt=""
                  className="w- h-[200px] object-cover w-full"
                />
                <div className="p-3">
                  <div className="grid grid-cols-12 gap-6 mb-4">
                    <div className="col-span-3 font-medium">Name:</div>
                    <div className="col-span-9 truncate"> {item.name} </div>
                  </div>
                  <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-3 font-medium">price:</div>
                    <div className="col-span-9 truncate">
                      ${digitFormatter(item.price)}
                    </div>
                  </div>
                </div>
                <div className=" text-slate-600  mt-2 grid md:grid-cols-2 rounded-b-lg">
                  <button
                    onClick={() => {
                      handleEdit(item);
                    }}
                    className="bg-slate-300 p-2 rounded-bl-lg"
                  >
                    EDIT
                  </button>
                  <button
                    onClick={() => {
                      handleDelete(item.id);
                    }}
                    className="text-white bg-red-300 p-2 rounded-br-lg"
                  >
                    DELETE
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white w-full mt-6 p-4 rounded-lg grid place-content-center">
            <div className=" my-4 font-bold text-gray-500 text-center">
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
