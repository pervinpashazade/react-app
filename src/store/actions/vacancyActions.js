import axios from 'axios'

export const getVacancies = (state) => dispatch => {
    dispatch({type: 'GET_LOADING_TRUE'})
    axios.get('https://devjobscore.prospectsmb.com/v1/vacancies')
        .then(response => dispatch({ type: 'GET_VACANCIES_SUCCESS', payload: response.data.data }))
        .catch(error => dispatch({type: 'GET_VACANCIES_ERROR', payload: error}))
}