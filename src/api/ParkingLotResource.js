export default {
    getAll: () => fetch(
        "http://10.222.112.169:8080/api/parkinglots",
        { mode: 'cors' }
    ),
    getNearestParkingLots: (latitude, longitude) => fetch(
        "http://10.222.112.169:8080/api/parkinglots/nearest?latitude=" + latitude + "&longitude=" + longitude,
        { mode: 'cors' }
    )
}