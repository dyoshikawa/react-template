import { connect } from 'react-redux'

import Counter from '~/components/Api'
import { fetchApiRequested } from '~/actions/api'
import { Dispatch } from 'redux'

import { RootState } from '~/reducer'

function mapStateToProps(state: RootState) {
  return state.api
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    dispatchFetchApiRequested: () => {
      dispatch(fetchApiRequested())
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
