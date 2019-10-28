export default {
    getAll: () => fetch(
        "http://http://localhost:8080/api/parkinglots",
        { mode: 'cors' }
    ),
    getNearestParkingLots: (latitude, longitude) => fetch(
        "http://localhost:8080/api/parkinglots/nearest?latitude=" + latitude + "&longitude=" + longitude,
        { mode: 'cors' }
    )
}