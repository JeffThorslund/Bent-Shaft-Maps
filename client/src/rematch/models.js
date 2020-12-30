import axios from "axios";

//Data that is loaded into the app

export const data = {
  state: { rivers: null },

  reducers: {
    fetchRivers: (state, payload) => {
      state.rivers = payload;
      return state;
    },

    submitRiverFormValues: (state, payload) => {
      const { values, riverIndex } = payload;
      state.rivers[riverIndex] = {
        ...state.rivers[riverIndex],
        ...values,
      };
      return state;
    },

    submitSectionFormValues: (state, payload) => {
      const { values, riverIndex, sectionIndex } = payload;
      state.rivers[riverIndex].sections[sectionIndex] = {
        ...state.rivers[riverIndex].sections[sectionIndex],
        ...values,
      };
      return state;
    },

    changeNodeCoordinates: (state, payload) => {
      const { isEndpointNode, index, x, y } = payload;

      const line =
        state.rivers[0].sections[0].rapids[0].lines[0].vector[index].args;

      line[isEndpointNode ? 2 : 0] = x;
      line[isEndpointNode ? 3 : 1] = y;
      return state;
    },
  },

  effects: {
    async fetchRiversAsync(payload, rootState) {
      const response = await axios.get("/api/getRivers");
      const data = await response.data;
      this.fetchRivers(data);
    },
  },
};

//Control indexes of editing platform.
//Use an effect that snowballs actions so I am not repeating null a million times.

export const indexes = {
  state: {
    riverIndex: null,
    sectionIndex: null,
    rapidIndex: null,
    featureType: null,
    featureIndex: null,
  },
  reducers: {
    updateRiverIndex: (state, payload) => ({
      ...state,
      riverIndex: payload.index,
      sectionIndex: null,
      rapidIndex: null,
      featureType: null,
      featureIndex: null,
    }),

    updateSectionIndex: (state, payload) => ({
      ...state,
      sectionIndex: payload.index,
      rapidIndex: null,
      featureType: null,
      featureIndex: null,
    }),

    updateRapidIndex: (state, payload) => ({
      ...state,
      rapidIndex: payload.index,
      featureType: null,
      featureIndex: null,
    }),

    updateFeatureTypeAndIndex: (state, payload) => ({
      ...state,
      featureIndex: payload.index,
      featureType: payload.type,
    }),
  },
};

//Test environment allows us to style, and work on elements without impacting map.

export const testEnvironment = {
  state: {
    lines: [
      [
        {
          type: "M",
          args: [10, 50],
          fx: 10, 
          fy: 50 
        },
        {
          type: "C",
          args: [25, 80, 75, 75, 50, 50],
          b1x: 25,
          b1y: 80,
          b2x: 75,
          b2y: 75,
          fx: 50,
          fy: 50
        },
        // {
        //   type: "C",
        //   args: [35, 90, 85, 85, 60, 60],
        // },
      ],
    ],
    eddys: [],
    hydraulics: [],
  },
  reducers: {
    changeNodeCoordinates: (state, payload) => {
      const { x, y, pointType, index } = payload;

      const line = state.lines[0][index]

      if (pointType === "M") {
        line.fx = x;
        line.fy = y;
      }

      else if (pointType === "C") {
        line.fx = x;
        line.fy = y;
      }

      else {
        line.b1x = x;
        line.b1y = y;
      }

      return state;
    },
  },
};
