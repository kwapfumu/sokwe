import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import fetchUsers from './fetchUsersActionsCreators';
import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from '../../../constants/constants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('test fetchUsers async action Creators', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('creates FETCH_USERS_SUCCESS when fetching users has been done', () => {
    fetchMock.getOnce('/admin/users', {
      body: {
        users: [
          {
            email: "wtv@pff.com",
            username: "wtv",
            userRole: "regularUser",
            lastAddedSokozo: { igisokozo: "d", inyishu: "1" },
            numberOfSokozoAdded: 1,
            playedSokozosIds: [{ _id: "1245" }],
            scores: [
              {
                gameId: 1,
                date: Date.now,
                score: 1,
              },
            ],
            createdOn: Date.now,
          },
        ],
      },
    }, { headers: { 'Content-Type': 'application/json' } });

    const expectedActions = [
      {
        type: FETCH_USERS_REQUEST,
        payload: { isFetching: true },
      },
      {
        type: FETCH_USERS_SUCCESS,
        payload: {
          isFetching: false,
          users: [
            {
              email: "wtv@pff.com",
              username: "wtv",
              userRole: "regularUser",
              lastAddedSokozo: { igisokozo: "d", inyishu: "1" },
              numberOfSokozoAdded: 1,
              playedSokozosIds: [{ _id: "1245" }],
              scores: [
                {
                  gameId: 1,
                  date: Date.now,
                  score: 1,
                },
              ],
              createdOn: Date.now,
            },
          ],
        },
      },
    ];

    const store = mockStore({
      isFetching: false,
      users: [],
    });

    return store.dispatch(fetchUsers()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
