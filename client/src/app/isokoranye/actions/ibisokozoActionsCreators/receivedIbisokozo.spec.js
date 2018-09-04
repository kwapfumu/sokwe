import { FETCH_IBISOKOZO_SUCCESS } from '../../../constants/constants';
import receivedIbisokozo from './receivedIbisokozo';

describe('test receivedIbisokozo action creator', () => {
  it('creates an action to acknowledge that Ibisokozo was received', () => {
    const expectedAction = {
      type: FETCH_IBISOKOZO_SUCCESS,
      payload: {
        isFetching: false,
        ibisokozo: [{ igisokozo: "mxxxxiu", inyishu: "grrrr" }, { igisokozo: "abcd", inyishu: "1234" }],
      },
    };
    // eslint-disable-next-line no-undef
    expect(receivedIbisokozo([{ igisokozo: "mxxxxiu", inyishu: "grrrr" }, { igisokozo: "abcd", inyishu: "1234" }])).toEqual(expectedAction);
  });
});
