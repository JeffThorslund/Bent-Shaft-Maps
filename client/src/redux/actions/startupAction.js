import axios from "axios";

export const fetchRivers = () => {
  const request = axios.get("/api/getRivers");
  return (dispatch) => {
    request.then(({ data }) => {
      console.log(data);
      dispatch({ type: "FETCH_RIVERS", payload: data });
    });
  };
};
