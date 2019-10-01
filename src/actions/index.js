export const usersFetched = (users) => {
  return ({
  type: 'FETCH_USERS_SUCCESS',
  users
})};

export const userLogin = (user) => {
  return ({
  type: 'USER_LOGIN',
  user
})};

export const userLogout = (user) => {
  return ({
  type: 'USER_LOGOUT',
  user
})};