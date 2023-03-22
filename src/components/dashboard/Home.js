import { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { VscEmptyWindow } from "react-icons/vsc";
import { BsCollection } from "react-icons/bs";
import { FaThList } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import AddItem from "components/UI/AddItem";
import { useDispatch, useSelector } from "react-redux";
import { digitFormatter } from "Utils/helper";
import { removeItem } from "Redux/Actions/ActionCreators";
import EditItem from "components/UI/EditItem";
function Home() {
  const { category, categoryItems } = useSelector((state) => state.inventories);
  const { currentUser } = useSelector((state) => state.user);

  const userItems = categoryItems.filter(
    (item) => item.user === currentUser.id
  );
  const userCategory = category.filter((item) => item.user === currentUser.id);

  const updatedUserItems = userItems.map((item) => {
    return {
      ...item,
      category_detail: userCategory.find((x) => x.id === item.categoryId),
    };
  });

  const [filterItems, setFiltereditems] = useState(
    updatedUserItems.filter(Boolean)
  );

  const handleSearch = (e) => {
    const { value } = e.target;
    const result = updatedUserItems.filter(
      (item) =>
        item.name.toLowerCase().includes(value.toLowerCase()) ||
        item.category_detail.name.toLowerCase().includes(value.toLowerCase())
    );
    setFiltereditems(result);
  };
  const dispatch = useDispatch();

  const [actionNo, setactionNo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(null);
  const [itemToEdit, setitemToEdit] = useState(null);

  const handleActionDropDown = (idx) => {
    setactionNo(idx);
  };
  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const handleEditModal = () => {
    setIsEditModalOpen(false);
  };

  const handleDelete = (itemId) => {
    dispatch(removeItem(itemId));
  };
  const handleEdit = (item) => {
    setIsEditModalOpen(true);
    setitemToEdit(item);
  };

  useEffect(() => {
    setFiltereditems(updatedUserItems.filter(Boolean));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryItems]);

  return (
    <div className="mt-6 let swipeLeft">
      {isModalOpen && <AddItem handleModal={handleModal} />}
      {isEditModalOpen && (
        <EditItem item={itemToEdit} handleModal={handleEditModal} />
      )}
      <div className="flex justify-between items-center py-4">
        <div>
          <h1 className="font-bold text-xl">Welcome {currentUser.lastName}!</h1>
        </div>
        <div>
          <button
            onClick={() => {
              setIsModalOpen(!isModalOpen);
            }}
            className="rounded-lg p-2 bg-slate-600 text-white space-x-1 flex items-center"
          >
            <FiPlus />
            <span>Add Item</span>
          </button>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="box_container space-x-2  flex justify-between items-center py-4 px-4">
          <div className="h-10 w-10 rounded-full bg-slate-600 text-white grid place-content-center p-2">
            <BsCollection />
          </div>
          <div>
            <h1 className="text-5xl font-bold text-right">
              {userCategory.length}
            </h1>
            {userCategory.length > 1 && (
              <p className="text-right text-gray-500">Total No of categories</p>
            )}
            {userCategory.length <= 1 && (
              <p className="text-right text-gray-500">Total No of category</p>
            )}
          </div>
        </div>
        <div className="box_container space-x-2  flex justify-between items-center py-4 px-4">
          <div className="h-10 w-10 rounded-full bg-slate-600  text-white grid place-content-center p-2">
            <FaThList />
          </div>
          <div>
            <h1 className="text-5xl font-bold text-right">
              {userItems.length}
            </h1>
            {userItems.length > 1 && (
              <p className="text-right text-gray-500">Total No of items</p>
            )}
            {userItems.length <= 1 && (
              <p className="text-right text-gray-500">Total No of item</p>
            )}{" "}
          </div>
        </div>
      </div>

      <div className="bg-white w-full mt-6 pt-4 rounded-lg">
        <div className="grid md:grid-cols-2  items-center px-4">
          <div className="fonr-semibold text-xl">List of items</div>
          <div>
            <input
              type="search"
              placeholder="Search By Name or Category"
              className="border p-3 outline-none rounded-lg w-full"
              onChange={(e) => {
                handleSearch(e);
              }}
            />
          </div>
        </div>
        {filterItems.length > 0 ? (
          <div className="overflow-x-auto mb-10">
            <div className="mt-6 min-w-[800px]">
              <div className="bg-[#E6EFEF] font-medium p-4 grid grid-cols-12 gap-4">
                <div className="col-span-1">#</div>
                <div className="col-span-2">Item Name</div>
                <div className="col-span-2">Item Category</div>
                <div className="col-span-3">Item Price</div>
                <div className="col-span-2">CreatedAt</div>
                <div className="col-span-2 text-center">Actions</div>
              </div>
              {filterItems.map((item, idx) => (
                <div
                  className=" border-b p-4 grid grid-cols-12 gap-4 items-center hover:bg-slate-300  capitalize"
                  key={idx}
                >
                  <div className="col-span-1"> {idx + 1} </div>
                  <div className="col-span-2">{item.name || "Null"} </div>
                  <div className="col-span-2">
                    {item?.category_detail?.name || "Null"}
                  </div>
                  <div className="col-span-3 ">
                    ${digitFormatter(item.price) || "Null"}
                  </div>
                  <div className="col-span-2">{item.createdAt || "Null"}</div>
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
                      <div className="z-[100] absolute -left-28 shadow-md border bg-white rounded md:h-20 h-auto md:w-44 w-36 flex flex-col divide-y-2">
                        <button
                          onClick={() => {
                            handleEdit(item);
                          }}
                          className="px-4 md:py-2 py-1 text-xs md:text-base flex items-center space-x-2"
                        >
                          <FiEdit />

                          <span>Edit Item</span>
                        </button>
                        <button
                          onClick={() => {
                            handleDelete(item.id);
                          }}
                          className="text-red-500 px-4 md:py-2 py-1 text-xs md:text-base flex items-center space-x-2"
                        >
                          <AiOutlineDelete />
                          <span>Delete Item</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
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
