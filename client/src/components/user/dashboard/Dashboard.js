import React, { useEffect } from "react";
import Navigation from "../Navigation";
import { useDispatch, useSelector } from "react-redux";
import { initializeInterfaceIndex } from "../../../redux/actions/editingAction";
import ItemListGroup from "./ItemListGroup";
import FormLayouts from "./FormLayouts";
import DragDrop from "./dragdrop/DragDrop";

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeInterfaceIndex());
  }, []);

  let { rivers, editingReducer } = useSelector((state) => {
    return {
      rivers: state.startupReducer.rivers,
      editingReducer: state.editingReducer,
    };
  });

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navigation />
      <div className="d-flex flex-row flex-grow-1">
        <ItemListGroup rivers={rivers} editingReducer={editingReducer} />
        <FormLayouts rivers={rivers} editingReducer={editingReducer} />
        <DragDrop rivers={rivers}/>
      </div>
    </div>
  );
};

export default Dashboard;
