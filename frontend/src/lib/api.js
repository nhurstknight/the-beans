import axios from 'axios'
const baseUrl = '/api'


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

//// AUTHENTICATION ////
export const registerUser = formData => {
  return axios.post(`${baseUrl}/register`, formData)
}
export const loginUser = formData => {
  return axios.post(`${baseUrl}/login`, formData)
}