import axios from 'axios'

const baseUrl = '/api'

export const getAllBeans = () => {
  return axios.get(`${baseUrl}/beans`)
}
export const getAllRoasters = () => {
  return axios.get(`${baseUrl}/roasters`)
}

export const getSingleBeans = beansId => {
  return axios.get(`${baseUrl}/beans/${beansId}`)
}