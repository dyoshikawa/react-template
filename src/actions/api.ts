import console = require('console')

export const fetchApiRequested = () => {
  console.log('fetch_api_requested')
  return { type: 'FETCH_API_REQUESTED' }
}

export const fetchApiSucceeded = (text: string) => {
  console.log('fetchApiSucceeded')
  console.log(text)
  return { type: 'FETCH_API_SUCCEEDED', payload: { text: text } }
}
