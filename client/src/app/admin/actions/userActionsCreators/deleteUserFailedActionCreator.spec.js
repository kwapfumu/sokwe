import { DELETE_USER_ERROR } from '../../../constants/constants';
import deleteUserFailedActionCreator from './deleteUserFailedActionCreator';

describe('test deleteUserFailedActionCreator', () => {
  it('should create an action to acknowledge that delete a User failed', () => {
    const expectedAction = {
      type: DELETE_USER_ERROR,
      payload: {
        isSaving: false,
      },
    };
    // eslint-disable-next-line no-undef
    expect(deleteUserFailedActionCreator()).toEqual(expectedAction);
  });
});
