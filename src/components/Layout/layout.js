import './layout.scss'
import Navbar from '../Navbar/navbar'

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="main-content">
        <h1>Welcome to my site!</h1>
      </div>
    </div>
  )
}

export default Layout
