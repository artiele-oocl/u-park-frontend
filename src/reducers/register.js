const initialState = {
    users: []
};
    
export default (state = initialState, { type, payload }) => {
      switch (type) {
        case "REFRESH":
          return {
            ...state,
            users: payload
          };
        case "ADD":
          return {
            ...state,
            users: [...state.users, payload]
          }
        default:
          return state;
      }
}
    