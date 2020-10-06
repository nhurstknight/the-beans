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

//// ROASTERS API FUNCTIONS ////
export const getAllRoasters = () => {
  return axios.get(`${baseUrl}/roasters`)
}
export const getSingleRoaster = roasterId => {
  return axios.get(`${baseUrl}/roasters/${roasterId}`)
}
// GET ROASTER PRODUCTS //
export const getRoasterProducts = () => {
  return axios.get(`${baseUrl}/beans`)
}

//// AUTHENTICATION ////
export const registerUser = formData => {
  return axios.post(`${baseUrl}/register`, formData)
}
export const loginUser = formData => {
  return axios.post(`${baseUrl}/login`, formData)
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