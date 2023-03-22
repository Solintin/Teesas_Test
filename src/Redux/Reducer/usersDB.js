import * as type from "../Actions/Types";

const initailState = {
  allUsers: [],
};
const User = (state = initailState, action) => {
  switch (action.type) {
    case type.REGISTER_NEW_USER:
      return {
        ...state,
        allUsers: action.payload,
      };

    default:
      return state;
  }
};

export default User;
