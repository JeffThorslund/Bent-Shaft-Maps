//This holds the most current shape of the data structure. This is to be references in schema creation and form creation.

const config = {
  name: { type: String, renderField: true },
  sections: {
    type: [
      {
        name: { type: String, renderField: true },
        id: { type: String, renderField: false },
        desc: { type: String, renderField: true },
        overViewMap: { type: String, renderField: false },
        access: { type: String, renderField: true },
        location: { type: String, renderField: true },
        class: { type: String, renderField: true },
        putIn: { type: String, renderField: true },
        takeOut: { type: String, renderField: true },
        sponsors: [
          {
            logo: String,
            link: String,
          },
        ],
        contributors: [String],
        level: {
          defaultLevel: Number,
          levelUnits: String,
          levelRange: [Number],
        },
        rapids: [
          {
            name: String,
            id: String,
            desc: [
              {
                text: String,
                range: [Number],
              },
            ],
            riverMap: String,
            hydraulics: [
              {
                name: String,
                desc: String,
                y: Number,
                x: Number,
                height: Number,
                width: Number,
                rotation: Number,
                range: [Number],
                id: String,
              },
            ],
            eddys: Array,
            lines: Array,
            symbols: Array,
            arrows: Array,
            mapLabel: [[Number], [Number]],
          },
        ],
      },
    ],
    renderField: false,
  },
};

exports.config = config;
