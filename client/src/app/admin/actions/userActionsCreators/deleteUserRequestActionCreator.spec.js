import { DELETE_USERS_REQUEST } from '../../../constants/constants';
import deleteUserRequestActionCreator from './deleteUserRequestActionCreator';

describe('test deleteUserRequestActionCreator', () => {
  it('creates an action to delete a user', () => {
    const expectedAction = {
      type: DELETE_USERS_REQUEST,
      payload: {
        aUserId2Delete: "125",
        isSaving: true,
      },
    };
    expect(deleteUserRequestActionCreator("125")).toEqual(expectedAction);
  });
});
