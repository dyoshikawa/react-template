import { combineReducers } from 'redux'
import counter from '~/reducers/counter'
import tasks from '~/reducers/tasks'
import api, { ApiState } from '~/reducers/api'

export type RootState = {
  counter: {
    count: number
  }
  tasks: {
    tasks: Array<string>
  }
  api: ApiState
}

const reducer = combineReducers({
  counter,
  tasks,
  api,
})

export default reducer
