import produce from "immer";

export default (state = {}, action) => {
  switch (action.type) {
    case "FETCH_RIVERS":
      return {
        ...state,
        rivers: action.payload,
      };

    case "SUBMIT_RIVER_FORM_VALUES":
      return produce(state, ({ rivers }) => {
        const { values, riverIndex } = action.payload;
        rivers[riverIndex] = {
          ...rivers[riverIndex],
          ...values.river.values,
        };
      });

    case "SUBMIT_SECTION_FORM_VALUES":
      return produce(state, ({ rivers }) => {
        const { values, riverIndex, sectionIndex } = action.payload;
        rivers[riverIndex].sections[sectionIndex] = {
          ...rivers[riverIndex].sections[sectionIndex],
          ...values.section.values,
        };
      });

    default:
      return state;
  }
};
