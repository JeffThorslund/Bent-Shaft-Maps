import React from "react";

const ItemList = ({
  list,
  title,
  action,
  type = null,
  selectedIndex,
  selectedFeatureType = null,
}) => (
  <div className="item-list p-1">
    <h4>{title}</h4>
    {list.map((item, index) => (
      <div
        key={index}
        onClick={() => action({ index, type })}
        className={`${
          index === selectedIndex && type === selectedFeatureType
            ? "font-weight-bold"
            : "font-weight-normal"
        } item`}
      >
        {item.name}
      </div>
    ))}
  </div>
);

export default ItemList;
