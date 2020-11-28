const INITIAL_STATE = {
    isLoading: false,
    vacancies: [],
    message: ''
}

export const vacancyReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "LOAD_VACANCIES_REQUEST":
            return { ...state, isLoading: true, message: '' }
        case "LOAD_VACANCIES_SUCCESS":
            return { ...state, vacancies: action.payload, isLoading: false }
        case "GET_VACANCIES_FAILURE":
            return { ...state, message: action.payload, isLoading: false }
        default:
            return state;
    }
}