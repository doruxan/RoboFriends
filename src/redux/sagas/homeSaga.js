import { put, call } from 'redux-saga/effects'
import robotsApi from '../../api/configureApi'
import { getRobotsSuccess, getRobotsFail, getRobotsProgress } from '../actions/homeActions'

export function* getRobotsSaga(action) {
    try {
        yield put(getRobotsProgress())
        const response = yield call(robotsApi.getRobots)
        const jsonBody = JSON.parse(response._bodyText)
        yield put(getRobotsSuccess(jsonBody))
    } catch (error) {
        console.log('Error at getRobotsSaga', error)
        const jsonBody = JSON.parse(error._bodyText)
        yield put(getRobotsFail(jsonBody))
    }
}