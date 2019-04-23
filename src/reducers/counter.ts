const initialState = {
  count: 1,
}

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 }
    default:
      return state
  }
}
