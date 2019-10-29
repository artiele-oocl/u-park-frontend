export default {
    getUserTransation: () => fetch(
        "http://localhost:8080/api/transactionOrder",
        { mode: 'cors' }
    ),
    getAllUserTransation: (userId) => fetch(
        "http://localhost:8080/api/transactionOrder/transaction" + userId,
        { mode: 'cors' }
    )
}