import { CATEGORY_DETAILS } from '../Action/ActionType';

const initialState = [];

const CategoryDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORY_DETAILS:

      return action.payload;
    default:
      return state;
  }
};
export default CategoryDetailReducer;
