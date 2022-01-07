import { GET_CATEGORY } from '../Action/ActionType';

const initialState = [];

const CategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORY:

      return action.payload;
    default:
      return state;
  }
};
export default CategoryReducer;
