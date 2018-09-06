import { DELETE_USER_REQUEST } from '../../../constants/constants';

export default function deleteUserRequestActionCreator(aUserId) {
  return {
    type: DELETE_USER_REQUEST,
    payload: {
      aUserId2Delete: aUserId,
      isSaving: true,
    },
  };
}
