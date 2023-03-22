import React, { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { VscEmptyWindow } from "react-icons/vsc";
import AddCategory from "components/UI/AddCategory";
import EditCategory from "components/UI/EditCategory";
import Eyeopen from "assets/Svg/eyeopen.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeCategory } from "Redux/Actions/ActionCreators";

function Home() {
  const { category } = useSelector((state) => state.inventories);
  const { currentUser } = useSelector((state) => state.user);
  //get category of current user
  const categories = category.filter((x) => x.user === currentUser.id);

  const dispatch = useDispatch();
  const [actionNo, setactionNo] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(null);
  const [filterCategories, setFilteredCatgories] = useState(categories);

  const handleSearch = (e) => {
    const { value } = e.target;
    const result = categories.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    console.log(categories);
    setFilteredCatgories(result);
  };
  const handleActionDropDown = (idx) => {
    setactionNo(idx);
  };
  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const handleEditModal = () => {
    setIsEditModalOpen(!isEditModalOpen);
  };
  const handleDelete = (id) => {
    dispatch(removeCategory(id));
  };
  const handleEdit = (id) => {
    setIsModalOpen(false);
    handleEditModal();
    setSelectedCategory(id);
  };
  useEffect(() => {
    setFilteredCatgories(categories.filter(Boolean));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);
  return (
    <div className="mt-6">
      {isModalOpen && <AddCategory handleModal={handleModal} />}
      {isEditModalOpen && (
        <EditCategory handleModal={handleEditModal} id={selectedCategory} />
      )}
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
            Add category
          </button>
        </div>
      </div>

      <div className="bg-white w-full mt-6 pt-4 rounded-lg">
        <div className="grid md:grid-cols-2  items-center px-4">
          <div className="fonr-semibold text-xl"></div>
          <div>
            <input
              type="search"
              placeholder="Search By Category Name"
              className="border p-3 outline-none rounded-lg w-full"
              onChange={(e) => {
                handleSearch(e);
              }}
            />
          </div>
        </div>
        {filterCategories.length > 0 ? (
          <div className="mt-6 ">
            <div className="bg-[#E6EFEF] font-medium p-4 grid grid-cols-12 gap-4">
              <div className="col-span-1">#</div>
              <div className="col-span-4">Category Name</div>
              <div className="col-span-4">CreatedAt</div>
              <div className="col-span-3 text-center">Actions</div>
            </div>
            {filterCategories.map((item, idx) => (
              <div
                className=" border-b p-4 grid grid-cols-12 gap-4 items-center hover:bg-slate-300  capitalize"
                key={idx}
              >
                <div className="col-span-1"> {idx + 1} </div>
                <div className="col-span-4">{item.name} </div>
                <div className="col-span-4">{item.createdAt}</div>
                <div className="col-span-3 flex justify-center relative">
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
                    <div className="z-10 absolute -left-28 shadow-md border bg-white rounded  h-auto md:w-52 w-36 flex flex-col divide-y-2">
                      <Link
                        to={`/dashboard/category/${item.id}`}
                        className="px-3 md:py-2 py-1 text-xs md:text-base flex items-center space-x-2"
                      >
                        <img src={Eyeopen} alt="view" className="w-5 " />

                        <span>View Category Items</span>
                      </Link>
                      <button
                        onClick={() => {
                          handleEdit(item.id);
                        }}
                        className="px-4 md:py-2 py-1 text-xs md:text-base flex items-center space-x-2"
                      >
                        <FiEdit />

                        <span>Edit Category</span>
                      </button>
                      <button
                        onClick={() => {
                          handleDelete(item.id);
                        }}
                        className="text-red-500 px-4 md:py-2 py-1 text-xs md:text-base flex items-center space-x-2"
                      >
                        <AiOutlineDelete />
                        <span>Delete Category</span>
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
              No Category Found
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
