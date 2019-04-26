import { Action } from 'redux'

type ApiActionType = 'FETCH_API'

interface ApiAction extends Action {
  type: ApiActionType
  payload: {
    text: string
  }
}

export type ApiState = {
  response: {
    text: string
  }
}

const initialState: ApiState = {
  response: {
    text: '',
  },
}

export default function counter(state = initialState, action: ApiAction) {
  switch (action.type) {
    case 'FETCH_API':
      return { response: { text: action.payload.text } }
    default:
      return state
  }
}
