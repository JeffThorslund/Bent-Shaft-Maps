export const mockRivers = [
  {
    _id: "5f835a1909a4b536d9553fc2",
    name: "hottawa",
    id: "river_W41oYWjV4",
    sections: [
      {
        name: "Whitewater Region",
        id: "section_jswy1FCZu",
        desc:
          "The Ottawa River is one of the most popular freestyle rivers in the world, offering many playboating opportunities at almost all water levels. Though the runnability of each rapid varies with water levels, there is a runnable route down the river at all water levels.",
        overviewMap: "78afa65c8aedfe7c1c228577d206c422Overview.jpg",
        access:
          "The put-in located on McCoy Chute Trail, with a clear parking area. There is access to clean outhouses. There are several takeout options. Owl rafting provides a free takeout but requires a significant flatwater section after the rapids. RiverRun has a takeout that costs 15$.",
        location: "Beachburg, Ontario",
        class: "III",
        putIn: "https://goo.gl/maps/ycePkRuAsvY6EnDR9",
        takeOut: "https://goo.gl/maps/zvRRRfpDGq9Eh1WdA",
        defaultLevel: 0,
        levelUnits: "ft",
        levelRange: [-100, 100],
        rapids: [
          {
            name: "McCoys Chute",
            desc: "Description of this rapid",
            riverMap: "27c21e72b765b6a562875d41b4cc285aMcCoys.jpg",
            hydraulics: [
              {
                name: "Phil's Hole",
                desc:
                  "Phil's Hole is the first hole on the Ottawa River at the top of McCoys. It is munchiest between 4' to 8'. Below 4' and above 8' a punchable tounge opens up in the center of the hole. Scouting provides a clear view of the rapid.",
                y: 463.55,
                x: 589.11,
                height: 58.73,
                width: 13.44,
                rotation: 1,
                range: [-10, 13],
                id: "hydraulic_0bn43",
              },
            ],
            eddys: [],
            lines: [
              {
                name: "Thread The Needle",
                desc:
                  "A commonly taken line through McCoys. Start center-right coming into the rapid with your boat pointed slightly left. When approaching the Sattlers, paddle towards river left, clip Sattlers and paddle for your life away from Phils",
                vector: [
                  {
                    type: "M",
                    args: [30, 20],
                  },
                  {
                    type: "S",
                    args: [40, 20, 60, 30],
                  },
                  {
                    type: "S",
                    args: [45, 40, 70, 40],
                  },
                ],
                x: 260.55,
                y: 460.26,
                range: [-100, 100],
                id: "line_4dk61",
              },
            ],
            symbols: [],
            arrows: [],
            id: "rapid_sDPD0-hef",
            overviewLabel: {
              pointer: { x: 40, y: 40 },
              tag: { x: 50, y: 50 },
            },
          },
          {
            name: "Magical Mystery Tour",
            desc: "Description of this rapid",
            riverMap: "40e27279441ff4c9892ac5b1ecae6dc7MagicalMysteryTour.jpg",
            hydraulics: [],
            eddys: [],
            lines: [],
            symbols: [],
            arrows: [],
            id: "rapid_iknw81mXA",
            overviewLabel: {
              pointer: { x: 40, y: 40 },
              tag: { x: 50, y: 50 },
            },
          },
        ],
      },
    ],
  },
];
