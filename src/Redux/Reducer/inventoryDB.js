import * as type from "../Actions/Types";

const initailState = {
  category: [],
  categoryItems: [],
};
const Inventory = (state = initailState, action) => {
  switch (action.type) {
    case type.ADD_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };
    case type.ADD_CATEGORY_ITEM:
      return {
        ...state,
        categoryItems: action.payload,
      };

    default:
      return state;
  }
};

export default Inventory;

// category: [
// {
//   id: "",
//   user: "",
//   name: "",
//   cretaeAt: "",
// },
// ],
// categoryItems: [
// {
//   id: "",
//   user: "",
//   name: "",
//   category: "",
//   createdAt: "",
// },
// ],
