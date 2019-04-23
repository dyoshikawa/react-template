export const addTask = (task: string) => {
  return { type: 'ADD_TASK', payload: { task: task } }
}
