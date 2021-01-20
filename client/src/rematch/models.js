import axios from 'axios';

// Data that is loaded into the app

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
    async fetchRiversAsync() {
      const response = await axios.get('/api/getRivers');
      const rivers = await response.data;
      this.fetchRivers(rivers);
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
// Control indexes of editing platform.
// Use an effect that snowballs actions so I am not repeating null a million times.

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

// Test environment allows us to style, and work on elements without impacting map.

export const testEnvironment = {
  state: {
    lines: [
      {
        name: 'Thread The Needle',
        desc:
          'A commonly taken line through McCoys. Start center-right coming into the rapid with your boat pointed slightly left. When approaching the Sattlers, paddle towards river left, clip Sattlers and paddle for your life away from Phils',
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
        range: [-100, 100],
        id: 'line_4dk61',
      },
      {
        name: 'Thread The Needle',
        desc:
          'A commonly taken line through McCoys. Start center-right coming into the rapid with your boat pointed slightly left. When approaching the Sattlers, paddle towards river left, clip Sattlers and paddle for your life away from Phils',
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
        range: [-100, 100],
        id: 'line_4dk62',
      },
    ],
    eddys: [
      {
        name: 'Test Eddy',
        desc: 'Two points Eddy',
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
        range: [-100, 100],
        id: 'eddy_4dk61',
      },
      {
        name: 'Test Eddy',
        desc: 'Three points Eddy',
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
        range: [-100, 100],
        id: 'eddy_4dk62',
      },
    ],
    hydraulics: [
      {
        name: 'test-wave',
        vector: [
          {
            x: 30,
            y: 40,
          },
          { x: 50, y: 60 },
        ],
        id: 'an_id_asdijfasldfjawerwe',
      },
    ],
    closePath: true,
    activeType: '',
    activeLine: 0,
    activePoint: 0,
    draggedPoint: false,
    draggedCubic: false,
    draggedFeature: false,
    offset: null,
  },
  reducers: {
    setActiveType: (state, payload) => {
      if (state.draggedFeature) return state;
      state.activeType = payload.featureType;
      state.activeLine = payload.lineIndex;
      return state;
    },
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
    setDraggedFeature: (state, payload) => {
      const { activeType, activeLine, lines, eddys, hydraulics } = state;
      // Mouse Coordinates
      const { x, y } = payload;

      // const target =
      //   activeType === 'line'
      //     ? lines[activeLine].vector
      //     : activeType === 'eddy'
      //     ? eddys[activeLine].vector
      //     : activeType === 'hydraulic'
      //     ? hydraulics[activeLine].vector
      //     : null;

      const target = {
        line: lines[activeLine],
        eddy: eddys[activeLine],
        hydraulic: hydraulics[activeLine],
      }[activeType].vector;

      // Calculates Cubics Offset
      const cubicsOffset = (point) => [
        { x: x - point.c[0].x, y: y - point.c[0].y },
        { x: x - point.c[1].x, y: y - point.c[1].y },
      ];

      // Itterates through an array of points & Checks the point type => Offset data
      state.offset = target.map((point) => {
        if (Object.prototype.hasOwnProperty.call(point, 'z'))
          return { c: cubicsOffset(point) };
        if (Object.prototype.hasOwnProperty.call(point, 'c'))
          return {
            x: x - point.x,
            y: y - point.y,
            c: cubicsOffset(point),
          };
        return {
          x: x - point.x,
          y: y - point.y,
        };
      });
      state.draggedFeature = true;
      return state;
    },
    setPointCoords: (state, payload) => {
      const { activePoint, activeLine, activeType } = state;

      const target = {
        line: state.lines,
        eddy: state.eddys,
        hydraulic: state.hydraulics,
      }[activeType];

      target[activeLine].vector[activePoint].x = payload.coords.x;
      target[activeLine].vector[activePoint].y = payload.coords.y;
      return state;
    },
    setCubicCoords: (state, payload) => {
      const { activePoint, activeLine, activeType } = state;
      const target = activeType === 'line' ? state.lines : state.eddys;
      target[activeLine].vector[activePoint].c[payload.anchor].x =
        payload.coords.x;
      target[activeLine].vector[activePoint].c[payload.anchor].y =
        payload.coords.y;
      return state;
    },
    setHydraulicCoords: (state, payload) => {
      console.log(payload);
    },
    setFeatureCoords: (state, payload) => {
      const {
        activeLine,
        activeType,
        offset,
        lines,
        eddys,
        hydraulics,
      } = state;
      // Mouse Coordinates
      const { x, y } = payload;

      // const target =
      //   activeType === 'line'
      //     ? lines[activeLine].vector
      //     : activeType === 'eddy'
      //     ? eddys[activeLine].vector
      //     : activeType === 'hydraulic'
      //     ? hydraulics[activeLine].vector
      //     : null;

      const target = {
        line: lines[activeLine],
        eddy: eddys[activeLine],
        hydraulic: hydraulics[activeLine],
      }[activeType].vector;
      target.forEach((point, index) => {
        const off = offset[index];
        if (point.c) {
          point.c[0].x = x - off.c[0].x;
          point.c[0].y = y - off.c[0].y;
          point.c[1].x = x - off.c[1].x;
          point.c[1].y = y - off.c[1].y;
        }
        if (!point.z) {
          point.x = x - off.x;
          point.y = y - off.y;
        }
      });
      return state;
    },
    cancelDragging: (state) => {
      state.draggedPoint = false;
      state.draggedCubic = false;
      state.draggedFeature = false;
      state.offset = null;
      return state;
    },
    addPoint: (state, payload) => {
      const { coords } = payload;
      const { activeLine, activeType, lines, eddys } = state;
      // Adds point to LINE
      if (activeType === 'line') {
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
        // Adds point to EDDY
      } else if (activeType === 'eddy') {
        const l = eddys[activeLine].vector.length; // Length of vector array
        const lastPointCubics = eddys[activeLine].vector[l - 2].c;
        eddys[activeLine].vector.splice(-2, 0, {
          x: coords.x,
          y: coords.y,
          c: [
            lastPointCubics[0],
            {
              x: (lastPointCubics[0].x + coords.x) / 2,
              y: (lastPointCubics[0].y + coords.y) / 2,
            },
          ],
        });
        const prevPointCubics = eddys[activeLine].vector[l - 1].c;
        prevPointCubics[0] = {
          x: (prevPointCubics[1].x + coords.x) / 2,
          y: (prevPointCubics[1].y + coords.y) / 2,
        };
      }
      return state;
    },
    removePoint: (state, payload) => {
      const { activeType, lines, eddys } = state;
      const { lineIndex, pointIndex } = payload;
      if (activeType === 'line') {
        const target = lines[lineIndex].vector;
        if (target.length === 1) {
          lines.splice(lineIndex, 1);
        } else {
          if (pointIndex === 0) {
            target[1] = {
              x: target[1].x,
              y: target[1].y,
            };
          }
          lines[lineIndex].vector.splice(pointIndex, 1);
        }
      } else if (activeType === 'eddy') {
        const target = eddys[lineIndex].vector;
        if (target.length > 3) {
          if (pointIndex === 0) {
            const preservedCubic = target[1].c[1];
            target[1].c = null;
            target.splice(0, 1);
            target[target.length - 1].c[1] = preservedCubic;
          } else {
            const preservedCubic = target[pointIndex].c[0];
            target.splice(pointIndex, 1);
            target[pointIndex].c[0] = preservedCubic;
          }
        }
      }
      return state;
    },
  },
};
