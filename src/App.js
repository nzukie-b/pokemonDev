import React from 'react';
import './App.css';
import SearchPage from "./components/SearchPage";
import 'bootstrap/dist/css/bootstrap.css'
import UserProfilePage from "./components/User/UserProfilePage";
import {createStore} from "redux";
import pokeReducer from "./reducers/PokeReducer";
import userReducer  from "./reducers/UserReducer"
import {Provider} from "react-redux";
import UserContainer from "./containers/UserContainer";

const store = createStore(userReducer)


function App() {
    return (
        <Provider store={store}>
            <UserContainer/>
        </Provider>
    );
}

export default App;
