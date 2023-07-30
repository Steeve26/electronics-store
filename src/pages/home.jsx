import ActionBtn from '../components/ActionBtn'
import Services from '../components/services'
import ProductGrid from '../components/productGrid'
import Wave from '../assets/wave'
import delivery from '../assets/delivery.png'
import productReturn from '../assets/product-return.png'
import security from '../assets/credit-card.png'
import support from '../assets/support.png'
import Airpod from '../assets/Airpod Max.png'
import {VscVerifiedFilled} from 'react-icons/vsc'

export default function home() {
  return (
    <>
      <section className="hero-img">
        <div className="hero-text">
          <h1>Get Your Dream Setup Today</h1>
          <p>Experience new possibilities!</p>
          <ActionBtn/>
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

      <div className="main-content">
        <section className="products">
          <div className="advert">
            <div className="call-to-action">
              <div className="text">
                <h1 className="title">Apple Airpods Max <VscVerifiedFilled/></h1>
                <p className="description">Introducing AirPods Max — a perfect balance of exhilarating high-fidelity audio and the effortless magic of AirPods. The ultimate personal listening experience is here. With AirPods Max, you can immerse yourself in stunning sound quality and enjoy a seamless wireless experience.</p>
              </div>
              <ActionBtn></ActionBtn>
            </div>

            <img src={Airpod} alt="Airpods Max" />
            <div className="circle"></div>
          </div>

          <div className="product-wrapper">
            <div className="title-wrapper">
              <h6 className="title">Featured Products</h6>
            </div>
            <ProductGrid cards='8'/>
          </div>
        </section>
      </div>
    </>
  )
}
