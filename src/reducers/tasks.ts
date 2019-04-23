import { Action } from 'redux'

type TasksActionType = 'ADD_TASK'

interface TasksAction extends Action {
  type: TasksActionType
  payload: {
    task: string
  }
}

const initialState: { tasks: string[] } = {
  tasks: [],
}

export default function tasks(state = initialState, action: TasksAction) {
  switch (action.type) {
    case 'ADD_TASK':
      console.log(action.payload.task)
      return { tasks: state.tasks.concat([action.payload.task]) }
    default:
      return state
  }
}
