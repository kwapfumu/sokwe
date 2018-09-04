import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import fetchIbisokozo from './fetchIbisokozoActionsCreators';
import { FETCH_IBISOKOZO, FETCH_IBISOKOZO_SUCCESS } from '../../../constants/constants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('test fetchIbisokozo async action Creators', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('creates FETCH_IBISOKOZO_SUCCESS when fetching ibisokozo has been done', () => {
    fetchMock.getOnce('/admin/ibisokozo', { body: { ibisokozo: [{ igisokozo: "mxxxxiu", inyishu: "grrrr" }, { igisokozo: "abcd", inyishu: "1234" }] } }, { headers: { 'Content-Type': 'application/json' } });

    const expectedActions = [
      {
        type: FETCH_IBISOKOZO,
        payload: { isFetching: true },
      },
      {
        type: FETCH_IBISOKOZO_SUCCESS,
        payload: {
          isFetching: false,
          ibisokozo: [{ igisokozo: "mxxxxiu", inyishu: "grrrr" }, { igisokozo: "abcd", inyishu: "1234" }],
          // receivedAt: Date.now(),
        },
      },
    ];

    const store = mockStore({
      isFetching: false,
      ibisokozo: [],
    });

    return store.dispatch(fetchIbisokozo()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
