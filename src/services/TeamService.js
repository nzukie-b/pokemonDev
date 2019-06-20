const serverAdress = "http://localhost:8080"

export default class TeamService {
    static myInstance = null;

    static getInstance() {
        if (TeamService.myInstance == null) {
            TeamService.myInstance =
                new TeamService();
        }
        return this.myInstance;
    }

    getTeam = (userId) =>
        fetch(serverAdress + `/api/users/${userId}/team`,
            {
                method: 'Get',
                headers: {
                    'content-type': 'application/json'
                }
            })
            .then(response => response.json())

    addPokemonToTeam = (userId, pokeId) =>
        fetch(serverAdress + `/api/users/${userId}/team/${pokeId}`,
            {
                method: 'Post',
                headers: {
                    'content-type': 'application/json'
                }
            })
            .then(response => response.json())
    removePokemonFromTeam = (userId, pokeId) =>
        fetch(serverAdress + `/api/users/${userId}/team/${pokeId}`,
            {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                }
            })
            .then(response => response.json())

    getPokemonOnTeam = (userId, pokeId) =>
        fetch(serverAdress + `/api/users/${userId}/team/${pokeId}`,
            {
                method: 'Get',
                headers: {
                    'content-type': 'application/json'
                }
            })
            .then(response => response.json())

    updatePokemonOnTeam = (userId, pokemon) =>
        fetch(serverAdress + `/api/users/${userId}/team/${pokemon.id}`,
            {
                method: 'Put',
                body: JSON.stringify(pokemon),
                headers: {
                    'content-type': 'application/json'
                }
            })
            .then(response => response.json())
}
