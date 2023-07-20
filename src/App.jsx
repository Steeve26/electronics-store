import React from 'react'
import  './App.css'
import {RxExit} from 'react-icons/rx'
import {ImCart} from 'react-icons/im'
import Wave from './assets/wave'
import delivery from './assets/delivery.png'
import productReturn from './assets/product-return.png'
import security from './assets/credit-card.png'
import support from './assets/support.png'
import Services from './components/services'

export default function App() {
  return (
    <div>
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
            <li>Home</li>
            <li>Products</li>
            <li>Categories</li>
            <li>Contact</li>
            <li>Privacy</li>
          </ul>
        </nav>

      </header>

      <section className="hero-img">
        <div className="hero-text">
          <h1>Get Your Dream Setup Today</h1>
          <p>Experience new possibilities!</p>
          <button>Shop now</button>
        </div>
      </section>

      <div className="services-highlight-wrapper">
        <Wave/>

        <div className="services-highlight-container">
          <Services img={delivery} alt={'delivery icon'} title={'Free Delivery'} description={'On all orders over 75$'}/>
          <Services img={productReturn} alt={'return product icon'} title={'Free Returns'} description={'Return are free within 6 days'}/>
          <Services img={security} alt={'security icon'} title={'Secure Payment'} description={'Safe and secure payment'}/>
          <Services img={support} alt={'customer support icon'} title={'24/7 Support'} description={'Relable 24 hour support'}/>
        </div>
      </div>

      <section className="newsletter">
        <div className="title-container">
          <h1 className="title">Sign Up For Newsletters</h1>
          <p className="description">Experience new possibilities!</p>
        </div>
        <div className="email">
          <input type="text" />
          <button>Sign Up</button>
        </div>
      </section>

      <footer>
        <div>
          <h1 className="title"></h1>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div>
          <h1 className="title"></h1>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div>
          <h1 className="title"></h1>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div>
          <h1 className="title"></h1>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>

        <div className="payment-and-socials">
          <div className="payment"></div>
          <div className="socials"></div>
        </div>
        <div className="copyright"></div>
      </footer>
    </div>

  )
}
