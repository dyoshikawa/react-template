import * as React from 'react'

type Props = {
  tasks: { tasks: string[] }
  dispatchAddTask: (task: string) => any
}

const Tasks: React.FC<Props> = props => (
  <div>
    <h1>Tasks</h1>
    <button onClick={() => props.dispatchAddTask('task')}>タスク追加</button>
    {props.tasks.tasks.map(task => (
      <div key={task}>{task}</div>
    ))}
  </div>
)

export default Tasks
