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

export const editing = {
  state: { rivers: null },

  reducers: {
    fetchRivers: (state, payload) => {
      state.rivers = payload;
      return state;
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
      {
        name: "Thread The Needle",
        desc:
          "A commonly taken line through McCoys. Start center-right coming into the rapid with your boat pointed slightly left. When approaching the Sattlers, paddle towards river left, clip Sattlers and paddle for your life away from Phils",
        vector: [
          { x: 50, y: 30 },
          {
            x: 20,
            y: 20,
            c: [
              { x: 45, y: 55 },
              { x: 45, y: 5 },
            ],
          },
        ],
        x: 260.55,
        y: 460.26,
        range: [-100, 100],
        id: "line_4dk61",
      },
      {
        name: "Thread The Needle",
        desc:
          "A commonly taken line through McCoys. Start center-right coming into the rapid with your boat pointed slightly left. When approaching the Sattlers, paddle towards river left, clip Sattlers and paddle for your life away from Phils",
        vector: [
          { x: 43, y: 68 },
          {
            x: 40,
            y: 40,
            c: [
              { x: 85, y: 75 },
              { x: 98, y: 90 },
            ],
          },
        ],
        x: 260.55,
        y: 460.26,
        range: [-100, 100],
        id: "line_4dk62",
      },
    ],
    eddys: [
      {
        name: "Test Eddy",
        desc: "Two points Eddy",
        vector: [
          { x: 5, y: 75 },
          {
            x: 35,
            y: 75,
            c: [
              { x: 5, y: 95 },
              { x: 35, y: 95 },
            ],
          },
          {
            z: 1,
            c: [
              { x: 35, y: 60 },
              { x: 5, y: 60 },
            ],
          },
        ],
        x: 260.55,
        y: 460.26,
        range: [-100, 100],
        id: "eddy_4dk61",
      },
      {
        name: "Test Eddy",
        desc: "Three points Eddy",
        vector: [
          { x: 60, y: 40 },
          {
            x: 90,
            y: 40,
            c: [
              { x: 60, y: 60 },
              { x: 90, y: 60 },
            ],
          },
          {
            x: 75,
            y: 30,
            c: [
              { x: 95, y: 5 },
              { x: 80, y: 20 },
            ],
          },
          {
            z: 1,
            c: [
              { x: 70, y: 20 },
              { x: 55, y: 5 },
            ],
          },
        ],
        x: 260.55,
        y: 460.26,
        range: [-100, 100],
        id: "eddy_4dk62",
      },
    ],
    hydraulics: [],
    closePath: true,
    activeType: "",
    activeLine: 0,
    activePoint: 0,
    draggedPoint: false,
    draggedCubic: false,
  },
  reducers: {
    setDraggedPoint: (state, payload) => {
      state.activeType = payload.featureType;
      state.activeLine = payload.lineIndex;
      state.activePoint = payload.pointIndex;
      state.draggedPoint = true;
      return state;
    },
    setDraggedCubic: (state, payload) => {
      state.activeType = payload.featureType;
      state.activeLine = payload.lineIndex;
      state.activePoint = payload.pointIndex;
      state.draggedCubic = payload.anchor;
      return state;
    },
    setPointCoords: (state, payload) => {
      const { activePoint, activeLine, activeType } = state;
      const target = activeType === "line" ? state.lines : state.eddys;
      target[activeLine].vector[activePoint].x = payload.coords.x;
      target[activeLine].vector[activePoint].y = payload.coords.y;
      return state;
    },
    setCubicCoords: (state, payload) => {
      const { activePoint, activeLine, activeType } = state;
      const target = activeType === "line" ? state.lines : state.eddys;
      target[activeLine].vector[activePoint].c[payload.anchor].x =
        payload.coords.x;
      target[activeLine].vector[activePoint].c[payload.anchor].y =
        payload.coords.y;
      return state;
    },
    cancelDragging: (state) => {
      state.draggedPoint = false;
      state.draggedCubic = false;
      return state;
    },
    addPoint: (state, payload) => {
      const { coords } = payload;
      const { activeLine, activeType, lines, eddys } = state;

      if (activeType === "line") {
        const lastPointIndex = lines[activeLine].vector.length - 1;
        const lastPointCoords = lines[activeLine].vector[lastPointIndex];

        lines[activeLine].vector.push({
          x: coords.x,
          y: coords.y,
          c: [
            {
              x: (lastPointCoords.x + coords.x) / 2,
              y: (lastPointCoords.y + coords.y) / 2,
            },
            {
              x: (lastPointCoords.x + coords.x) / 2,
              y: (lastPointCoords.y + coords.y) / 2,
            },
          ],
        });
      } else if (activeType === "eddy") {
        eddys[activeLine].vector.splice(-2, 0, {
          x: coords.x,
          y: coords.y,
          c: [
            { x: coords.x - 20, y: coords.y - 20 },
            { x: coords.x + 20, y: coords.y + 20 },
          ],
        });
      }
      return state;
    },
    removePoint: (state, payload) => {
      if (state.lines[payload.lineIndex].vector.length === 1) {
        state.lines.splice(payload.lineIndex, 1);
      } else {
        if (payload.pointIndex === 0) {
          state.lines[payload.lineIndex].vector[1] = {
            x: state.lines[payload.lineIndex].vector[1].x,
            y: state.lines[payload.lineIndex].vector[1].y,
          };
        }
        state.lines[payload.lineIndex].vector.splice(payload.pointIndex, 1);
      }

      return state;
    },
  },
};
