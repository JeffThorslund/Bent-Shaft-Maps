import React from "react";
import { useDispatch } from "react-redux";

const ItemList = ({
  list,
  title,
  action,
  type = null,
  selectedIndex,
  selectedFeatureType = null,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="item-list p-1">
      <h4>{title}</h4>
      {list.map((item, i) => (
        <div
          key={i}
          onClick={() => dispatch(action(i, type))}
          className={`${
            i === selectedIndex && type === selectedFeatureType
              ? "font-weight-bold"
              : "font-weight-normal"
          } item`}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default ItemList;
