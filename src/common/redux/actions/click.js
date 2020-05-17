import { CLICK } from './types';
export const doClick = () => (dispatch) => {
  dispatch({
    type: CLICK,
    payload: 'click',
  });
};
