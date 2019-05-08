import { TOTAL_REQUEST, TOTAL_SUCCEESS, TOTAL_ERROR } from '../helper/constant';

export function getTotal(state) {
  return function (dispatch) {
    dispatch({
      type: TOTAL_REQUEST
    })

    fetch("/source/data/info.json").then(function(res) {
      console.log('!!!!', res)
        //return res.json();
        return res;
      })
      .then(data => {
        console.log(data);
      })
  }
}