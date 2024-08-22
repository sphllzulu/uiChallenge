
import './App.css'
import BodyLeft from './BodyLeft'
import BodyRight from './BodyRight'
import Footer from './Footer'
import Footerright from './Footerright'
import Navbar from './Navbar'
import NavbarRight from './NavbarRight'

function App() {
  

  return (
    <div className='container'>
      <div className="left">
        <Navbar/>
        <BodyLeft/>
        <Footer/>
      </div>
      <div className="right">
      <NavbarRight/>
      <BodyRight/>
      <Footerright/>
      </div>
      
      
    </div>
  )
}

export default App
