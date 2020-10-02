//This holds the most current shape of the data structure. This is to be references in schema creation and form creation.

const river = (section) => {
  return {
    name: {
      init: "Change My Name!",
      label: "Enter the name of the river.",
      placeholder: "Beaver River",
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
    },
    id: {},
    desc: {
      init: "",
      label: "Describe the whitewater section.",
      placeholder: "Its a great section.",
    },
    overViewMap: {},
    access: {},
    location: {},
    class: {},
    putIn: {},
    takeOut: {},
    sponsors: [
      {
        logo: {},
        link: {},
      },
    ],
    contributors: [],
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
    name: { type: String, renderField: true },
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



