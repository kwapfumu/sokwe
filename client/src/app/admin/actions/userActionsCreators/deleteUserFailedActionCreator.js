import { DELETE_USER_ERROR } from '../../../constants/constants';

export default function deleteUserFailedActionCreator() {
  return {
    type: DELETE_USER_ERROR,
    payload: {
      isSaving: false,
    },
  };
}
