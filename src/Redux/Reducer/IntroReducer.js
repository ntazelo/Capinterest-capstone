import { INTRO_IMAGES } from '../Action/ActionType';

const initialState = [];

const IntroReducer = (state = initialState, action) => {
  switch (action.type) {
    case INTRO_IMAGES:

      return action.payload;
    default:
      return state;
  }
};
export default IntroReducer;
