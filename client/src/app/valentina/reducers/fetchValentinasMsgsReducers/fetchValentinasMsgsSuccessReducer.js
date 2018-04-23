import update from 'immutability-helper';

// Case reducer
export default function fetchValentinasMsgsSuccessReducer(fetchValentinasMsgsState, payload) {
  // sets isFetching: false, ibisokozo: to received array
  const newFetchValentinasMsgsState = update(fetchValentinasMsgsState, { $merge: payload });
  return newFetchValentinasMsgsState;
}
