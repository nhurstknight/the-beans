import axios from 'axios'
const baseUrl = '/api'

const withHeaders = () => {
  return {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }
}

// BEANS API FUNCTIONS 
export const getAllBeans = () => {
  return axios.get(`${baseUrl}/beans`)
}
export const getSingleBeans = beansId => {
  return axios.get(`${baseUrl}/beans/${beansId}`)
}
export const getRoast = (roastFilter) => {
  return axios.get(`${baseUrl}/beans?roast=${roastFilter}`)
}
export const addCommentToBean = (beansId, formData) => {
  return axios.post(`${baseUrl}/beans/${beansId}/comments`, formData, withHeaders())
}


// ROASTERS API FUNCTIONS
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

// AUTHENTICATION 
export const registerUser = formData => {
  return axios.post(`${baseUrl}/register`, formData)
}
export const loginUser = formData => {
  return axios.post(`${baseUrl}/login`, formData)
}
export const getSingleUser = ( userId ) => {
  return axios.get(`${baseUrl}/users/${userId}`)
}
// EDIT ACCOUNT DETAILS
export const editAccount = ( formData ) => {
  return axios.put(`${baseUrl}/profile/account`, formData, withHeaders())
}
// GET USERS ADDRESS INFORMATION
export const addressDetails = () => {
  return axios.get(`${baseUrl}/profile/checkout`, withHeaders())
}
// EDIT CHECKOUT DETAILS
export const editCheckout = ( formData ) => {
  return axios.put(`${baseUrl}/profile/checkout`, formData, withHeaders())
}
// GET FAVOURITE
export const getAllFavs = () => {
  return axios.get(`${baseUrl}/profile`, withHeaders())
}
// ADD FAVOURITE
export const addFav = ( product ) => {
  console.log(product)
  return axios.post(`${baseUrl}/profile`, { product }, withHeaders())
}
// DELETE FAVOURITE
export const removeFav = (product) => {
  return axios.put(`${baseUrl}/profile/${product}`, withHeaders())
}


// BASKET
export const getUserBasket = () => {
  return axios.get(`${baseUrl}/basket`, withHeaders())
}

export const addItem = product => {
  return axios.post(`${baseUrl}/basket`, { product }, withHeaders())
}

export const removeItem = _id => {
  return axios.put(`${baseUrl}/basket`, { _id }, withHeaders())
}

export const deleteBasket = () => {
  return axios.delete(`${baseUrl}/basket`, withHeaders())
}