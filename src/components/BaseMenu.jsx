import { Menu } from 'antd'
import { HomeOutlined, SettingOutlined } from '@ant-design/icons'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'
import classNames from 'classnames'
import { setSelectKeys } from '../store/modules/menu'
import '../styles/menu.scss'
import { useEffect } from 'react'

const iconMap = {
  'HomeOutlined': <HomeOutlined />,
  'SettingOutlined': <SettingOutlined />
}

const BaseMenu = () => {
  const {
    menuList,
    collapsed,
    selectKeys,
    openKeys
  } = useSelector(state => state.menu)
  const navigate = useNavigate()
  
  const dispatch = useDispatch()
  const location = useLocation()
  useEffect(() => {
    dispatch(setSelectKeys(location.pathname))
  }, [ dispatch, location ])

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
        items={ menuList.map(item => ({ ...item, icon: iconMap[item.icon] })) }
        inlineCollapsed={ collapsed }
        selectedKeys={ selectKeys }
        defaultOpenKeys={ openKeys }
        onClick={ onClick }
        onOpenChange={ onOpenChange } />
    </div>
  )
}

export default BaseMenu