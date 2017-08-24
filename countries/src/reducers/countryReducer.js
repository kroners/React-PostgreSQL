import {GET_COUNTRIES, ADD_COUNTRY, EDIT_COUNTRY} from '../actions';

const INITIAL_STATE = {
  countries: [],
  name: '',
  continent: ''
};

export default function (state=INITIAL_STATE, action){
  switch(action.type) {

    case GET_COUNTRIES:
      console.log(action.payload);
      return {...state, countries: action.payload};

    case ADD_COUNTRY:
      return {...state, countries: action.payload.data[0]};

    default:
      return state;
  }
}
