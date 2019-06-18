import {connect} from 'react-redux'
import Homepage from "../components/Homepage";

const stateToPropertyMapper = state => ({
    currentlyLoggedInUser: state.loggedInUserReducer.currentlyLoggedInUser
})

const propertyToDispatchMapper = dispatch => ({


})

const LoggedInUserContainer = connect(
    stateToPropertyMapper,
    propertyToDispatchMapper
)(Homepage)

export default LoggedInUserContainer
