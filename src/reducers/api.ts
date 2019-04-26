import { FETCH_API_SUCCEEDED } from '~/constants/actionTypes'

export const fetchApiSucceededType = (text: string) => ({
  type: FETCH_API_SUCCEEDED as typeof FETCH_API_SUCCEEDED,
  payload: {
    text: text,
  },
})

type ApiAction = ReturnType<typeof fetchApiSucceededType>

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
    case FETCH_API_SUCCEEDED:
      return { response: { text: action.payload.text } }
    default:
      return state
  }
}
