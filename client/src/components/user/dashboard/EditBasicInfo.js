import React from "react";
import ItemList from "./ItemList";
// import FormList from "./FormList"
import { useSelector } from "react-redux";

const EditBasicInfo = ({ list = [], indexType }) => {

  let { rivers, editingReducer } = useSelector((state) => {
    return {
      rivers: state.startupReducer.rivers,
      editingReducer: state.editingReducer,
    };
  });


  return (
    <>
      <ItemList list={list} indexType={indexType} />
      {/* <FormList list={list}/> */}
    </>
  );
};

export default EditBasicInfo;
