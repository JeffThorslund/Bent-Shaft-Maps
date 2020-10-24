import React, { useEffect } from "react";
import Navigation from "../Navigation";
import { useDispatch, useSelector } from "react-redux";
import {
  selectRiverToEdit,
  initializeInterfaceIndex,
} from "../../../redux/actions/editingAction";

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeInterfaceIndex());
  }, []);

  let { rivers, interfaceIndex } = useSelector((state) => {
    return {
      rivers: state.startupReducer.rivers,
      interfaceIndex: state.editingReducer.index,
    };
  });

  const EditingInterfaces = [<div>Interface 1</div>, <div>Interface 2</div>];

  return (
    <>
      <Navigation />
      {EditingInterfaces[interfaceIndex]}
      <button onClick={() => dispatch(selectRiverToEdit(1))}>TEST</button>
    </>
  );
};

export default Dashboard;
