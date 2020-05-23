const axios = require("axios");

export const handleSubmit = (values, river) => {
  axios
    .post("/api/handleSubmit", {
      values,
      river,
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      throw error;
    });
};

export const handleClickAddRapid = () => {
  axios
    .get("/api/handleClickAddRapid")
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const handleClickDelete = () => {};
