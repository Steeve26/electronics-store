import ProductGrid from "../components/productGrid"
import styles from './products.module.css'
import iphone from '../assets/iPhone-14-pro.png'
import tab from '../assets/galaxy tab s9.webp'
import {RiArrowDownSLine, RiEqualizerLine} from 'react-icons/ri'
import {IoIosArrowDown} from 'react-icons/io'

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
    </>
  )
}
