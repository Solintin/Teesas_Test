// Action Creators
import * as type from "./Types";
import toast from "react-hot-toast";

const logout = (navigate) => {
  return (dispatch) => {
    dispatch({
      type: type.LOGOUT_USER,
    });
    navigate("/");
  };
};

const registerUser = (payload, navigate, setLoading) => {
  return (dispatch, getState) => {
    setLoading(true);
    setTimeout(() => {
      const { users } = getState();
      let allUsersCopy = [];

      allUsersCopy = users.allUsers;
      const newUser = payload;
      const isUserExist = allUsersCopy.find(
        (user) => user.email === newUser.email
      );
      if (!isUserExist) {
        allUsersCopy.push(newUser);
        dispatch({ type: type.REGISTER_NEW_USER, payload: allUsersCopy });

        dispatch({ type: type.FETCH_USER_SUCCESS, payload: payload });
        navigate("/dashboard/home");
        toast.success("Registration successful");
        setLoading(false);
      } else {
        setLoading(false);

        toast.error("User already exist");
      }
    }, 1000);
  };
};

const LoginAction = (loginParams, navigate, setLoading) => {
  setLoading(true);
  return async (dispatch, getState) => {
    const { allUsers } = getState().users;
    setTimeout(() => {
      const User = allUsers.find((user) => user.email === loginParams.email);
      if (User) {
        const isPasswordMatch = User.password === loginParams.password;
        if (isPasswordMatch) {
          dispatch({ type: type.FETCH_USER_SUCCESS, payload: User });
          toast.success("Login successful");
          navigate("/dashboard/home");
          setLoading(false);
        } else {
          setLoading(false);

          toast.error("Email or password incorrect");
        }
      } else {
        setLoading(false);

        toast.error("User not found");
      }
    }, 1000);
  };
};

const addCategory = (payload, closeModal) => {
  return (dispatch, getState) => {
    const { category } = getState().inventories;
    const cleanedCategory = category.filter(Boolean);
    const isItemExist = cleanedCategory.find(
      (item) =>
        item.user === payload.user &&
        item.name.toLowerCase() === payload.name.toLowerCase()
    );
    if (isItemExist === undefined) {
      const updatedCategories = [...cleanedCategory, payload];
      dispatch({ type: type.ADD_CATEGORY, payload: updatedCategories });
      toast.success("Category added successfully");
      closeModal();
    } else {
      toast.error("You have already added this category");
    }
  };
};
const removeCategory = (catId) => {
  return (dispatch, getState) => {
    const { category } = getState().inventories;
    const cleanedCategory = category.filter(Boolean);

    const updatedCategory = cleanedCategory.filter((item) => item.id !== catId);
    dispatch({ type: type.ADD_CATEGORY, payload: updatedCategory });
    toast.success("Category deleted successfully");
  };
};
const editCategory = (catId, payload, handleModal) => {
  return (dispatch, getState) => {
    const { category } = getState().inventories;
    const cleanedCategory = category.filter(Boolean);

    const updatedCategory = cleanedCategory.filter((item) => item.id !== catId);
    dispatch({
      type: type.ADD_CATEGORY,
      payload: [...updatedCategory, payload],
    });
    toast.success("Category updated successfully");
    handleModal();
  };
};

const addItem = (payload, closeModal) => {
  return (dispatch, getState) => {
    const { categoryItems } = getState().inventories;
    const cleanedCategoryItems = categoryItems.filter(Boolean); //filter away all null or undefined items value
    const isItemExist = cleanedCategoryItems.find(
      (item) =>
        item.user === payload.user &&
        item.name.toLowerCase() === payload.name.toLowerCase()
    );
    if (isItemExist === undefined) {
      const updatedCategories = [...cleanedCategoryItems, payload];
      dispatch({ type: type.ADD_CATEGORY_ITEM, payload: updatedCategories });
      toast.success("item added successfully");
      closeModal();
    } else {
      toast.error("You have already added this category");
    }
  };
};

const removeItem = (itemId) => {
  return (dispatch, getState) => {
    const { categoryItems } = getState().inventories;
    const cleanedCategoryItems = categoryItems.filter(Boolean);

    const updatedCategoryItems = cleanedCategoryItems.filter(
      (item) => item.id !== itemId
    );
    dispatch({ type: type.ADD_CATEGORY_ITEM, payload: updatedCategoryItems });
    toast.success("item deleted successfully");
  };
};

const editItem = (itemId, payload, handleModal) => {
  return (dispatch, getState) => {
    const { categoryItems } = getState().inventories;
    const cleanedCategoryItems = categoryItems.filter(Boolean);

    const updatedCategoryItems = cleanedCategoryItems.filter(
      (item) => item.id !== itemId
    );
    dispatch({
      type: type.ADD_CATEGORY_ITEM,
      payload: [...updatedCategoryItems, payload],
    });
    toast.success("item updated successfully");
    handleModal();
  };
};

export {
  registerUser,
  LoginAction,
  logout,
  addCategory,
  removeCategory,
  editCategory,
  addItem,
  removeItem,
  editItem,
};
