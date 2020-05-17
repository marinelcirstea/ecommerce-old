import { CLICK } from '../actions/types';
const initialState = {
  click: '',
};
export default function (state = initialState, action) {
  switch (action.type) {
    case CLICK:
      return {
        ...state,
        click: action.payload,
      };
    default:
      return state;
  }
}
