import { takeEvery, takeLatest } from 'redux-saga/effects'

import * as $ from './actionTypes'
import * as home from './sagas/homeSaga'


export function* watchHome() {
    yield takeLatest($.GET_ROBOTS, home.getRobotsSaga)
}