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
        { x: 50, y: 30 },
        {
          x: 20,
          y: 20,
          c: [
            { x: 45, y: 55 },
            { x: 45, y: 5 },
          ],
        },
        {
          x: 30,
          y: 30,
          c: [
            { x: 45, y: 55 },
            { x: 45, y: 5 },
          ],
        },
      ],
    ],
    eddys: [],
    hydraulics: [],
    closePath: true,
    activePoint: 0,
    draggedPoint: false,
    draggedCubic: false,
  },
  reducers: {
    setClosePath: (state, payload) => {
      return (state.closePath = payload.e.target.checked);
    },
    setDraggedPoint: (state, payload) => {
      state.activePoint = payload.index;
      state.draggedPoint = true;
      return state;
    },
    setDraggedCubic: (state, payload) => {
      state.activePoint = payload.index;
      state.draggedCubic = payload.anchor;
      return state;
    },
    setPointCoords: (state, payload) => {
      const points = state.lines[0];
      const active = state.activePoint;

      points[active].x = payload.coords.x;
      points[active].y = payload.coords.y;

      return state;
    },
    setCubicCoords: (state, payload) => {
      const points = state.lines[0];
      const active = state.activePoint;

      points[active].c[payload.anchor].x = payload.coords.x;
      points[active].c[payload.anchor].y = payload.coords.y;

      return state
    },
    cancelDragging: (state, payload) => {
      state.draggedPoint = false;
      state.draggedCubic = false;
      return state;
    },
  },
};
