import axios from "../axios"

const tableData = [
  {
    id: 1,
    username: 'admin',
    nickName: 'Jeffrey',
    email: 'linjiayu2012@163.com',
    status: 1,
    createTime: '2024-06-07 17:38:11'
  },
]

export function getUserTableDataApi(params) {
  // return axios.get('/', { params })
  console.log('params', params)
  return Promise.resolve({
    data: {
      list: tableData,
      total: tableData.length
    }
  })
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