export default {
    findByName: (locationName) => fetch(
        "http://localhost:8080/api/locations?name=" + locationName,
        { mode: 'cors' }
    )
}