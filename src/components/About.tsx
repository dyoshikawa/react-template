import * as React from 'react'

type Props = {
  tasks: { tasks: string[] }
  dispatchAddTask: (task: string) => any
}

export default class Tasks extends React.Component<Props, {}> {
  render() {
    return (
      <div>
        <h1>Tasks</h1>
        <button onClick={() => this.props.dispatchAddTask('task')}>
          タスク追加
        </button>
        {this.props.tasks.tasks.map(task => (
          <div key={task}>{task}</div>
        ))}
      </div>
    )
  }
}
