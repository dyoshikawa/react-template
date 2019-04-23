import { connect } from 'react-redux'

import About from '../components/About'
import { addTask } from '../actions/tasks'
import { Dispatch } from 'redux'

function mapStateToProps(state: any) {
  return state
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    dispatchAddTask: (task: string) => {
      dispatch(addTask(task))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About)
