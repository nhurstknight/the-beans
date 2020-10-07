import axios from 'axios'
const baseUrl = '/api'

const withHeaders = () => {
  return {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }
}


//// BEANS API FUNCTIONS ////
export const getAllBeans = () => {
  return axios.get(`${baseUrl}/beans`)
}
export const getSingleBeans = beansId => {
  return axios.get(`${baseUrl}/beans/${beansId}`)
}
export const getRoast = (roastFilter) => {
  return axios.get(`${baseUrl}/beans?roast=${roastFilter}`)
}

//// ROASTERS API FUNCTIONS ////
export const getAllRoasters = () => {
  return axios.get(`${baseUrl}/roasters`)
}
export const getSingleRoaster = roasterId => {
  return axios.get(`${baseUrl}/roasters/${roasterId}`)
}
// GET ROASTER PRODUCTS //
export const getRoasterProducts = ( roasterName ) => {
  return axios.get(`${baseUrl}/beans?roaster=${roasterName}`)
}

//// AUTHENTICATION // USERS ////
export const registerUser = formData => {
  return axios.post(`${baseUrl}/register`, formData)
}
export const loginUser = formData => {
  console.log(formData)
  return axios.post(`${baseUrl}/login`, formData)
}
export const getSingleUser = ( userId ) => {
  return axios.get(`${baseUrl}/users/${userId}`)
}
// EDIT ACCOUNT DETAILS
export const editAccount = ( userId, formData) => {
  console.log(formData)
  return axios.put(`${baseUrl}/profile/account/${userId}`, formData, withHeaders())
}
// EDIT CHECKOUT DETAILS
export const editCheckout = ( userId ) => {
  return axios.put(`${baseUrl}/profile/checkout/${userId}`)
}

// BASKET
export const getUserBasket = () => {
  return axios.get(`${baseUrl}/basket`, withHeaders())
}

export const addItemToBasket = () => {
  return axios.post(`${baseUrl}/basket`)
}

export const removeItemFromBasket = basketItemId => {
  return axios.put(`${baseUrl}/basket/${basketItemId}`)
}

export const clearBasket = () => {
  return axios.delete(`${baseUrl}/basket`)
}