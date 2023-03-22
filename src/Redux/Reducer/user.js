import * as type from "../Actions/Types";

const initailState = {
  currentUser: null,
  isLoggedIn: false,
};
const User = (state = initailState, action) => {
  switch (action.type) {
    case type.FETCH_USER_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        isLoggedIn: true,
      };

    case type.LOGOUT:
      return {
        ...state,
        currentUser: null,
        isLoggedIn: false,
      };

    default:
      return state;
  }
};

export default User;
