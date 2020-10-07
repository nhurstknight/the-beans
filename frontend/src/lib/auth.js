//USER ID
export const setUserId = userID => {
  localStorage.setItem('userID', userID)
}
export const logoutID = () => {
  localStorage.removeItem('userID')
}
export const getID = () => {
  return localStorage.getItem('userID')
}


//TOKEN
export const setToken = token => {
  localStorage.setItem('token', token)
}
export const logoutToken = () => {
  localStorage.removeItem('token')
}

export const getToken = () => {
  return localStorage.getItem('token')
}
export const getPayload = () => {
  const token = getToken()
  if (!token) return false
  const parts = token.split('.')
  if (parts.length < 3) return false
  return JSON.parse(atob(parts[1]))
}
export const isAuthenticated = () => {
  const payload = getPayload()
  
  if (!payload) return false
  const now = Math.floor(Date.now() / 1000)
  return now < payload.exp
}