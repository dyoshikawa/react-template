import React from 'react'
import { connect } from 'react-redux'

import Home from '../components/Home'
import { increment } from '../actions/App'

function mapStateToProps(state: any) {
  return state
}

function mapDispatchToProps(dispatch: any) {
  return {
    handleClick: () => {
      dispatch(increment())
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
