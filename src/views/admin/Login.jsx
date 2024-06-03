import { useNavigate } from "react-router-dom"
const Login = () => {
  const navigate = useNavigate()
  const login = () => {
    navigate('/m/homepage')
  }

  return (
    <>
      <button onClick={ login }>登录</button>
    </>
  )
}

export default Login