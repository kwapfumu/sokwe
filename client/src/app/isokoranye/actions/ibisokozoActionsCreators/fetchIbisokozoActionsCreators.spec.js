import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchIbisokozo from './fetchIbisokozoActionsCreators';
import { FETCH_IBISOKOZO, FETCH_IBISOKOZO_SUCCESS } from '../../../constants/constants';
import fetchMock from 'fetch-mock';
import expect from 'expect'; // You can use any testing library

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('test fetchIbisokozo async action Creators', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  })

  it('creates FETCH_IBISOKOZO_SUCCESS when fetching ibisokozo has been done', () => {
    fetchMock
      .getOnce('/isokoranye', { body: { todos: ['do something'] }, headers: { 'content-type': 'application/json' } });

  const expectedActions = [
    {
      type: FETCH_IBISOKOZO,
      payload: { isFetching: true },
    },
    {
      type: FETCH_IBISOKOZO_SUCCESS,
      payload: {
        isFetching: false,
        // eslint-disable-next-line no-undef
        ibisokozo: json.data.children.map((child) => child.data),
        // receivedAt: Date.now(),
      },
    }
      // { type: types.FETCH_TODOS_SUCCESS, body: { todos: ['do something'] } }
  ];

  const store = mockStore({ ibisokozo: [] });
​
  return store.dispatch(fetchIbisokozo()).then(() => {
     // return of async actions
     expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
