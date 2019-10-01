
export const pageStore = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case 'FETCH_USERS_SUCCESS':
      return {
        ...state,
        users: [...action.users]
      }
    case 'USER_LOGIN':
      return {
        ...state,
        user: action.user
      }
    case 'USER_LOGOUT':
      return {
        ...state,
        user: null
      }
    default:
      return state
  }
}
