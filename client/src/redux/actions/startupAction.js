import axios from "axios";

export const fetchRivers = () => {
  const request = axios.get("/api/getRivers");
  return (dispatch) => {
    request.then(({ data }) => {
      dispatch({ type: "FETCH_RIVERS", payload: data });
    });
  };
};
