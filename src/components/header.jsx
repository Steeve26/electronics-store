import {RxExit} from 'react-icons/rx'
import {ImCart} from 'react-icons/im'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <div className="account">
        <span className="name">Hello Steeve</span>
        <button className="logout">
          Logout
          <RxExit/>
        </button>
      </div>

      <div className="search-bar-wrapper">
        <h1 className="title">TechTrove</h1>
        <div className="search-box-container">
          <input type="text" placeholder='Search your gadgets'/>
          <button>Search</button>
        </div>
        <div className="cart">Cart<ImCart/></div>
      </div>
      
      <nav>
        <ul>
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="/products">
            <li>Products</li>
          </NavLink>
          <li>Categories</li>
          <li>Contact</li>
          <li>Privacy</li>
        </ul>
      </nav>
    </header>
  )
}