import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'
import startupReducer from "./startupReducer";
import editingReducer from "./editingReducer";

export default combineReducers({
  startupReducer, editingReducer, form: formReducer
});
