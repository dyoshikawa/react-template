import { combineReducers } from 'redux'
import counter from './reducers/counter'
import tasks from './reducers/tasks'

const reducer = combineReducers({
  counter,
  tasks,
})

export default reducer
