# Jeff's River Guides

The easiest to convert your favorite river into a responsive, up to date guide. The following will show the projects capabilities, and a how to create your own. Only a basic level of development understanding is needed to create your own.

The entire map can be created by entering data into JavaScript Object.

## Getting Started

This is where I will talk about what to install. I think React is it.

## Build Your Own River Map

### Core Concepts

The entire map is rendered by a single array of objects that contains the entirety of the river data. This means that to complete a river map, the only thing that you need to edit it the information in that array.

Editing in the code editor while running a live server is the method in which we will be monitoring the changes that we make. Using a vector graphics editor can speed up the process.

### Mutating the Data.js Object

This is an array of objects, each object representing one distinct rapid section.

    const Data = [ // An array of rapids
        {
            // All information about a single rapid
        },
    ]

**Lets build our first rapid!**

Let _x_ represent a rapid being rendered in the array.

#### `Data[x].name` (_string_)

The most common name of the rapid.

    const Data = [
        {
            name: "Fish Hook Rapid", //ex. "Dragon's Tooth", "Zoar Gap" etc.
        },
    ]

#### `Data[x].desc` (_string_)

A short description of the rapid or just the class.

    const Data = [
        {
            name: "Fish Hook Rapid",
            desc: "Class III", //ex. "Class 2", "Class IV+", "Class Five"
        },
    ]

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
| "Caution"   |       |
| "Portage"   |       |

Let y represent a line in a rapid.

| Key                                  | Value                                          |
| ------------------------------------ | ---------------------------------------------- |
| `Data[x].symbols[y].name` (_string_) | Symbol name, as described above.               |
| `Data[x].symbols[y].desc` (_string_) | Add information about why the symbol is there. |
| `Data[x].symbols[y].top` (_string_)  | Distance from top of viewport                  |
| `Data[x].symbols[y].left` (_string_) | Distance from left of viewport                 |

    const Data = [
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
