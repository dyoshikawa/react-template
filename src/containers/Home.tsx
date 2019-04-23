import { connect } from 'react-redux'

import Home from '../components/Home'
import { increment, decrement } from '../actions/counter'
import { Dispatch } from 'redux'

function mapStateToProps(state: any) {
  return state
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    dispatchIncrement: () => {
      dispatch(increment())
    },
    dispatchDecrement: () => {
      dispatch(decrement())
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
