import axios from "axios";

export const fetchRivers = () => {
  const request = axios.get("/api/getRivers");
  return (dispatch) => {
    request.then(({ data }) => {
      dispatch({ type: "FETCH_RIVERS", payload: data });
    });
  };
};

export const submitRiverFormValues = (values, riverIndex) => {
  return {
    type: "SUBMIT_RIVER_FORM_VALUES",
    payload: { values, riverIndex },
  };
};

export const submitSectionFormValues = (values, riverIndex, sectionIndex) => {
  return {
    type: "SUBMIT_SECTION_FORM_VALUES",
    payload: { values, riverIndex, sectionIndex },
  };
};

export const submitRapidFormValues = (
  values,
  riverIndex,
  sectionIndex,
  rapidIndex
) => {
  return {
    type: "SUBMIT_RAPID_FORM_VALUES",
    payload: { values, riverIndex, sectionIndex, rapidIndex },
  };
};
