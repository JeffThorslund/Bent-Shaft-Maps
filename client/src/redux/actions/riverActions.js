export const FETCH_RIVERS_BEGIN   = 'FETCH_RIVERS_BEGIN';
export const FETCH_RIVERS_SUCCESS = 'FETCH_RIVERS_SUCCESS';
export const FETCH_RIVERS_FAILURE = 'FETCH_RIVERS_FAILURE';

export const fetchRiversBegin = () => ({
  type: FETCH_RIVERS_BEGIN
});

export const fetchRiversSuccess = products => ({
  type: FETCH_RIVERS_SUCCESS,
  payload: { products }
});

export const fetchRiversFailure = error => ({
  type: FETCH_RIVERS_FAILURE,
  payload: { error }
});