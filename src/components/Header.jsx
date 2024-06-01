import { useNavigate } from 'react-router-dom'
import '../styles/header.scss'

import { Dropdown, Avatar } from 'antd'
import { DownOutlined, UserOutlined } from '@ant-design/icons'
import { useEffect } from 'react'
import { useState } from 'react'


const Header = () => {
  const [ userInfo, setUserInfo ] = useState({
    nickName: 'admin',
    avatarUrl: ''
  })

  const navigate = useNavigate()

  const menuToggle = () => {
    console.log('menuToggle')
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
        <i className='iconfont icon-menu-toggle' onClick={ menuToggle } ></i>
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