import { combineReducers } from "redux";
import UserDB from "./usersDB";
import User from "./user";
import InventoryDB from "./inventoryDB";

const appReducer = combineReducers({
  user: User,
  inventories: InventoryDB,
  users: UserDB,
});

const rootReducer = (state, action) => {
  if (action.type === "LOGOUT") {
    // storage.removeItem('persist:otherKey')
    localStorage.removeItem("persist:root");

    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export default rootReducer;
