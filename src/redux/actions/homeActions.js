import {
    SET_SEARCH_FIELD,
    GET_ROBOTS,
    GET_ROBOTS_PROGRESS,
    GET_ROBOTS_SUCCESS,
    GET_ROBOTS_FAIL,
} from "../actionTypes";

export const setSearchField = (text) => ({
    type: SET_SEARCH_FIELD,
    payload: text
})

export const getRobots = () => ({ type: GET_ROBOTS })
export const getRobotsProgress = () => ({ type: GET_ROBOTS_PROGRESS })
export const getRobotsSuccess = (robots) => ({ type: GET_ROBOTS_SUCCESS, payload: robots })
export const getRobotsFail = (errorText) => ({ type: GET_ROBOTS_FAIL, payload: errorText })
