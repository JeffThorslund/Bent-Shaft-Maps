import React, { useEffect } from "react";
import Navigation from "../Navigation";
import { useDispatch, useSelector } from "react-redux";
import { initializeInterfaceIndex } from "../../../redux/actions/editingAction";
import EditBasicInfo from "./EditBasicInfo";
import ItemListGroup from "./ItemListGroup";

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

  const createInterfaces = (
    rivers,
    { riverIndex, sectionIndex, rapidIndex }
  ) => {
    const arr = [];

    arr.push(<EditBasicInfo list={rivers} indexType="riverIndex" />);

    if (typeof rivers[riverIndex] !== "undefined") {
      arr.push(
        <EditBasicInfo
          list={rivers[riverIndex].sections}
          indexType="sectionIndex"
        />
      );
      if (typeof rivers[riverIndex].sections[sectionIndex] !== "undefined") {
        arr.push(
          <EditBasicInfo
            list={rivers[riverIndex].sections[sectionIndex].rapids}
            indexType="riverIndex"
          />
        );
      }
    }

    return arr[arr.length - 1];
  };

  return (
    <>
      <Navigation />
      <ItemListGroup rivers={rivers} editingReducer={editingReducer} />
    </>
  );
};

export default Dashboard;
