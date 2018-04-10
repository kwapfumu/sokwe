import _ from 'lodash';
import { createSelector } from 'reselect';
import dispatch from 'redux';
import addPlayedSokozoId from '../actions/currentUserActionsCreators/addPlayedSokozoIdActionsCreators';

// input-selectors i.e. do not modify the state
const ibisokozoSelector = (state) => state.fetchIbisokozoReducer.ibisokozo;
const playedSokozosSelector = (state) => state.currentUserReducer.currentUser.playedSokozosIds;

const getAsokozo = function getAsokozo(ibisokozo, playedSokozosIds) {
  let aSokozo = {};
  if (playedSokozosIds.length === 0) {
    aSokozo = _.head(ibisokozo);
    return aSokozo;
  }
  // iterates over ibisokozo array to check if each sokozo has been played before
  ibisokozo.forEach((sokozo) => {
    // if already played keep searching/iterating
    if (_.includes(playedSokozosIds,sokozo._id)) {
      continue;
    } else { // if not already played return sokozo
      Object.assign(aSokozo, sokozo);
      // add id to playedSokozosIds and persist
      dispatch(addPlayedSokozoId(sokozo._id));
        return aSokozo;
      }
    });
  }
};
// memoized selector takes input selectors and a transform function that
// calculates the aSokozo State
/** Takes one or more selectors, or an array of selectors, computes their values
* and passes them as arguments to resultFunc */
const aSokozoSelector = createSelector(
  [ibisokozoSelector, playedSokozosSelector],
  getAsokozo,
);

export default aSokozoSelector;
