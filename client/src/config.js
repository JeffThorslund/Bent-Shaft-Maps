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
      elementType: "input",
    },
    id: {},
    sections: [section && section],
  };
};

const section = (rapid) => {
  return {
    name: {
      init: "",
      label: "Enter the name of the whitewater section.",
      placeholder: "Moshier Section",
      elementType: "input",
    },
    id: {},
    desc: {
      init: "",
      label: "Describe the whitewater section.",
      placeholder: "Its a great section.",
      elementType: "textarea",
    },
    overViewMap: {},
    access: {
      init: "",
      label: "Describe access to this section of whitewater.",
      placeholder: "Its got great access.",
      elementType: "textarea",
    },
    putIn: {
      init: "",
      label: "Describe access to this section of whitewater.",
      placeholder: "Its got great access.",
      elementType: "input",
    },
    takeOut: {
      init: "",
      label: "Describe access to this section of whitewater.",
      placeholder: "Its got great access.",
      elementType: "input",
    },
    level: {
      elementType: "SetLevel",
      data: [
        {
          controlId: "defaultLevel",
          label: "Default Level",
          placeholder: 0,
        },
        {
          controlId: "levelUnits",
          label: "Level Units",
          placeholder: "ft",
        },
        {
          controlId: "levelRange",
          label: "Level Range",
          placeholder: 0,
        },
      ],
    },
    // level: {
    //   defaultLevel: Number,
    //   levelUnits: String,
    //   levelRange: [Number],
    // },
    rapids: [rapid && rapid],
  };
};

const rapid = () => {
  return {
    name: {
      init: "Enter a Rapid Name",
      label: "Enter the name of the whitewater section.",
      placeholder: "Moshier Section",
      elementType: "input",
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
