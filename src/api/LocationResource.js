export default {
    getAll: () => fetch(
        "http://10.222.112.169:8080/api/locations",
        { mode: 'cors' }
    ),
    findByName: (locationName) => fetch(
        "http://10.222.112.169:8080/api/locations/search?name=" + locationName,
        { mode: 'cors' }
    )
}