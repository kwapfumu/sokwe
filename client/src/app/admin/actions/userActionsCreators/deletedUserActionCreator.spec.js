import { DELETE_USER_SUCCESS } from '../../../constants/constants';
import deletedUserActionCreator from './deletedUserActionCreator';

describe('test deletedUserActionCreator', () => {
  it('creates an action to acknowledge that a user was deleted', () => {
    const expectedAction = {
      type: DELETE_USER_SUCCESS,
      payload: { isSaving: false },
    };
    // eslint-disable-next-line no-undef
    expect(deletedUserActionCreator()).toEqual(expectedAction);
  });
});
