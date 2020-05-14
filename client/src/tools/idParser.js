//takes a rapid name and turns it into an id
//McCoy's Chute Rapid -----> mccoys-chute-rapid

const idParser = (name) => {
  let space = /\s/;
  let alphaNum = /[a-zA-Z0-9\s]/;

  let id = name
    .split("")
    .filter((char) => alphaNum.test(char))
    .map((char) => {
      if (space.test(char)) {
        return "-";
      } else {
        return char;
      }
    })
    .join("")
    .toLowerCase();
  return id;
};

export default idParser;
