import  './App.css'
import Header from './components/header'
import Home from './pages/home'
import { Routes, Route } from 'react-router-dom/dist'
import Products from './pages/products'
export default function App() {
  return (
    <div>
        <Header/>
        <main>
          <Routes>
            <Route path={'/'} element={<Home/>}></Route>
          </Routes>
          <div className="main-content">
            <Routes>
              <Route path={'/products'} element={<Products/>}></Route>
            </Routes>
          </div>
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
