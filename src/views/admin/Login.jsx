import { useNavigate } from "react-router-dom"
const Login = () => {
  const navigate = useNavigate()
  const login = () => {
    navigate('/home')
  }

  return (
    <>
      <button onClick={ login }>登录</button>
    </>
  )
}

export default Login