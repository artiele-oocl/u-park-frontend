export default {
    getUserTransation: (userId) => fetch(
        "http://localhost:8080/api/transactionOrder/" + userId,
        { mode: 'cors' }
    ),
    patchRating: (transaction) => fetch(
        "http://localhost:8080/api/transactionOrder",
        {
            method: 'PATCH',
            headers: new Headers({'Content-Type': 'application/json'}),
            mode: 'cors',
            body: JSON.stringify(transaction)
        }
    ),
    performBackendCheckout: (transactionId) => fetch(
        "http://localhost:8080/api/transactionOrder/performCheckOut/" + transactionId,
        {
            method: 'PATCH',
            headers: new Headers({'Content-Type': 'application/json'}),
            mode: 'cors'
        }
    )
}