import { TOTAL } from '../helper/constant';
import states  from '../source/data/info';

const initState = {
  name: '',
  capital: '',
  total_area: null,
  total_population: null,
  time_zone: '',
}

export function totalReducer(state = initState, action) {
  
  switch(action.type) {
    case TOTAL: 
    console.log(action.payload, 'pppppppp');
    console.log(states[action.payload]);
    const {capital, total_area, total_population, time_zone} = states[action.payload];
      console.log(capital, "SUSUSUUS");
      return { ...state, name: action.payload, 
        capital,
        total_area,
        total_population,
        time_zone,
    }
    default :
      return state;
  }
}