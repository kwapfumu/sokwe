import addIgisokozoReducer from './addIgisokozoReducer';
import { ADD_IGISOKOZO_REQUEST, ADD_IGISOKOZO_SUCCESS, ADD_IGISOKOZO_ERROR } from '../../../../constants/constants';

describe('testing addIgisokozoReducer', () => {
  it('should return the initial state', () => {
    expect(addIgisokozoReducer(undefined, {})).toEqual({ isSaving: false, ibisokozo: [] });
  });

  it('should handle ADD_IGISOKOZO_REQUEST', () => {
    expect(addIgisokozoReducer(
      { isSaving: false, ibisokozo: [] },
      { type: 'ADD_IGISOKOZO_REQUEST', payload: { isSaving: true } }
    )).toEqual({ isSaving: true, ibisokozo: [] });
  });

  it('should handle ADD_IGISOKOZO_SUCCESS', () => {
    // expect(addIgisokozoReducer(
      // { isSaving: false, ibisokozo: [] },
      // { type: 'ADD_IGISOKOZO_REQUEST', payload: { isSaving: true } }
    // )).toEqual({ isSaving: false, ibisokozo: [] });
  });

  it('should handle ADD_IGISOKOZO_ERROR', () => {
    expect(addIgisokozoReducer(
      { isSaving: false, ibisokozo: [] },
      { type: 'ADD_IGISOKOZO_ERROR', payload: { isSaving: false } }
    )).toEqual({ isSaving: false, ibisokozo: [] });
  });
​});
