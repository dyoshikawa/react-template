import * as React from 'react'
import console = require('console')

type Props = {
  response: {
    text: string
  }
  dispatchFetchApi: () => void
}

const Counter: React.FC<Props> = props => (
  <div>
    <h1>API</h1>
    <button onClick={() => props.dispatchFetchApi()}>Fetch</button>
    <div>{props.response.text}</div>
  </div>
)

export default Counter
