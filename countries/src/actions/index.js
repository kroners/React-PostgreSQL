import * as api from '../api';

export const GET_COUNTRIES = 'GET_COUNTRIES';
export const ADD_COUNTRY = 'ADD_COUNTRY';
export const EDIT_COUNTRY = 'EDIT_COUNTRY';
export const DELETE_COUNTRY = 'DELETE_COUNTRY';

export function getCountries() {
  return dispatch => {
    api.getCountries()
      .then(response => {
        console.log(response);
        dispatch({
          type: GET_COUNTRIES,
          payload: response.data
        });
      })
      .catch(err => {
        console.log(err);
        // dispatch(handleErrors(err))
      })
  };
}

export function addCountry(params) {
  return dispatch => {
    api.addCountry(params)
      .then(response => {
        console.log(response);
        dispatch({
          type: ADD_COUNTRY,
          payload: response.data
        })
      })
      .catch(err => {
        console.log(err);
        // dispatch(handleErrors(err))
      })
  }
}


// export const selectNumber = (number) => {
//   console.log("Numero ingresado: ", number);
//   return {
//         type: NUMBER_SELECTED,
//         payload: number
//   };
// }
//
// export const selectDot = (number) => {
//   console.log("Valor ingresado: ", number);
//   return {
//         type: DOT_SELECTED,
//         payload: number
//   };
// }
//
// export const resetLed = () => {
//   console.log("Volviendo a Nada");
//   return {
//         type: RESET_SELECTED,
//         payload: ''
//   };
// }
