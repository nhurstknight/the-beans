import axios from 'axios'

const baseUrl = '/api'

export const getAllBeans = () => {
  return axios.get(`${baseUrl}/beans`)
}
export const getAllRoasters = () => {
  return axios.get(`${baseUrl}/roasters`)
}

export const getSingleXXX = xxx => {
  return axios.get(`${baseUrl}/xxx/${xxx}`)
}