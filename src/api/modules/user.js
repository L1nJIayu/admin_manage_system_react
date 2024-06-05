import axios from "../axios"

const tableData = [
  {
    id: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    id: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
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