import React from 'react'
import service from '../services/PokeAPIService'
import {createStore} from "redux"
import {Provider} from 'react-redux'
import pokeReducer from "../reducers/PokeReducer"
import PokeContainer from "../containers/PokeContainer"

const PokeAPIServie = service.getInstance();
const store = createStore(pokeReducer)



const SearchPage = () => {
    return (
        <Provider store={store}>
            <PokeContainer/>
        </Provider>
    )
}

export default SearchPage