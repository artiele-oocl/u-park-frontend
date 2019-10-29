export default {
    getTransactionOrdersOfUser: (userId) => fetch(
        "http://localhost:8080/api/transactionOrder/" + userId,
        { mode: 'cors' }
    )
}