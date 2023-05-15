export const addNewTodo = (items) => {
  console.log(items);
  return {
    type: "ADD_NEW_TODO",
    payload: items,
  };
};

export const removeTodo = (id) => {
  console.log(id);
  return {
    type: "REMOVE_TODO",
    payload: id,
  };
};

export const updateTodo = (items, id) => {
  return {
    type: "UPDATE_TODO",
    payload: items,
    d: id,
  };
};

export const setComplete = (payload) => {
  console.log(payload);
  return {
    type: "SET_COMPLETE",
    payload,
  };
};
