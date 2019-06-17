import React from 'react';
import './App.css';
import SearchPage from "./components/SearchPage";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import UserProfilePage from "./components/User/UserProfilePage";
import {createStore} from "redux";
import pokeReducer from "./reducers/PokeReducer";
import userReducer  from "./reducers/UserReducer"
import {Provider} from "react-redux";
import UserContainer from "./containers/UserContainer";
import Homepage from "./components/Homepage"

const store = createStore(userReducer)


function App() {
    return (

        <Provider store={store}>
            <Homepage/>
            <UserContainer/>
        </Provider>
    );
}

export default App;
