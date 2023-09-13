import Navbar from "./component/Navbar"
import HomePage from "./pages/HomePage"
import { useRoutes } from "raviger"
import NotFound from "./pages/404"
import Footer from "./component/Footer/Footer"
import AboutPage from "./pages/AboutPage"
import RoomPage from "./pages/RoomPage"
import FacilitiesPages from "./pages/FacilitiesPages"
import ContactPage from "./pages/ContactPage"


//npm install raviger
const route = {
  '/'  : ()=> <HomePage />,
  '/aboutus'  : ()=> <AboutPage />,
  '/rooms' : ()=> <RoomPage />,
  '/facilities' : ()=> <FacilitiesPages />,
  '/contacts' : ()=> <ContactPage />,
  '*' : ()=> <NotFound />
}
function App() {
  const currentPage = useRoutes (route)
  return (
    <div>
      <Navbar />
      {currentPage}
      <Footer />
    </div>
  )
}

export default App