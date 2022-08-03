import '../styles/globals.css'
import Navbar from '../components/Navbar'
import { useUserData } from '../libs/hooks'
import { UserContext } from '../libs/context'

function MyApp({ Component, pageProps }) {
  const userData = useUserData()
  return (
    <UserContext.Provider value={userData}>
    <Navbar />
    <Component {...pageProps} />
    </UserContext.Provider>
  )
}

export default MyApp
