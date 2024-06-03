import Login from "../views/admin/Login"
import Layout from "../components/Layout"
import { lazy, Suspense } from "react"

import { Spin } from "antd"

const Homepage = lazy(() => import('../views/admin/Homepage'))
const UserTable = lazy(() => import('../views/user/UserTable'))
const RoleTable = lazy(() => import('../views/role/RoleTable'))

const routes = [
  {
    index: true,
    element: <Login></Login> 
  },
  {
    path: '/m',
    element: <Layout />,
    children: [
      {
        index: true,
        path: 'homepage',
        element: (
          <Suspense fallback={<Spin size="large" />}>
            <Homepage />
          </Suspense>
        )
      },
      {
        path: 'user',
        element: (
          <Suspense fallback={<Spin size="large" />}>
            <UserTable />
          </Suspense>
        )
      },
      {
        path: 'role',
        element: (
          <Suspense fallback={<Spin size="large" />}>
            <RoleTable />
          </Suspense>
        )
      }
    ]
  }
]

export default routes