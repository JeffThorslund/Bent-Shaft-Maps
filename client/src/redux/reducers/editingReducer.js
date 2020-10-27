export default (state = {}, action) => {
  switch (action.type) {
    case "INITIALIZE_INTERFACE_INDEX":
      return {
        ...state,
        riverIndex: null,
        sectionIndex: null,
        rapidIndex: null,
        featureType: null,
        featureIndex: null,
      };

    case "UPDATE_RIVER_INDEX":
      return {
        ...state,
        riverIndex: action.payload,
        sectionIndex: null,
        rapidIndex: null,
        featureType: null,
        featureIndex: null,
      };

      case "UPDATE_SECTION_INDEX":
      return {
        ...state,
        sectionIndex: action.payload,
        rapidIndex: null,
        featureType: null,
        featureIndex: null,
      };


      case "UPDATE_RAPID_INDEX":
      return {
        ...state,
        rapidIndex: action.payload,
        featureType: null,
        featureIndex: null,
      };

      case "UPDATE_FEATURE_TYPE_AND_INDEX":
      return {
        ...state,
        featureType: action.payload.featureType,
        featureIndex: action.payload.index,
      };


    default:
      return state;
  }
};
