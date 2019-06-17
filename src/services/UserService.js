const serverAdress = "https://localhost:8080"

export default class UserService {
    static myInstance = null;

    static getInstance() {
        if (UserService.myInstance == null) {
            UserService.myInstance =
                new UserService();
        }
        return this.myInstance;
    }

    findAllUsers = () => {
        return fetch(serverAdress + `/api/users`,
            {
                method: 'Get',
            }).then(response => response.json())
    }

    getUser = (userId) => {
        return fetch(serverAdress + `api/users/${userId}`,
            {
                method: 'Get',
            })
            .then(response => response.json())
    }

    getUserByUserNameAndPassword = (userName, password) =>
        fetch(
            serverAdress +
            `/api/users/username/${userName}/password/${password}`,
            {
                method: 'Get',
            })
            .then(response => response.json())
    addUser = (user) =>
        fetch(serverAdress + '/api/users',
            {
                method: 'Post',
                body: JSON.stringify(user),
                headers: {
                    'content-type': 'application/json'
                }
            }).then(response => response.json())

    removeUser = (userId) =>
        fetch(serverAdress + '/api/users',
            {
                method: 'DELETE'
            }).then(response => response.json())

    updateUser = (user) =>
        fetch(serverAdress+ `/api/users/${user.id}`,
            {method: 'PUT',
                body: JSON.stringify(user),
                headers: {
                    'content-type': 'application/json'
                }
            })


}
