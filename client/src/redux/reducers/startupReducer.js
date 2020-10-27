export default (state = {}, action) => {
  switch (action.type) {
    case "FETCH_RIVERS":
      return {
        ...state,
        rivers: action.payload,
      };

    case "SUBMIT_FORM_VALUES":
      return {
        ...state,
        rivers: state.rivers.map((item, index) => {
          if (index !== 0) {
            return item;
          }

          return {
            ...item,
            name: "DOG",
          };
        }),
      };

    default:
      return state;
  }
};
