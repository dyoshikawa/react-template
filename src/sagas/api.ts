import axios from 'axios'
import { fetchApiSucceeded } from '~/actions/api'
import { call, fork, takeLatest, put } from 'redux-saga/effects'
import console = require('console')

function fetchCityCodes() {
  const URL = `http://www.land.mlit.go.jp/webland/api/CitySearch?area`
  console.log('fetchCity')
  return axios.get(URL).then(response => {
    console.log(response)
    return response
  })
}

function* fetchPostsIfNeeded(action: any) {
  const { data } = yield call(fetchCityCodes)
  console.log(data.status)
  yield put(fetchApiSucceeded(data.status))
}

export default function* rootSaga() {
  yield takeLatest('FETCH_API_REQUESTED', fetchPostsIfNeeded)
}
