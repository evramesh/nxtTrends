import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="nav">
    <div>
      <img
        className="logo"
        alt="website logo"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      />
    </div>
    <ul className="ul">
      <li className="li">
        <Link to="/">Home</Link>
      </li>
      <li className="li">
        <Link to="/products">Products</Link>
      </li>
      <li className="li">
        <Link to="/cart">Cart</Link>
      </li>
      <li className="login">
        <Link className="login1" to="/login">
          Login
        </Link>
      </li>
    </ul>
  </div>
)

export default Header
