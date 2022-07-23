/* eslint-disable */
import { useAuthState } from "react-firebase-hooks/auth";
import { Outlet, useNavigate } from "react-router-dom"


function Dashboard() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  })

  return (
    <>
      <Outlet />
    </>
  )
}

export default Dashboard
