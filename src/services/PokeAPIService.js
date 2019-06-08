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
        fetch(serverAdress + `pokemon`,
            {
                method: 'Get',
                headers: {
                    'content-type': 'application/json'
                }
            }).then(response => response.json())
    }

    findPokemon = (pokemon) => {
        fetch(serverAdress + `pokemon/${pokemon}`,
            {
                method: 'Get',
                headers: {
                    'content-type': 'application/json'
                }
            }).then(response => response.json())

    }

}
