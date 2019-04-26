export const fetchApiRequested = () => {
  console.log('fetch_api_requested')
  return { type: 'FETCH_API_REQUESTED' }
}

export const fetchApiSucceeded = (text: string) => {
  return { type: 'FETCH_API_SUCCEEDED', payload: { text: text } }
}
