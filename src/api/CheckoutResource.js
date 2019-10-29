export default {
    getUserTransation: (userId) => fetch(
        "http://localhost:8080/api/transactionOrder/" + userId,
        { mode: 'cors' }
    ),
    getAllUserTransation: (userId) => fetch(
        "http://localhost:8080/api/transactionOrder/transaction/" + userId,
        { mode: 'cors' }
    )
}