export default {
    getTransactionOrdersOfUser: (userId) => fetch(
        "http://localhost:8080/api/transactionOrder/all/" + userId,
        { mode: 'cors' }
    )
}