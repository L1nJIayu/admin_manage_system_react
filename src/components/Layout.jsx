import '../styles/layout.scss'
import { Outlet } from 'react-router-dom'

import Header from './Header'
import BaseMenu from './BaseMenu'
import { useSelector } from 'react-redux'
import classNames from 'classnames'

const Layout = () => {
  const { collapsed } = useSelector(state => state.menu)

  return (
    <div className={classNames('layout', { 'side-collapsed': collapsed })}>
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