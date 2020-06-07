module.exports = function (
  rivers,
  riverIndex,
  rapidIndex,
  featureType,
  featureIndex
) {
  //if feature, delete it
  if (typeof featureIndex === "number" && typeof featureType === "string") {
    rivers[riverIndex].rapids[rapidIndex][featureType].splice(
      [featureIndex],
      1
    );
    return rivers[riverIndex];
    
  } else if (typeof rapidIndex == "number") {
    //delete arrows that point to deleted rapid.
    let riverId = rivers[riverIndex].rapids[rapidIndex].id;
    for (let i = 0; i < rivers[riverIndex].rapids.length; i++) {
      for (let j = 0; j < rivers[riverIndex].rapids[i].arrows.length; j++) {
        if (riverId === rivers[riverIndex].rapids[i].arrows[j].linkId) {
          rivers[riverIndex].rapids[i].arrows.splice(j, 1);
        }
      }
    }
    //delete rapid
    rivers[riverIndex].rapids.splice([rapidIndex], 1);
    return rivers[riverIndex];

  } else {
    return "BAD";
  }
};
