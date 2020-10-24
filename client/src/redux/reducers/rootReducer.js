import { combineReducers } from "redux";
import startupReducer from "./startupReducer";
import editingReducer from "./editingReducer";

export default combineReducers({
  startupReducer, editingReducer
});
