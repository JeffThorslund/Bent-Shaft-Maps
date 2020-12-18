const path = require("path");
module.exports = {
  require: [path.join(__dirname, "src/main.css")],
  sections: [
    {
      name: "General",
      description:
        "Components meant to be heavily reused throughout the project.",
      components: "src/components/general/[A-Z]*.js",
    },
    {
      name: "Home",
      description: "Components used on the home page",
      components: "src/components/home/[A-Z]*.js",
    },
    {
      name: "River",
      description: "Components specific to each river",
      components: "src/components/river/[A-Z]*.js",
    },
    {
      name: "Rapid",
      description: "Components specific to each rapid",
      components: "src/components/rapid/[A-Z]*.js",
    },
  ],
};
