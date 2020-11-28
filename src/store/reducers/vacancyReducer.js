import {
    LOAD_VACANCIES_REQUEST,
    LOAD_VACANCIES_SUCCESS,
    LOAD_VACANCIES_FAILURE
} from '../actions/vacancyActions'

const INITIAL_STATE = {
    isLoading: false,
    vacancies: [],
    message: ''
}

export const vacancyReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOAD_VACANCIES_REQUEST():
            return { ...state, isLoading: true, message: '' }
        case LOAD_VACANCIES_SUCCESS():
            return { ...state, vacancies: action.payload, isLoading: false }
        case LOAD_VACANCIES_FAILURE():
            return { ...state, message: action.payload, isLoading: false }
        default:
            return state;
    }
}