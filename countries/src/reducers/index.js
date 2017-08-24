import {combineReducers} from 'redux';
import CountriesReducer from './countryReducer';

const rootReducers = combineReducers({
  countries: CountriesReducer
})

export default rootReducers;
