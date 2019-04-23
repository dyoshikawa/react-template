import * as React from 'react'

type Props = {
  counter: {
    count: number
  }
  dispatchIncrement: () => any
  dispatchDecrement: () => any
}

export default class Home extends React.Component<Props, any> {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <span>{this.props.counter.count}</span>
        <button onClick={() => this.props.dispatchIncrement()}>+</button>
        <button onClick={() => this.props.dispatchDecrement()}>-</button>
      </div>
    )
  }
}
