//This holds the most current shape of the data structure. This is to be references in schema creation and form creation.

/*
*  elementTypes -> input, textarea
*/

const river = (section) => {
  return {
    name: {
      init: "Enter a River!",
      label: "Enter the name of the river.",
      placeholder: "Beaver River",
      elementType: "input"
    },
    sections: [section && section],
  };
};

const section = (rapid) => {
  return {
    name: {
      init: "",
      label: "Enter the name of the whitewater section.",
      placeholder: "Moshier Section",
      elementType: "input"
    },
    id: {},
    desc: {
      init: "",
      label: "Describe the whitewater section.",
      placeholder: "Its a great section.",
      elementType: "textarea"
    },
    overViewMap: {},
    access: {},
    location: {},
    class: {},
    putIn: {},
    takeOut: {},
    level: {
      defaultLevel: Number,
      levelUnits: String,
      levelRange: [Number],
    },
    rapids: [rapid && rapid],
  };
};

const rapid = () => {
  return {
    name: {
      init: "Enter a Rapid Name",
      label: "Enter the name of the whitewater section.",
      placeholder: "Moshier Section",
      elementType: "input"
    },
    id: String,
    desc: [
      {
        text: String,
        range: [Number],
      },
    ],
    riverMap: String,
    hydraulics: [],
    eddys: Array,
    lines: Array,
    symbols: Array,
    arrows: Array,
    mapLabel: [[Number], [Number]],
  };
};


exports.river = river();
exports.section = section();
exports.rapid = rapid();

exports.config = river(section(rapid()));



