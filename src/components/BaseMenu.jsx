import { Menu } from 'antd'
import '../styles/menu.scss'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import classNames from 'classnames'

const BaseMenu = () => {
  const {
    menuList,
    collapsed,
    selectKeys,
    openKeys
  } = useSelector(state => state.menu)
  const navigate = useNavigate()
  const onClick = ({ key }) => {
    localStorage.setItem('selectKeys', key)
    navigate(key)
  }
  const onOpenChange = (openKeys) => {
    localStorage.setItem('openKeys', JSON.stringify(openKeys))
  }

  return (
    <div className={classNames('menu', { 'menu-collapsed': collapsed })}>
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
        onClick={ onClick }
        onOpenChange={ onOpenChange } />
    </div>
  )
}

export default BaseMenu