export default {
    getAll: () => fetch(
        "http://localhost:8080/api/locations",
        { mode: 'cors' }
    ),
    findByName: (locationName) => fetch(
        "http://localhost:8080/api/locations/search?name=" + locationName,
        { mode: 'cors' }
    )
}