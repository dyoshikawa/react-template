import * as React from 'react'

type Props = {
  counter: {
    count: number
  }
  dispatchIncrement: () => any
  dispatchDecrement: () => any
}

const Home: React.FC<Props> = props => (
  <div>
    <h1>Home</h1>
    <span>{props.counter.count}</span>
    <button onClick={() => props.dispatchIncrement()}>+</button>
    <button onClick={() => props.dispatchDecrement()}>-</button>
  </div>
)

export default Home
