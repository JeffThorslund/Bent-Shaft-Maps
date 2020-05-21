const ValidateMe = (elem) => {
  const rules = {
    name: ["alpha"],
    desc: [],
    info: [],
    location: [],
    putIn: [],
    takeOut: [],
    top: [],
    bottom: [],
    left: [],
    right: [],
    width: [],
    y: ["alpha"],
    x: [],
    height: [],
    width: [],
    rotation: [],
    range: [],
    vector: [],
    titleTop: [],
    titleLeft: [],
    pointerCoordinates: [],
  };

  let output;

  for (let item in rules) {
    if (item == elem || rules[item].length>0) {
      output = rules[item].join("|");
      return `${output}|required`;
    }
  }

  return "required";
};

export default ValidateMe;
