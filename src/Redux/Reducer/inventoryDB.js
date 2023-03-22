import * as type from "../Actions/Types";

const initailState = {
  category: [
    {
      id: "",
      user: "",
      name: "",
      cretaeAt: "",
    },
  ],
  categoryItems: [
    {
      id: "",
      user: "",
      name: "",
      category: "",
      createdAt: "",
    },
  ],
};
const User = (state = initailState, action) => {
  switch (action.type) {
    case type.LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.accessToken,
      };

    default:
      return state;
  }
};

export default User;
