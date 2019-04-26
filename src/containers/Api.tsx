import { connect } from 'react-redux'

import Counter from '~/components/Api'
import { fetchApi } from '~/actions/api'
import { Dispatch } from 'redux'

import { RootState } from '~/reducer'

function mapStateToProps(state: RootState) {
  return state.api
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    dispatchFetchApi: () => {
      dispatch(fetchApi())
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
