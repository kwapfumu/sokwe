import { DELETE_USER_SUCCESS } from '../../../constants/constants';

export default function deletedUserActionCreator() {
  return {
    type: DELETE_USER_SUCCESS,
    payload: { isSaving: false },
  };
}
