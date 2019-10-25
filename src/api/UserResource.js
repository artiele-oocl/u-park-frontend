export default {
    checkCredential: (userInput) => fetch(
      "http://localhost:8080/api/users/login", {
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json'}),
        mode: 'cors',
        body: JSON.stringify(userInput)
    })
  }
  