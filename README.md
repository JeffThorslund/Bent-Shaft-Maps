# Wet Exit River Guides

Convert your favorite whitewater river into an interactive guide.

- [Wet Exit River Guides](#wet-exit-river-guides)
  - [Getting Started](#getting-started)
    - [Tech Stack](#tech-stack)
    - [Built With](#built-with)
    - [Setup](#setup)
  - [The Philisophy of Building a River Map](#the-philisophy-of-building-a-river-map)
    - [Core Concepts](#core-concepts)
    - [The role of `const data` and `const global`](#the-role-of--const-data--and--const-global-)
      - [`const data`](#-const-data-)
      - [`const global`](#-const-global-)
  - [Steps to Building Your Map](#steps-to-building-your-map)
    - [1. Basic Rapid](#1-basic-rapid)
    - [2. Overview Map](#2-overview-map)
      - [Overview Map Design](#overview-map-design)
      - [Overview Map Implementation](#overview-map-implementation)
    - [3. Adding A Rapid Map](#3-adding-a-rapid-map)
      - [Rapid Design](#rapid-design)
      - [Rapid Implementation](#rapid-implementation)

## Getting Started

### Tech Stack

This project is a front-end React App, hosted using Jamstack on Netlify. Figma is an essential application for the the design component of the project, but only a limited design skillset is necessary.

### Built With

- [React](https://reactjs.org/) - The web framework used
- [Figma](https://www.figma.com/) - The design tool
- [Netlify](https://www.netlify.com/) - Back-end using Jamstack

### Setup

Use the following commands in your terminal to run a live server of the project.

    git clone https://github.com/JeffThorslund/Ottawa-River-Paddling-Guide.git
    cd [local repository]
    npm install
    npm start

## The Philisophy of Building a River Map

### Core Concepts

You will

The entire map is rendered by a single array of objects that contains the entirety of the river data.

Editing in the code editor while running a live server is the method in which we will be monitoring the changes that we make. Using a vector graphics editor can speed up the process.

### The role of `const data` and `const global`

Located at `src\river-data\[your-river]\[YourRiverData].js`

#### `const data`

An array of objects, each object representing one distinct rapid section.

    const data = [ // An array of rapids
        {
            // All information about a single rapid
        },
    ]

#### `const global`

An object that holds information relevant to the entire river.

    export const global = { // A single object
        // All information about the river
    }

## Steps to Building Your Map

### 1. Create a River Instance

The first step is to initialize a river.

This is done by adding a route in src/components/interface

### 2. Basic Rapid

A rapid is an element of the `data` array. Let's manipulate the template element to create our first rapid.

Let _x_ represent a rapid being rendered in the array.

---

#### `data[x].name` (_string_)

The most common name of the rapid.

    const data = [
        {
            name: "Fish Hook Rapid", //ex. "Dragon's Tooth", "Zoar Gap" etc.
        },
    ]

---

#### `data[x].desc` (_string_)

A short description of the rapid or just the class.

    const data = [
        {
            name: "Fish Hook Rapid",
            desc: "Class III", //ex. "Class 2", "Class IV+", "Class Five"
        },
    ]

**Expected Result**:

### 3. Overview Map

#### Overview Map Design

_Golden Rule_: Always design on a 1600x900 frame in Figma.

In the _Overview_ frame, place a screenshot of Bing satellite image so that the entire river fits in the frame and set the layer to 60% opacity. This will be your tracing outline.

Use the pen tool to draw a trace of the river, ending up with a long thin outline of the river. Set fill to blue.

Set the satellite image to hidden.

Draw a 1600x900 rectangle behind the river trace. Set fill to green.

#### Overview Map Implementation

Select the entire frame in Figma in the _Layers_ panel on the right. Right click on _Overview_. Select _Copy As SVG_.

Go to `src/river-data/[your-river]/basemaps/OverviewMap.js`

Delete the existing SVG element.

Paste your copied SVG element.

Save.

Import this map into the main data file by adding the following to the imports.

    import OverviewMap from "./basemaps/OverviewMaps.js";

Set `global.overviewMap` property to your newly added map.

    global.overviewMap = OverviewMap

**Expected Result**: Clicking the "Show Map" toggle on the live server should create a pop-up with your map.

### 4. Adding A Rapid Map

We will add the first rapid of the river.

#### Rapid Design

Create a 1600x900 Figma frame and paste a screenshot of a satellite image of the rapid of choice. Remeber to leave room at the top for the title, and space for the Display.js box.

Use the pen tool to draw a trace of the river, ending up with an outline of the river. Set fill to blue.

Set the satellite image to hidden.

Draw a 1600x900 rectangle behind the river trace. Set fill to green.

#### Rapid Implementation

Select the entire frame in Figma in the Layers panel on the right. Right click on the the frame layer that you built your rapid in. Select _Copy As SVG_.

Create a copy of `src/river-data/[your-river]/basemaps/TemplateMap.js` and name the new file.

Paste your copied `<svg>` element between the `<g> </g>` tags.

Delete the `<svg>` wrapper element.

Your file should have a similar structure to the following.

    import React from "react";

    const RapidName = (
    <g>
        <g>
            <rect /> //rectangle elements
            <path />
            <mask />
        </g>
        <defs>
            <linearGradient>
            <stop/>
        </defs>
    </g>
    );

    export default RapidName;

Import this map into the main data file by adding the following to the imports.

    import RapidName from "./basemaps/RapidName.js";

Set `data.riverMap.path` property to your newly added map.

    data.riverMap.path = RapidName

**Expected Result**: The map of your first rapid should reflect your new map.

## Elements

#### `Data[x].displayPosition` (_object_)

This object indicates where the display panel (`Display.js`) it located. As with most positionable elements, the units for vertical distances are viewport height (`vh`) and horizontal distances are viewport width(`vw`). The object has the following keys: `top, left, width`. The `height` auto adjusts based on its contents.

    const Data = [
        {
            ...
            desc: "Class III",
            displayPosition: {
                top: "70vh", // the position from the top of the viewport
                left: "22vw", // the position from the left side of the viewport
                width: "35vw", //the width of Display.js
            },
        },
    ]

#### `Data[x].riverMap` (_object_)

This object holds the rapid base map and information on how it is viewed and scaled.

##### ViewBox (_string_)

As all features are rendered into a single SVG element, we have control over the viewBox attribute. This can be used to make small adjustments to the view of the rapid. All elements will scale and tranpose proportionally to viewBox changes. This is a [resource for learning viewBox](https://wattenberger.com/guide/scaling-svg).

##### path (_JSX Element_)

The base map is vector map drawn in at a px ratio of 1600:900. The default `<svg>` element is removed and everything is wrapped into a `<g>` element, and saved as a JSX element. It will look similar to this.

    import React from "react";

    const AngelsKissRapid = (
        <g>
            //contents of your basemap
        <g/>
    )

    export default AngelsKissRapid

This, and all other basemaps is saved in `./components/VectorAssets/Basemaps/FishHookRapid`. Import the JSX element into `Data.js`.

    import React from 'react'
    import FishHookRapid from "./components/VectorAssets/Basemaps/FishHookRapid"

    const Data = [
        {
            ...
            displayPosition: {...},
            riverMap: {
                viewBox: "0 0 1600 900", //default value
                path: FishHookRapid
            }
        },
    ]

#### `Data[x].hydraulics` (_array_)

This is an array of objects, each representing a wave/hole (now called hydraulic) in the rapid.

Let y represent a wave/hole in a rapid. The properties in the `Data[x].hydraulics[y]` object allow you manipulate the name, description, position, size, rotation, and water level of the hydraulic.

| Key                                          | Value                                                  |
| -------------------------------------------- | ------------------------------------------------------ |
| `Data[x].hydraulics[y].name` (_string_)      | Name of the hydraulic                                  |
| `Data[x].hydraulics[y].desc` (_string_)      | Description                                            |
| `Data[x].hydraulics[y].top` (_string_)       | Distance from top of viewport                          |
| `Data[x].hydraulics[y].left` (_string_)      | Distance from left of viewport                         |
| `Data[x].hydraulics[y].height` (_string_)    | Size of wave from river left to river right            |
| `Data[x].hydraulics[y].width` (_string_)     | Size of wave from upstream to downstream               |
| `Data[x].hydraulics[y].rotation` (_integer_) | Rotation in degrees.                                   |
| `Data[x].hydraulics[y].range` (_array_)      | Lowest level and highest level that feature is present |

    const Data = [
        {
            ...
            riverMap: {...},
            hydraulics: [
                {
                    name: "Phil's Hole",
                    desc:
                        "Phil's Hole is the first hole on the Ottawa River at the top of McCoys.,
                    top: "463.55",
                    left: "589.11",
                    height: "58.73",
                    width: "13.44",
                    rotation: 1,
                    range: [-10, 13],
                },
                {...}, // another wave in the rapid
            ]
        },
    ]

#### `Data[x].eddys[y]` (_array_)

This is an array of objects, each representing a eddy in the rapid.

Let y represent a eddy in a rapid. The properties in the `Data[x].eddys[y]` object allow you manipulate the name, description, vector path, position, and water level of the eddy.

| Key                                  | Value                                                                                                                            |
| ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| `Data[x].eddys[y].name` (_string_)   | Name of the eddy                                                                                                                 |
| `Data[x].eddys[y].desc` (_string_)   | Description                                                                                                                      |
| `Data[x].eddys[y].vector` (_string_) | These shapes are best drawn in an external vector editing software, but can also be drawn manually with using SVG path notation. |
| `Data[x].eddys[y].x` (_string_)      | Distance from left of viewport                                                                                                   |
| `Data[x].eddys[y].y` (_string_)      | Distance from bottom of viewport                                                                                                 |
| `Data[x].eddys[y].range` (_array_)   | Lowest level and highest level that eddy is present                                                                              |

    const Data = [
        {
            ...
            hydraulics: [
                {...},
            ],
            eddys: [
                {
                    name: "Football Eddy",
                    desc:
                    "A large eddy that can sometimes collect gear and swimmmers. This can sometimes be hard to get out of.",
                    vector:
                    "M57.7367 100.472C112.332 100.472 150.868 97.0028 157.209 77.01C164.801 53.0702 161.941 37.64 106.045 30.2237C36.1735 20.9535 8.56346 41.3981 12.9053 63.0286C17.2471 84.6591 30.113 100.472 57.7367 100.472Z",
                    x: "725",
                    y: "250",
                    range: [-10, 10],
                },
                {...}, // another wave in the rapid
            ],
        }
    ]

#### `Data[x].lines[y]` (_array_)

This is an array of objects, each representing a line in the rapid.

Let y represent a line in a rapid. The properties in the `Data[x].lines[y]` object allow you manipulate the name, description, vector path, and water level of the eddy.

| Key                                  | Value                                                                                                                            |
| ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| `Data[x].lines[y].name` (_string_)   | Name of the eddy                                                                                                                 |
| `Data[x].lines[y].desc` (_string_)   | Description                                                                                                                      |
| `Data[x].lines[y].vector` (_string_) | These shapes are best drawn in an external vector editing software, but can also be drawn manually with using SVG path notation. |
| `Data[x].lines[y].x` (_string_)      | Distance from left of viewport                                                                                                   |
| `Data[x].lines[y].y` (_string_)      | Distance from bottom of viewport                                                                                                 |
| `Data[x].lines[y].range` (_array_)   | Lowest level and highest level that eddy is present                                                                              |

    const Data = [
        {
            ...
            eddys: [
                {...},
            ],

            lines: [
                {
                    name: "Thread The Needle",
                    desc:
                        "A commonly taken line through McCoys. Start center-right coming into the rapid with your boat pointed slightly left. When approaching the Sattlers, paddle towards river left, clip Sattlers and paddle for your life away from Phils",
                    vector: (
                        <path
                            d="
                            M 150,455
                            q 300,58 500,-10
                            Q 1000,340 1180,800
                            "
                        />
                    ),
                    range: [-100, 100],
                },
            ]
        }
    ]

#### `Data[x].symbols[y]` (_array_)

This is an array of objects, each representing a symbol in the rapid. There are several symbols to choose from

| Symbol Name | Image |
| ----------- | ----- |
| "Caution"   | ----  |
| "Portage"   | ----- |

Let y represent a line in a rapid.

| Key                                  | Value                                          |
| ------------------------------------ | ---------------------------------------------- |
| `Data[x].symbols[y].name` (_string_) | Symbol name, as described above.               |
| `Data[x].symbols[y].desc` (_string_) | Add information about why the symbol is there. |
| `Data[x].symbols[y].top` (_string_)  | Distance from top of viewport                  |
| `Data[x].symbols[y].left` (_string_) | Distance from left of viewport                 |

    const Data =  [
        {
            ...
            lines: [
                {...},
            ],
            symbols: [
                {
                    type: "Caution",
                    desc:
                        "There is no safe way to navigate this rapid at this water level.",
                    top: "200",
                    left: "200",
                },
                {...},
            ]
        }
    ]

#### `Data[x].arrows[y]` (_array_)

This is an array of objects, each representing an "arrow" pointing to the next rapid or the previous rapid in the river.

Let y represent a line in a rapid.

| Key                                   | Value                                                           |
| ------------------------------------- | --------------------------------------------------------------- |
| `Data[x].arrows[y].name` (_string_)   | The name of the target rapid, as written in its `Data[x].name`. |
| `Data[x].arrows[y].bottom` (_string_) | Distance from bottom of viewport, in `vh`                       |
| `Data[x].arrows[y].right` (_string_)  | Distance from right of viewport, in `vw`                        |

    const Data = [
        {
            ...
            symbols: [
                {...},
            ],
            arrows: [
                {
                    name: "Iron Ring",
                    rotation: "160deg",
                    bottom: "4vh",
                    right: "5vw",
                }
                {...},
            ]
        }
    ]

#### `Data[x].mapLabel[y]` (_array_)

This is an array of objects, each representing a label that appears on the pop up river map.

Let y represent a line in a rapid.

| Key                                                 | Value                                                            |
| --------------------------------------------------- | ---------------------------------------------------------------- |
| `Data[x].mapLabel[y].titleTop` (_string_)           | Distance of label from top of viewport `vh`                      |
| `Data[x].mapLabel[y].titleLeft` (_string_)          | Distance of label from left of viewport `vw`                     |
| `Data[x].mapLabel[y].pointerDirection` (_string_)   | Pointer direction (Options: `top` , `bottom`, `left` or `right`) |
| `Data[x].mapLabel[y].pointerCoordinates` (_string_) | Location of the tip of the pointer. Based on a 100x100 SVG box.  |

    const Data = [
        {
            ...
            symbols: [
                {...},
            ],
            mapLabel: [
                {
                    name: "Iron Ring",
                    rotation: "160deg",
                    bottom: "4vh",
                    right: "5vw",
                }
                {...},
            ]
        }
    ]
