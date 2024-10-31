import './layout.scss'
import Navbar from '../Navbar/navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="main-content">
        <h1 className="Title">Welcome to my site!</h1>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
