import './layout.scss'
import Navbar from '../Navbar/navbar'
import { Outlet } from 'react-router-dom'
import Cube from '../Cube/cube'

const Layout = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="content-container">
        <div className="main-content">
          <Outlet />
        </div>
        <Cube />
      </div>
    </div>
  )
}

export default Layout
