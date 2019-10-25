export default {
    getAll: () => fetch(
      "http://localhost:8080/api/users",
      {mode: 'cors'}
      ),
    createUser: (newUser) => fetch(
      "http://localhost:8080/api/users", {
        mode: 'cors',
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(newUser),
      })  
  }
  