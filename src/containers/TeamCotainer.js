import {connect} from 'react-redux'
import service from '../services/TeamService'
import TeamPage from "../components/Training/TeamPage";


const teamService = service.getInstance();

const stateToPropertyMapper = state => ({
    team: state.teamReducer.team,
    user: state.userReducer.user,
    loggedIn: state.userReducer.loggedIn,
})

const propertyToDispatchMapper = dispatch => ({
    findTeam: (userId) => {
        teamService.findTeam(userId)
            .then(team => dispatch({
                type: "FIND_TEAM",
                team: team
            }))
    },
    addPokemonToTeam: (userId, pokemonId) => {
        teamService.addPokemonToTeam(userId, pokemonId)
            .then(team => dispatch({
                type: "ADD_POKEMON_TO_TEAM",
                team: team
            }))
    },
    removePokemonFromTeam: (userId, pokemonId) => {
        teamService.removePokemonFromTeam(userId, pokemonId)
            .then(team => dispatch({
                type: "REMOVE_POKEMON_FROM_TEAM",
                team: team
            }))
    },
    updatePokemonOnTeam: (userId, pokemon) => {
        teamService.updatePokemonOnTeam(userId,pokemon)
    }

})

const TeamContainer = connect(
    stateToPropertyMapper,
    propertyToDispatchMapper
)(TeamPage)

export default TeamContainer

