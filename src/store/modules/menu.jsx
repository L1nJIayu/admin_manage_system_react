import { createSlice } from '@reduxjs/toolkit'
import {
  HomeOutlined,
  SettingOutlined
} from '@ant-design/icons'

const defaultSelectedKeys = [localStorage.getItem('selectKeys') || '/m/homepage']
const defaultOpenKeys = JSON.parse(localStorage.getItem('openKeys') || '[]')

const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    menuList: [
      { label: '首页', key: '/m/homepage', icon: <HomeOutlined /> },
      {
        label: '系统管理',
        icon: <SettingOutlined />,
        key: 'systemManage',
        children: [
          { label: '用户管理', key: '/m/user' },
          { label: '角色管理', key: '/m/role' }
        ],
      },
      {
        label: '系统管理2',
        icon: <SettingOutlined />,
        key: 'systemManage222',
        children: [
          { label: '用户管理', key: '/m/user222' },
        ],
      },
    ],
    collapsed: false,
    selectKeys: defaultSelectedKeys,
    openKeys: defaultOpenKeys
  },
  reducers: {
    toggleMenu: (state) => {
      state.collapsed = !state.collapsed
    }
  }
})

export const {
  toggleMenu
} = menuSlice.actions

export default menuSlice.reducer