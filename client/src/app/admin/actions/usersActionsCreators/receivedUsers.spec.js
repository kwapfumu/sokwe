import { FETCH_USERS_SUCCESS } from '../../../constants/constants';
import receivedUsers from './receivedUsers';

describe('test receivedUsers action creator', () => {
  it('creates an action to acknowledge that Users were received', () => {
    const expectedAction = {
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
    };
    // eslint-disable-next-line no-undef
    expect(receivedUsers([
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
    ])).toEqual(expectedAction);
  });
});
