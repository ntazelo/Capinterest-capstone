import CategoryReducer from './CategoryReducer';
import { GET_CATEGORY } from '../Action/ActionType';

describe('homeReducer Test', () => {
  const initialState = [];
  it('Returns an empty array with the initial state', () => {
    const payload = { type: GET_CATEGORY, payload: [{ category: 'music' }] };
    const state = CategoryReducer(initialState, payload);
    expect(state).toEqual(payload.payload);
  });

  it('Returns an empty array with the initial state', () => {
    const payload = { type: 'Undefined', payload: [] };
    const state = CategoryReducer(initialState, payload);
    expect(state).toEqual(initialState);
  });
});
