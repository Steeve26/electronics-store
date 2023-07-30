import ProductGrid from "../components/productGrid"
import CategoryCard from "../components/categoryCard"
import ActionBtn from '../components/ActionBtn'
import styles from './products.module.css'
import iphone from '../assets/iPhone-14-Pro.png'
import tab from '../assets/galaxy tab s9.webp'
import {RiEqualizerLine} from 'react-icons/ri'
import {IoIosArrowDown} from 'react-icons/io'
import googleHome from '../assets/googleHome.png'
import ps5Controller from '../assets/AkatsukiController.png'
import galaxyProjector from '../assets/Galaxy Projector.png'
import AppleVisionPro from '../assets/VisionPro.png'
import RedragonKeyboard from '../assets/RedragonKeyboard.png'
import JBLSpeaker from '../assets/JBLSpeaker.png'
import GamingMouse from '../assets/GamingMouse.png'
import AirpodsPro from '../assets/Airpods Pro.png'
import Headset from '../assets/Headset.png'
import Wonderboom from '../assets/wonderboom 2 speaker.png'

export default function products() {
  return (
    <>
      <div className={styles.advertWrapper}>

        <div className={styles.advertContainer}>
          <img width='150px' src={iphone} alt='' />   

          <div className={styles.callToAction}>
            <h1 className={styles.title}>Latest phones in stock</h1>
            <p className={styles.description}>Make your calls in style with the latest tech on hand</p>
          </div>
        </div>

        <div className={styles.advertContainer}>
          <img width='300px' src={tab} alt='' />

          <div className={styles.callToAction}>
            <h1 className={styles.title}>Android tablets</h1>
            <p className={styles.description}>Watch your favorite content with the best tabs in the market</p>
          </div>
        </div>
      </div>

      <section className="categoryCardsWrapper">
        <h6 className="cardTitle">Popular Categories</h6>

        <div className="scrollIndicator">
          <div className="categoryCardsContainer">
            <CategoryCard image={googleHome} text={'Home Assistants'}/>
            <CategoryCard image={ps5Controller} text={'Exotic Controllers'}/>
            <CategoryCard image={galaxyProjector} text={'Galaxy Projectors'}/>
            <CategoryCard image={AppleVisionPro} text={'VR Headsets'}/>
            <CategoryCard image={RedragonKeyboard} text={'Mechanical Keyboards'}/>
            <CategoryCard image={JBLSpeaker} text={'Wireless Speakers'}/>
            <CategoryCard image={GamingMouse} text={'Gaming Mice'}/>
            <CategoryCard image={AirpodsPro} text={'Earbuds'}/>
            <CategoryCard image={Headset} text={'Headsets'}/>
            <CategoryCard image={galaxyProjector} text={'Galaxy Projectors'}/>
            <CategoryCard image={RedragonKeyboard} text={'Mechanical Keyboards'}/>
          </div>
        </div>
        <div className="scrollIndicator">
          <div className="categoryCardsContainer">
            <CategoryCard image={Headset} text={'Headsets'}/>
            <CategoryCard image={AirpodsPro} text={'Earbuds'}/>
            <CategoryCard image={GamingMouse} text={'Gaming Mice'}/>
            <CategoryCard image={JBLSpeaker} text={'Wireless Speakers'}/>
            <CategoryCard image={RedragonKeyboard} text={'Mechanical Keyboards'}/>
            <CategoryCard image={AppleVisionPro} text={'VR Headsets'}/>
            <CategoryCard image={galaxyProjector} text={'Galaxy Projectors'}/>
            <CategoryCard image={ps5Controller} text={'Exotic Controllers'}/>
            <CategoryCard image={Headset} text={'Headsets'}/>
            <CategoryCard image={AirpodsPro} text={'Earbuds'}/>
            <CategoryCard image={googleHome} text={'Home Assistants'}/>
          </div>
        </div>
      </section>

      <div className={styles.filtersWrapper}> 
        <div className={styles.filtersContainer}>
          <div className={styles.filter}>category <IoIosArrowDown rotate={30} size={15}/></div>
          <div className={styles.filter}>price <IoIosArrowDown rotate={30} size={15}/></div>
          <div className={styles.filter}>color <IoIosArrowDown rotate={30} size={15}/></div>
          <div className={styles.filter}>rating <IoIosArrowDown rotate={30} size={15}/></div>
          <div className={styles.filter}>on sale <IoIosArrowDown rotate={30} size={15}/></div>
          <div className={styles.filter}>brand <IoIosArrowDown rotate={30} size={15}/></div>
          <div className={styles.filter}>all filters <RiEqualizerLine/></div>
        </div>
        <div className={styles.sorting}>Sort by <IoIosArrowDown rotate={30} size={15}/></div>
      </div>

      <div class="products-wrapper">
        <div className="products-cotnainer">
          <ProductGrid cards='12'/>
        </div>
      </div>

      <div className={styles.salesWrapper}>
        <h6 className={styles.salesTitle}>On Sale This Week</h6>

        <div className={styles.salesGridContainer}>
          <div className={styles.salesGrid}>
            <div className="callToAcction">
              <h3 className="title">Multifunctional Bluetooth Speaker</h3>
              <ActionBtn size={'1em'}/>
            </div>
            <img width={250} height={250} style={{marginBlock:'auto'}} src={Wonderboom}></img>
          </div>

          <div className={styles.gridWrapper}>
            <div className={styles.salesGrid}>
              <h3 className="title"></h3>
              <div className="img"></div>
            </div>

            <div className={styles.gridSubWrapper}>
              <div className={styles.salesGrid}>
                <h3 className="title"></h3>
                <div className="img"></div>
              </div>

              <div className={styles.salesGrid}>
                <h3 className="title"></h3>
                <div className="img"></div>
              </div>
            </div>
            
          </div>

        </div>
      </div>

    </>
  )
}
