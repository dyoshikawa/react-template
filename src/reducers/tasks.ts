import { Action } from 'redux'

type TasksActionType = 'ADD_TASK'
type TasksAction = Action<TasksActionType>

const initialState = {
  tasks: [],
}

export default function tasks(state = initialState, action: TasksAction) {
  switch (action.type) {
    case 'ADD_TASK':
      const tasks = state.tasks.push(action.task)
      return { tasks: tasks }
    default:
      return state
  }
}
