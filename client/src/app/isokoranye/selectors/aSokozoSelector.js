import _ from 'lodash';
import { createSelector } from 'reselect';
import dispatch from 'redux';
import addPlayedSokozoId from '../actions/currentUserActionsCreators/addPlayedSokozoIdActionsCreators';

// input-selectors i.e. do not modify the state
const ibisokozoSelector = (state) => state.fetchIbisokozoReducer.ibisokozo;
const playedSokozosSelector = (state) => state.currentUserReducer.currentUser.playedSokozosIds;
// eslint-disable-next-line consistent-return
const getAsokozo = function getAsokozo(ibisokozo, playedSokozosIds) {
  let aSokozo = {};
  if (playedSokozosIds.length === 0) {
    aSokozo = _.head(ibisokozo);
    return aSokozo;
  }
  // iterates over ibisokozo array to check if each sokozo has been played before
  // eslint-disable-next-line consistent-return
  ibisokozo.forEach((sokozo) => {
    // if not already played return sokozo
    // eslint-disable-next-line no-underscore-dangle
    if (_.includes(playedSokozosIds, sokozo._id) === false) {
      Object.assign(aSokozo, sokozo);
      // add id to playedSokozosIds and persist
      // eslint-disable-next-line no-underscore-dangle
      dispatch(addPlayedSokozoId(sokozo._id));
      return aSokozo;
    }
  });
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
