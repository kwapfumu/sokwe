import update from 'immutability-helper';

// Case reducer
export default function fetchValentinasMsgsErrorReducer(fetchValentinasMsgsState, payload) {
  // sets isFetching: false
  const newFetchValentinasMsgsState = update(fetchValentinasMsgsState, { $merge: payload });
  return newFetchValentinasMsgsState;
}
