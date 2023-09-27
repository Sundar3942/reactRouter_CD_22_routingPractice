// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="header-container">
    <div className="logo-container">
      <img
        className="logo-img"
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
      />
      <h1 className="logo-name">Wave</h1>
    </div>
    <div type="none" className="header-options-container">
      <Link to="/" className="header-option">
        Home
      </Link>
      <Link to="/about" className="header-option">
        About
      </Link>
      <Link to="/contact" className="header-option">
        Contact
      </Link>
    </div>
  </div>
)

export default Header
