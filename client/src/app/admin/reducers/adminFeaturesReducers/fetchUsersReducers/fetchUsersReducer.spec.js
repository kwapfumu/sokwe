import fetchUsersReducer from './fetchUsersReducer';
import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR } from '../../../../constants/constants';

describe('testing fetchUsersReducer', () => {
  it('should return the initial state', () => {
    expect(fetchUsersReducer(undefined, {})).toEqual({ isFetching: false, users: [] });
  });

  it('should handle FETCH_USERS_REQUEST', () => {
    expect(fetchUsersReducer(
      { isFetching: false, users: [] },
      { type: FETCH_USERS_REQUEST, payload: { isFetching: true } },
    )).toEqual({ isFetching: true, users: [] });
  });

  it('should handle FETCH_USERS_SUCCESS', () => {
    expect(fetchUsersReducer(
      { isFetching: false, users: [] },
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
    )).toEqual({
      isFetching: false,
      users: [{
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
      }],
    });
  });

  it('should handle ADD_IGISOKOZO_ERROR', () => {
    expect(fetchUsersReducer(
      { isFetching: false, users: [] },
      { type: FETCH_USERS_ERROR, payload: { isFetching: false } },
    )).toEqual({ isFetching: false, users: [] });
  });
});
