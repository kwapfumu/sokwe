import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import deleteUser from './adminDeleteUserActionsCreators';
import { DELETE_USERS_REQUEST, DELETE_USER_SUCCESS } from '../../../constants/constants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('test deleteUser async action Creators', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('creates DELETE_USER_SUCCESS when deletinga user has been done', () => {
    fetchMock.getOnce('/admin/users/:125/deleteUser', { body: { _id: "125" } }, { headers: { 'Content-Type': 'application/json' } });

    const expectedActions = [
      {
        type: DELETE_USERS_REQUEST,
        payload: {
          aUserId2Delete: "125",
          isSaving: true,
        },
      },
      {
        type: DELETE_USER_SUCCESS,
        payload: { isSaving: false },
      },
    ];

    const store = mockStore({ isSaving: false });

    return store.dispatch(deleteUser("125")).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
