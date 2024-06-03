import { createSlice } from '@reduxjs/toolkit'

const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    menuList: [
      { label: '首页', key: '/m/homepage' },
      {
        label: '系统管理',
        key: 'systemManage',
        children: [
          { label: '用户管理', key: '/m/user' },
          { label: '角色管理', key: '/m/role' }
        ],
      },
    ],
    collapsed: false,
    selectKeys: ['/m/homepage'],
    openKeys: ['systemManage']
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