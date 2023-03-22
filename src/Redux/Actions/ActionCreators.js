// Action Creators
import * as type from "./Types";
import toast from "react-hot-toast";

const logout = () => {
  return {
    type: type.LOGOUT,
  };
};

const registerUser = (payload) => {
  return (dispatch, state) => {
    let allUsersCopy = [];

    allUsersCopy = state.allUsers;
    const newUser = payload;
    const isUserExist = allUsersCopy.find(
      (user) => user.email === newUser.email
    );
    if (!isUserExist) {
      allUsersCopy.push(newUser);
      dispatch({ type: type.REGISTER_NEW_USER, payload: allUsersCopy });
      toast.success("Registration successful");
    } else {
      toast.error("User already exist");
    }
  };
};

const LoginAction = (loginParams, navigate, setLoading) => {
  return async (dispatch, state) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      const User = state.find((user) => user.email === loginParams.email);
      if (User) {
        const isPasswordMatch = User.password === loginParams.password;
        if (isPasswordMatch) {
          dispatch({ type: type.FETCH_USER_SUCCESS, payload: User });
          toast.success("Login successful");
          navigate("/dashboard");
        } else {
          toast.error("Email or password incorrect");
        }
      } else {
        toast.error("User not found");
      }
    }, 1000);
  };
};

export { registerUser, LoginAction, logout };
