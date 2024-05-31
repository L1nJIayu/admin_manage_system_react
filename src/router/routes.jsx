import Login from "../views/admin/Login"
import Layout from "../components/Layout"
import UserTable from "../views/user/UserTable"

const routes = [
  {
    index: true,
    element: <Login></Login> 
  },
  {
    path: '/home',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <UserTable />
      }
    ]
  }
]

export default routes