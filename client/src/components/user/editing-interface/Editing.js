import React, { Component } from "react";
import ReactDOM, { render } from "react-dom";

export default class Container extends Component {
  state = {
    w: 1600,
    h: 800,
    ctrl: false,
    points: [
      { x: 100, y: 300 },
      {
        x: 500,
        y: 300,
        c: [
          { x: 450, y: 550 },
          { x: 450, y: 50 },
        ],
      },
      {
        x: 600,
        y: 300,
        c: [
          { x: 550, y: 50 },
          { x: 550, y: 550 },
        ],
      },
    ],
    activePoint: 2,
    draggedPoint: false,
    draggedQuadratic: false,
    draggedCubic: false,
    closePath: true,
  };

  componentWillMount() {
    document.addEventListener("keydown", this.handleKeyDown, false);
    document.addEventListener("keyup", this.handleKeyUp, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown");
    document.removeEventListener("keyup");
  }

  //Check if number is positive
  positiveNumber(n) {
    n = parseInt(n);
    if (isNaN(n) || n < 0) n = 0;
    return n;
  }

  setWidth = (e) => {
    let v = this.positiveNumber(e.target.value),
      min = 1;
    if (v < min) v = min;

    this.setState({ w: v });
  };

  setHeight = (e) => {
    let v = this.positiveNumber(e.target.value),
      min = 1;
    if (v < min) v = min;

    this.setState({ h: v });
  };

  setClosePath = (e) => {
    this.setState({ closePath: e.target.checked });
  };

  getMouseCoords = (e) => {
    const rect = ReactDOM.findDOMNode(this.refs.svg).getBoundingClientRect();
    let x = Math.round(e.pageX - rect.left);
    let y = Math.round(e.pageY - rect.top);

    return { x, y };
  };

  setPointType = (e) => {
    const points = this.state.points;
    const active = this.state.activePoint;

    // not the first point
    if (active !== 0) {
      let v = e.target.value;

      switch (v) {
        case "l":
          points[active] = {
            x: points[active].x,
            y: points[active].y,
          };
          break;
        case "c":
          points[active] = {
            x: points[active].x,
            y: points[active].y,
            c: [
              {
                x: (points[active].x + points[active - 1].x - 50) / 2,
                y: (points[active].y + points[active - 1].y) / 2,
              },
              {
                x: (points[active].x + points[active - 1].x + 50) / 2,
                y: (points[active].y + points[active - 1].y) / 2,
              },
            ],
          };
          break;
      }

      this.setState({ points });
    }
  };

  setPointPosition = (coord, e) => {
    let coords = this.state.points[this.state.activePoint];
    let v = this.positiveNumber(e.target.value);

    if (coord === "x" && v > this.state.w) v = this.state.w;
    if (coord === "y" && v > this.state.h) v = this.state.h;

    coords[coord] = v;

    this.setPointCoords(coords);
  };

  setCubicPosition = (coord, anchor, e) => {
    let coords = this.state.points[this.state.activePoint].c[anchor];
    let v = this.positiveNumber(e.target.value);

    if (coord === "x" && v > this.state.w) v = this.state.w;
    if (coord === "y" && v > this.state.h) v = this.state.h;

    coords[coord] = v;

    this.setCubicCoords(coords, anchor);
  };

  setPointCoords = (coords) => {
    const points = this.state.points;
    const active = this.state.activePoint;

    points[active].x = coords.x;
    points[active].y = coords.y;

    this.setState({ points });
  };

  setCubicCoords = (coords, anchor) => {
    const points = this.state.points;
    const active = this.state.activePoint;

    points[active].c[anchor].x = coords.x;
    points[active].c[anchor].y = coords.y;

    this.setState({ points });
  };

  setDraggedPoint = (index) => {
    if (!this.state.ctrl) {
      this.setState({
        activePoint: index,
        draggedPoint: true,
      });
    }
  };

  setDraggedCubic = (index, anchor) => {
    if (!this.state.ctrl) {
      this.setState({
        activePoint: index,
        draggedCubic: anchor,
      });
    }
  };

  cancelDragging = (e) => {
    this.setState({
      draggedPoint: false,
      draggedQuadratic: false,
      draggedCubic: false,
    });
  };

  addPoint = (e) => {
    if (this.state.ctrl) {
      let coords = this.getMouseCoords(e);
      let points = this.state.points;

      points.push(coords);

      this.setState({
        points,
        activePoint: points.length - 1,
      });
    }
  };

  removeActivePoint = (e) => {
    let points = this.state.points;
    let active = this.state.activePoint;

    if (points.length > 1 && active !== 0) {
      points.splice(active, 1);

      this.setState({
        points,
        activePoint: points.length - 1,
      });
    }
  };

  handleMouseMove = (e) => {
    if (!this.state.ctrl) {
      if (this.state.draggedPoint) {
        this.setPointCoords(this.getMouseCoords(e));
      } else if (this.state.draggedCubic !== false) {
        this.setCubicCoords(this.getMouseCoords(e), this.state.draggedCubic);
      }
    }
  };

  handleKeyDown = (e) => {
    if (e.ctrlKey) this.setState({ ctrl: true });
  };

  handleKeyUp = (e) => {
    if (!e.ctrlKey) this.setState({ ctrl: false });
  };

  generatePath() {
    let { points, closePath } = this.state;
    let d = "";

    points.forEach((p, i) => {
      if (i === 0) {
        // first point
        d += "M ";
      } else if (p.c) {
        // cubic
        d += `C ${p.c[0].x} ${p.c[0].y} ${p.c[1].x} ${p.c[1].y} `;
      } else {
        d += "L ";
      }

      d += `${p.x} ${p.y} `;
    });

    if (closePath) d += "Z";

    return d;
  }

  reset = (e) => {
    let w = this.state.w,
      h = this.state.h;

    this.setState({
      points: [{ x: w / 2, y: h / 2 }],
      activePoint: 0,
    });
  };

  render() {
    return (
      <div className="ad-Container" onMouseUp={this.cancelDragging}>
        <div className="ad-Container-main">
          <div className="ad-Container-svg">
            <SVG
              ref="svg"
              path={this.generatePath()}
              {...this.state}
              addPoint={this.addPoint}
              setDraggedPoint={this.setDraggedPoint}
              setDraggedQuadratic={this.setDraggedQuadratic}
              setDraggedCubic={this.setDraggedCubic}
              handleMouseMove={this.handleMouseMove}
            />
          </div>
        </div>
      </div>
    );
  }
}

/**
 * SVG rendering
 */

class SVG extends Component {
  render() {
    const {
      path,
      w,
      h,
      points,
      activePoint,
      addPoint,
      handleMouseMove,
      setDraggedPoint,
      setDraggedQuadratic,
      setDraggedCubic,
    } = this.props;

    let circles = points.map((p, i, a) => {
      let anchors = [];

      if (p.c) {
        anchors.push(
          <Cubic
            index={i}
            p1x={a[i - 1].x}
            p1y={a[i - 1].y}
            p2x={p.x}
            p2y={p.y}
            x1={p.c[0].x}
            y1={p.c[0].y}
            x2={p.c[1].x}
            y2={p.c[1].y}
            setDraggedCubic={setDraggedCubic}
          />
        );
      }

      return (
        <g
          className={
            "ad-PointGroup" +
            (i === 0 ? "  ad-PointGroup--first" : "") +
            (activePoint === i ? "  is-active" : "")
          }
        >
          <Point index={i} x={p.x} y={p.y} setDraggedPoint={setDraggedPoint} />
          {anchors}
        </g>
      );
    });

    return (
      <svg
        className="ad-SVG"
        width={w}
        height={h}
        onClick={(e) => addPoint(e)}
        onMouseMove={(e) => handleMouseMove(e)}
      >
        <path className="ad-Path" d={path} />
        <g className="ad-Points">{circles}</g>
      </svg>
    );
  }
}

function Cubic(props) {
  return (
    <g className="ad-Anchor">
      <line
        className="ad-Anchor-line"
        x1={props.p1x}
        y1={props.p1y}
        x2={props.x1}
        y2={props.y1}
      />
      <line
        className="ad-Anchor-line"
        x1={props.p2x}
        y1={props.p2y}
        x2={props.x2}
        y2={props.y2}
      />
      <circle
        className="ad-Anchor-point"
        onMouseDown={(e) => props.setDraggedCubic(props.index, 0)}
        cx={props.x1}
        cy={props.y1}
        r={6}
      />
      <circle
        className="ad-Anchor-point"
        onMouseDown={(e) => props.setDraggedCubic(props.index, 1)}
        cx={props.x2}
        cy={props.y2}
        r={6}
      />
    </g>
  );
}

function Point(props) {
  return (
    <circle
      className="ad-Point"
      onMouseDown={(e) => props.setDraggedPoint(props.index)}
      cx={props.x}
      cy={props.y}
      r={8}
    />
  );
}

//render(<Container />, document.querySelector("#app"));
