import { connect } from 'react-redux'
import CoffeeFormView from './View'

const mapStateToProps = state => ({
  recipesNum: state.cafes.length,
})

const mapDispatchToProps = (dispatch, _ownProps) => ({
  addNewCoffee: coffee => {
    dispatch({
      type: 'ADD_CAFE',
      recipe: coffee,
    })
  },
})

const CoffeeForm = connect(mapStateToProps, mapDispatchToProps)(CoffeeFormView)
export default CoffeeForm
