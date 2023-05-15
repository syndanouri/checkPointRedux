const initialData = {
  User_data: [],
  isComplete: false,
};
const todoReducers = (state = initialData, action) => {
  console.log("action", action);

  // eslint-disable-next-line default-case
  switch (action.type) {
    case "ADD_NEW_TODO":
      return {
        ...state,
        User_data: [...state.User_data, action.payload],
      };
      break;

    case "REMOVE_TODO":
      const deleteData = state.User_data.filter(
        (element, k) => k !== action.payload
      );
      return {
        ...state,
        User_data: deleteData,
      };
      break;

    case "UPDATE_TODO":
      const updatedata = state.User_data.map((ele, k) =>
        k == action.d ? action.payload : ele
      );

      return {
        ...state,
        User_data: updatedata,
      };
      break;

    default:
      return state;
  }
};

export default todoReducers;
