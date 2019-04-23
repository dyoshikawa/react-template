import * as React from 'react'

export default class Home extends React.Component<any, any> {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <span>{this.props.counter.count}</span>
        <button onClick={() => this.props.handleClick()}>増加</button>
      </div>
    )
  }
}
