# Jeff's River Guides

The easiest to convert your favorite river into a responsive, up to date guide. The following will show the projects capabilities, and a how to create your own. Only a basic level of development understanding is needed to create your own.

The entire map can be created by entering data into  JavaScript Object.

## Getting Started

This is where I will talk about what to install. I think React is it. 

## Build Your Own River Map

### Core Concepts

The entire map is rendered by a single array of objects that contains the entirety of the river data. This means that to complete a river map, the only thing that you need to edit it the information in that array. 

Editing in the code editor while running a live server is the method in which we will be monitoring the changes that we make. Using a vector graphics editor can speed up the process. 

### Mutating the Data.js Object 

Changing data in this file will be the entirity of building our river map.

    const Data = [ // An array of rapids
        {
            // All information about a single rapid
        },
    ]

Lets build our first rapid!

Let x represent a rapid being rendered in the array.

#### `Data[x].name` (*string*)

The most common name of the rapid. 

    const Data = [ 
        {
            name: "Fish Hook Rapid", //ex. "Dragon's Tooth", "Zoar Gap" etc.
        },
    ]

#### `Data[x].desc` (*string*)

A short description of the rapid or just the class. 

    const Data = [ 
        {
            name: "Fish Hook Rapid", 
            desc: "Class III", //ex. "Class 2", "Class IV+", "Class Five"
        },
    ]

#### `Data[x].displayPosition` (*object*)

This object indicates where the display panel (`Display.js`) it located. As with most positionable elements, the units for vertical distances are viewport height (`vh`) and horizontal distances are viewport width(`vw`). The object has the following keys: `top, left, width`. The `height` auto adjusts based on its contents. 

    const Data = [ 
        {
            name: "Fish Hook Rapid",
            desc: "Class III",
            displayPosition: {
                top: "70vh", // the position from the top of the viewport
                left: "22vw", // the position from the left side of the viewport
                width: "35vw", //the width of Display.js
            },
        },
    ]

#### `Data[x].riverMap` (*object*)

This object holds the rapid base map and information on how it is viewed and scaled. 

##### ViewBox

As all features are rendered into a single SVG element, we have control over the viewBox attribute. This can be used to make small adjustments to the view of the rapid. All elements will scale and tranpose proportionally to viewBox changes. This is a [resource for learning viewBox](https://wattenberger.com/guide/scaling-svg). 

##### path



    import React from 'react'
    import FishHookRapid from "./components/VectorAssets/Basemaps/FishHookRapid"

    const Data = [ 
        {
            ...
            desc: "Class III",
            displayPosition: {...},
            riverMap: {
                viewBox: "0 0 1600 900", //default value
                path: FishHookRapid
            }
        },
    ]








