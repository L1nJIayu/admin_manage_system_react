import { Menu } from 'antd'
import '../styles/menu.scss'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const BaseMenu = () => {
  const {
    menuList,
    collapsed,
    selectKeys,
    openKeys
  } = useSelector(state => state.menu)
  const navigate = useNavigate()
  const onClick = ({ key }) => {
    navigate(key)
  }

  return (
    <div className="menu">
      <div className="top">
        <img className="logo" src="/logo.png" alt="logo" />
        <div className="sysName">后台管理系统</div>
      </div>
      <Menu
        mode="inline"
        items={ menuList }
        inlineCollapsed={ collapsed }
        defaultSelectedKeys={ selectKeys }
        defaultOpenKeys={ openKeys }
        onClick={ onClick } />
    </div>
  )
}

export default BaseMenu