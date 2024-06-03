import { useNavigate } from 'react-router-dom'
import '../styles/header.scss'

import { Dropdown, Avatar } from 'antd'
import { DownOutlined, UserOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../store/modules/menu'
import { useSelector } from 'react-redux'


const Header = () => {
  const dispatch = useDispatch()
  const { collapsed } = useSelector(state => state.menu)
  const [ userInfo, setUserInfo ] = useState({
    nickName: 'admin',
    avatarUrl: ''
  })

  const navigate = useNavigate()

  const menuToggle = () => {
    dispatch(toggleMenu())
  }

  const modifyPassword = () => {

  }
  const logout = () => {
    navigate('/')
  }
  const getUserInfo = () => {
    setUserInfo({
      nickName: 'Jeffrey Lam',
      // avatarUrl: '/logo.png'
    })
  }
  useEffect(() => getUserInfo(), [])

  const actionList = [
    { label: '修改密码', key: 'modifyPassword' },
    { label: '退出登录', key: 'logout' },
  ]
  const takeAction = ({ key }) => {
    switch(key) {
      case 'modifyPassword':
        modifyPassword()
        break
      case 'logout':
        logout()
        break
    }
  }

  return (
    <div className="header">
      <div className="left">
        <span className="menu_toggle_button" onClick={ menuToggle }>
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </span>
      </div>
      <div className="right">
        <Dropdown menu={{
          items: actionList,
          onClick: takeAction
        }}>
          <div className='userInfo'>
            <Avatar
              src={ userInfo.avatarUrl }
              className="avatar"
              icon={<UserOutlined />} />
            <div className='nickName'>
              { userInfo.nickName }
            </div>
            <DownOutlined />
          </div>
        </Dropdown>
      </div>
    </div>
  )
}

export default Header