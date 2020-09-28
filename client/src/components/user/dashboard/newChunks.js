export const river = {
  name: "",
  sections: [],
};

export const section = {
  name: "",
  id: "",
  desc: "",
  overViewMap: "",
  access: "",
  location: "",
  class: "",
  putIn: "",
  takeOut: "",
  level: {
    defaultLevel: null,
    levelUnits: "",
    levelRange: [null, null],
  },
  rapids: [],
};

export const rapid = {
  name: "",
  id: "",
  desc: [
    {
      text: "",
      range: [null],
    },
  ],
  riverMap: "",
  hydraulics: [],
  eddys: [],
  lines: [],
  symbols: [],
  arrows: [],
  mapLabel: [[null], [null]],
};
