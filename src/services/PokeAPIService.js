import {serverAdressPoke} from "../Constants/Server";

export default class PokeAPIService {
    static myInstance = null;

    static getInstance() {
        if (PokeAPIService.myInstance == null) {
            PokeAPIService.myInstance =
                new PokeAPIService();
        }
        return this.myInstance;
    }

    findAllPokemon = () => {
        return fetch(serverAdressPoke + `pokemon?limit=1000`,
            {
                method: 'Get',
                headers: {
                    'content-type': 'application/json'
                }
            }).then(response => response.json())
    }

    findPokemon = (pokemon) => {
        if (pokemon !== "") {
            return fetch(serverAdressPoke + `pokemon/${pokemon}`,
                {
                    method: 'Get',
                    headers: {
                        'content-type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    }
                })
                .then(response => response.json())
        }
    }

}
