export default {
    getAll: () => fetch(
        "http://localhost:8080/api/parkinglots",
        { mode: 'cors' }
    ),
    getNearestParkingLots: (latitude, longitude) => fetch(
        "http://localhost:8080/api/parkinglots/nearest?latitude=" + latitude + "&longitude=" + longitude,
        { mode: 'cors' }
    ),
    setSelectedParkingLot: (transactions) => fetch(
        "http://localhost:8080/api/transactionOrder",{
            method: 'POST',
            headers: new Headers({'Content-Type': 'application/json'}),
            mode: 'cors',
            body: JSON.stringify(transactions)}
    )
}