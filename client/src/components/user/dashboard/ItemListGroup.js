import React from "react";
import ItemList from "./ItemList";

const ItemListGroup = ({
  rivers,
  indexes: { riverIndex, sectionIndex, rapidIndex, featureType, featureIndex },
  indexActions: {
    updateRiverIndex,
    updateSectionIndex,
    updateRapidIndex,
    updateFeatureTypeAndIndex,
  },
}) => {

  const arr = [];

  arr.push({
    list: rivers,
    action: updateRiverIndex,
    title: "River",
    selectedIndex: riverIndex,
  });

  if (typeof rivers[riverIndex] !== "undefined") {
    arr.push({
      list: rivers[riverIndex].sections,
      action: updateSectionIndex,
      title: "Section",
      selectedIndex: sectionIndex,
    });

    if (typeof rivers[riverIndex].sections[sectionIndex] !== "undefined") {
      arr.push({
        list: rivers[riverIndex].sections[sectionIndex].rapids,
        action: updateRapidIndex,
        title: "Rapid",
        selectedIndex: rapidIndex,
      });
      if (
        typeof rivers[riverIndex].sections[sectionIndex].rapids[rapidIndex] !==
        "undefined"
      ) {
        arr.push(
          {
            list:
              rivers[riverIndex].sections[sectionIndex].rapids[rapidIndex]
                .hydraulics,
            action: updateFeatureTypeAndIndex,
            title: "Hydraulic",
            type: "hydraulics",
            selectedIndex: featureIndex,
            selectedFeatureType: featureType,
          },
          {
            list:
              rivers[riverIndex].sections[sectionIndex].rapids[rapidIndex]
                .eddys,
            action: updateFeatureTypeAndIndex,
            title: "Eddy",
            type: "eddys",
            selectedIndex: featureIndex,
            selectedFeatureType: featureType,
          },
          {
            list:
              rivers[riverIndex].sections[sectionIndex].rapids[rapidIndex]
                .lines,
            action: updateFeatureTypeAndIndex,
            title: "Line",
            type: "lines",
            selectedIndex: featureIndex,
            selectedFeatureType: featureType,
          }
        );
      }
    }
  }

  const itemLists = arr.map((itemList, i) => (
    <ItemList
      list={itemList.list}
      action={itemList.action}
      title={itemList.title}
      type={itemList.type}
      selectedIndex={itemList.selectedIndex}
      selectedFeatureType={itemList.selectedFeatureType}
      key={i}
    />
  ));

  const featureLists = itemLists.splice(3, 3);

  return (
    <div className="d-flex flex-row">
      {itemLists}
      <div className="d-flex flex-column">{featureLists}</div>
    </div>
  );
};

export default ItemListGroup;
