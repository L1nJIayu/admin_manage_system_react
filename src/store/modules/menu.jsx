import { createSlice } from '@reduxjs/toolkit'

const defaultSelectedKeys = [localStorage.getItem('selectKeys') || '/m/homepage']
const defaultOpenKeys = JSON.parse(localStorage.getItem('openKeys') || '[]')


const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    menuList: [
      { label: '首页', key: '/m/homepage', icon: 'HomeOutlined' },
      {
        label: '系统管理',
        icon: 'SettingOutlined',
        key: 'systemManage',
        children: [
          { label: '用户管理', key: '/m/user' },
          { label: '角色管理', key: '/m/role' }
        ],
      }
    ],
    collapsed: false,
    selectKeys: defaultSelectedKeys,
    openKeys: defaultOpenKeys
  },
  reducers: {
    toggleMenu: (state) => {
      state.collapsed = !state.collapsed
    },
    setSelectKeys: (state, action) => {
      state.selectKeys = [action.payload]
    }
  }
})

export const {
  toggleMenu,
  setSelectKeys
} = menuSlice.actions

export default menuSlice.reducer