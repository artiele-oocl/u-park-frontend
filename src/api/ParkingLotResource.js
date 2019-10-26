export default {
    getAll: () => fetch(
      "http://localhost:8080/api/parkinglots",
      {mode: 'cors'}
      )
}