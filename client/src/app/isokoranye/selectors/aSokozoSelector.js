import _ from 'lodash';
import { createSelector } from 'reselect';
import dispatch from 'redux';
import addPlayedSokozoIdActionsCreators from '../actions/currentUserActionsCreators/addPlayedSokozoIdActionsCreators';

// input-selectors i.e. do not modify the state
const ibisokozoSelector = (state) => state.ibisokozo;
const playedSokozosSelector = (state) => state.currentUser.playedSokozosIds;

const getAsokozo = function getAsokozo(ibisokozo, currentUser.playedSokozosIds) {
  let aSokozo = {};
  if(currentUser.playedSokozosIds.length === 0) {
    aSokozo = _.head(ibisokozo);
    return aSokozo;
  } else {
    // iterates over ibisokozo array to check if  each sokozo has been played
    // before
    ibisokozo.forEach((sokozo) => {
      // if already played keep searching/iterating
      if(_.includes(currentUser.playedSokozosIds,sokozo._id)) {
        continue;
      } else { // if not already played return sokozo
        Object.assign(aSokozo, sokozo);
        // add id to playedSokozosIds and persist
        dispatch(addPlayedSokozoIdActionsCreators.addPlayedSokozoId(sokozo._id));
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
