
import './App.css'
import { MenuProvider } from './component/contexapi'
import Header from './component/Header'
import Home from './component/Home'
import About from './component/About'
import Projects from './component/Projects'
import Contact from './component/Contact'
import Footer from './component/Footer'
function App() {


  return (
    <>
   <MenuProvider>
    <Header/>
    <Home/>
    <About/>
    <Projects/>
    <Contact/>
    <Footer/>
   </MenuProvider>
   
    </>
  )
}

export default App
