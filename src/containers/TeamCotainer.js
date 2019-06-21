import {connect} from 'react-redux'
import service from '../services/TeamService'
import pService from '../services/PokeAPIService'
import uservice from '../services/UserService'

import TeamPage from "../components/Training/TeamPage";


const teamService = service.getInstance();
const pokeService = pService.getInstance();
const userService = uservice.getInstance();


const stateToPropertyMapper = state => ({
    team: state.teamReducer.team,
    apiTeam: state.teamReducer.apiTeam,
    user: state.userReducer.user,
    loggedIn: state.userReducer.loggedIn,
})

const propertyToDispatchMapper = dispatch => ({
    findTeam: (userId) => {
        teamService.findTeam(userId)
            .then(team =>
                dispatch({
                    type: "FIND_TEAM",
                    team: team
                })
            )
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
        teamService.updatePokemonOnTeam(userId, pokemon)
            .then(team => dispatch({
                type: "UPDATE_POKEMON_ON_TEAM",
                team: team
            }))
    },
    updateApiTeam: (team, userId) => {
        teamService.findTeam(userId)
            .then(team => dispatch({
                type: "CLEAR_API_TEAM",
                team: team
            })).then(
            team.map(poke =>
                pokeService.findPokemon(poke.pokeId.id)
                    .then(poke => dispatch({
                        type: "ADD_POKEMON_ON_API_TEAM",
                        poke: poke
                    }))))
    }

})

const TeamContainer = connect(
    stateToPropertyMapper,
    propertyToDispatchMapper
)(TeamPage)

export default TeamContainer

