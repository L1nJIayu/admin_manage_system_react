import { Menu } from 'antd'
import '../styles/menu.scss'

const BaseMenu = () => {
  const items = [
    { label: '菜单项一', key: 'item-1' }, // 菜单项务必填写 key
    { label: '菜单项二', key: 'item-2' },
    {
      label: '子菜单',
      key: 'submenu',
      children: [{ label: '子菜单项', key: 'submenu-item-1' }],
    },
  ];

  return (
    <div className="menu">
      <div className="top">
        <img className="logo" src="/logo.png" alt="logo" />
        <div className="sysName">后台管理系统</div>
      </div>
      <Menu items={items} />
    </div>
  )
}

export default BaseMenu