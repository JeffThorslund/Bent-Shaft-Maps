import React from 'react';
import { useSelector } from 'react-redux';
import Navigation from '../Navigation';
import ItemListGroup from './ItemListGroup';
import FormLayouts from './FormLayouts';
import store from '../../../rematch/store';

const Dashboard = () => {
  const props = {
    rivers: useSelector((state) => state.data.rivers),
    indexes: useSelector((state) => state.indexes),
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navigation />
      <div className="d-flex flex-row flex-grow-1">
        <ItemListGroup {...props} indexActions={store.dispatch.indexes} />
        <FormLayouts {...props} submissionActions={store.dispatch.data} />
      </div>
    </div>
  );
};

export default Dashboard;
