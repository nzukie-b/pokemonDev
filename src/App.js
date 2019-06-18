import React from 'react';
import './App.css';
import SearchPage from "./components/SearchPage";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import UserProfilePage from "./components/User/UserProfilePage";
import { BrowserRouter as Router} from 'react-router-dom'
import { createStore, combineReducers } from "redux";
import pokeReducer from "./reducers/PokeReducer";
import userReducer from "./reducers/UserReducer"
import { Provider } from "react-redux";
import UserContainer from "./containers/UserContainer";
import Homepage from "./components/Homepage"
import PokeContainer from './containers/PokeContainer';

let rootReducer = combineReducers({ userReducer, pokeReducer })
const store = createStore(rootReducer)


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Homepage />
        <UserContainer />
        <PokeContainer/>
      </Router>
    </Provider>
  );
}

export default App;
