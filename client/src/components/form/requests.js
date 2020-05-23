const axios = require("axios");

export const handleSubmit = (river) => {
  axios
    .post("/api/handleSubmit", {
      river: river,
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      throw error;
    });
};

export const handleClickAddRapid = (riverName) => {
  axios
    .post("/api/handleClickAddRapid", {
      riverName: riverName,
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const handleClickDelete = () => {};
