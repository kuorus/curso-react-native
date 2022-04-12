import { connect } from 'react-redux'
import CoffeListView from './View'

const mapStateToProps = state => ({
  cafes: state.cafes,
})

const CoffeList = connect(mapStateToProps, null)(CoffeListView)
export default CoffeList
