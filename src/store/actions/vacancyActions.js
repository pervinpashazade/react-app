import axios from 'axios'

export const getVacancies = (state) => dispatch => {
    dispatch({ type: LOAD_VACANCIES_REQUEST() })
    axios.get('https://devjobscore.prospectsmb.com/v1/vacancies')
        .then(response => dispatch({ type: LOAD_VACANCIES_SUCCESS(), payload: response.data.data }))
        .catch(error => dispatch({ type: LOAD_VACANCIES_FAILURE(), payload: error }))
}

export const LOAD_VACANCIES_REQUEST = () => {
    return 'LOAD_VACANCIES_REQUEST'
}

export const LOAD_VACANCIES_SUCCESS = () => {
    return 'LOAD_VACANCIES_SUCCESS'
}

export const LOAD_VACANCIES_FAILURE = () => {
    return 'LOAD_VACANCIES_FAILURE'
}