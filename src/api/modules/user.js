import axios from "../axios"

export function getUserTableDataApi(params) {
  return axios.get('/', { params })
}
export function getUserDataApi(id) {
  return axios.get(`/${ id }`)
}
export function addUserApi(params) {
  return axios.put('/', params)
}
export function modifyUserApi(params) {
  return axios.post('/', params)
}
export function removeUserApi(id) {
  return axios.delete(`/${ id }`)
}