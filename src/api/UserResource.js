export default {
    getAll: () => fetch(
        "http://10.222.112.169:8080/api/users",
        {mode: 'cors'}
    ),
    createUser: (newUser) => fetch(
        "http://10.222.112.169:8080/api/users", {
            mode: 'cors',
            method: 'POST',
            headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify(newUser),
        }),
    checkCredential: (userInput) => fetch(
        "http://10.222.112.169:8080/api/users/login", {
            method: 'POST',
            headers: new Headers({'Content-Type': 'application/json'}),
            mode: 'cors',
            body: JSON.stringify(userInput)
        })
}