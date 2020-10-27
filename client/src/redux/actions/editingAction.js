export const initializeInterfaceIndex = () => {
  return { type: "INITIALIZE_INTERFACE_INDEX" };
};

export const updateRiverIndex = (index) => {
  return {
    type: "UPDATE_RIVER_INDEX",
    payload: index,
  };
};

export const updateSectionIndex = (index) => {
  return {
    type: "UPDATE_SECTION_INDEX",
    payload: index,
  };
};

export const updateRapidIndex = (index) => {
  return {
    type: "UPDATE_RAPID_INDEX",
    payload: index,
  };
};

export const updateFeatureTypeAndIndex = ( index, featureType) => {
  return {
    type: "UPDATE_FEATURE_TYPE_AND_INDEX",
    payload: { featureType, index },
  };
};



