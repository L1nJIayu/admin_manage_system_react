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
  {
    id: 2,
    username: 'user1',
    nickName: 'Bobby',
    email: 'bobby@163.com',
    status: 0,
    createTime: '2024-06-08 12:33:09'
  },
  {
    id: 3,
    username: 'user2',
    nickName: 'Sa',
    email: 'sa@163.com',
    status: 0,
    createTime: '2024-06-11 12:33:09'
  },
  {
    id: 4,
    username: 'user3',
    nickName: 'Ken',
    email: 'ken@163.com',
    status: 0,
    createTime: '2024-06-12 12:33:09'
  },
  {
    id: 5,
    username: 'user4',
    nickName: 'Mike',
    email: 'mike@163.com',
    status: 0,
    createTime: '2024-06-14 23:28:11'
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