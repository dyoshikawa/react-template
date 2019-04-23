export const addTask = (task: string) => {
  return { type: 'ADD_TASK', task: task }
}
