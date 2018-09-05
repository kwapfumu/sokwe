import { DELETE_USERS_REQUEST } from '../../../constants/constants';

export default function deleteUserRequestActionCreator(aUserId) {
  return {
    type: DELETE_USERS_REQUEST,
    payload: {
      aUserId2Delete: aUserId,
      isSaving: true,
    },
  };
}
