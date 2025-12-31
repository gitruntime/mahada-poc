import { useEffect } from "react"
import { useRouter } from "next/router"
import BlankNavbar from '@/Components/BlankNavbar'
import Done from '@/Components/Login/Done'

const LoginDone2 = () => {
  const router = useRouter()

  useEffect(() => {
    localStorage.setItem("logindone2", "true")
    const timer = setTimeout(() => {
      router.push("/dashboard")
    }, 2000) // 2 seconds

    return () => clearTimeout(timer)
  }, [])

  return (
    <div>
      <BlankNavbar/>
      <Done/>
    </div>
  )
}

export default LoginDone2
