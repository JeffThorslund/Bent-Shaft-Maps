export const initializeInterfaceIndex = () => {
  return { type: "INITIALIZE_INTERFACE_INDEX"};
}

export const selectRiverToEdit = (index) => {
  return { type: "SELECT_RIVER_TO_EDIT", payload: index };
};
