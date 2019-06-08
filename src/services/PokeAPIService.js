const serverAdress = "https://pokeapi.co/api/v2/"

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
        return fetch(serverAdress + `pokemon?limit=1000`,
            {
                method: 'Get',
                headers: {
                    'content-type': 'application/json'
                }
            }).then(response => response.json())
    }

    findPokemon = (pokemon) => {
        if (pokemon !== "") {
            return fetch(serverAdress + `pokemon/${pokemon}`,
                {
                    method: 'Get',
                    headers: {
                        'content-type': 'application/json'
                    }
                })
                .then(response => response.json())
        }
    }

}
