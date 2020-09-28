const createNewChunk = (config, topic) => {
  Object.keys(config[topic][0]).forEach((v) => {
    if (config[topic][0][v].type == String) {
      config[topic][0][v] = "";
    }
    config[topic][0][v] = "not";
  });
  return config[topic][0];
};

export default createNewChunk;
