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

export const handleClickAddRapid = (riverArr, navState, label) => {
  axios
    .post("/api/handleClickAddRapid", {
      riverArr: riverArr,
      riverIndex: navState.river,
      rapidIndex: navState.rapid,
      featureIndex: navState.feature,
      label:label
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const handleClickDelete = () => {};
