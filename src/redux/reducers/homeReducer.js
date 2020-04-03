import {
    SET_SEARCH_FIELD,
    GET_ROBOTS_PROGRESS,
    GET_ROBOTS_SUCCESS,
    GET_ROBOTS_FAIL
} from "../actionTypes";

const INITIAL_STATE = {
    searchField: '',
    getRobotsProgress: false,
    robots: [],
    getRobotsError: ''
}

export default (state = INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    if (type === SET_SEARCH_FIELD) {
        return {
            ...state,
            searchField: payload
        }
    }

    if (type === GET_ROBOTS_PROGRESS) {
        return {
            ...state,
            getRobotsProgress: true,
            robots: [],
            getRobotsError: ''

        }
    }

    if (type === GET_ROBOTS_SUCCESS) {
        return {
            ...state,
            getRobotsProgress: false,
            robots: payload,
            getRobotsError: ''
        }
    }

    if (type === GET_ROBOTS_FAIL) {
        return {
            ...state,
            getRobotsProgress: false,
            robots: [],
            getRobotsError: payload
        }
    }

    return state

}
