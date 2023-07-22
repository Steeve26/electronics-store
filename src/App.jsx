import React from 'react'
import  './App.css'
import {RxExit} from 'react-icons/rx'
import {ImCart} from 'react-icons/im'
import Wave from './assets/wave'
import delivery from './assets/delivery.png'
import productReturn from './assets/product-return.png'
import security from './assets/credit-card.png'
import support from './assets/support.png'
import Airpod from './assets/Airpod Max.png'
import Services from './components/services'
import ProductCard from './components/productCard'
import {VscVerifiedFilled} from 'react-icons/vsc'

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

          <div className="services-wrapper">
            <Services img={delivery} alt={'delivery icon'} title={'Free Delivery'} description={'On all orders over 75$'}/>
            <Services img={productReturn} alt={'return product icon'} title={'Free Returns'} description={'Returns are free within 6 days'}/>
            <Services img={security} alt={'security icon'} title={'Secure Payment'} description={'Safe and secure payment'}/>
            <Services img={support} alt={'customer support icon'} title={'24/7 Support'} description={'Reliable 24 hour support'}/>
          </div>
        </div>
      </div>

      <main>
        <section className="products">
          <div className="advert">
            <div className="call-to-action">
              <div className="text">
                <h1 className="title">Apple Airpods Max <VscVerifiedFilled/></h1>
                <p className="description">Introducing AirPods Max — a perfect balance of exhilarating high-fidelity audio and the effortless magic of AirPods. The ultimate personal listening experience is here. With AirPods Max, you can immerse yourself in stunning sound quality and enjoy a seamless wireless experience.</p>
              </div>
              <button>Shop now</button>
            </div>
            <img src={Airpod} alt="Airpods Max" />
          </div>

            <div className="product-wrapper">
              <h1 className="title">Featured Products</h1>
              <div className="products-container">
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
              </div>
            </div>
        </section>
      </main>

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
