import '../styles/layout.scss'
import { Outlet } from 'react-router-dom'

import Header from './Header'
import BaseMenu from './BaseMenu'

const Layout = () => {
  return (
    <div className="layout">
      <div className="side">
        <BaseMenu />
      </div>
      <div className="main">
        <div>
          <Header />
        </div>
        <div className="container">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  )
}

export default Layout