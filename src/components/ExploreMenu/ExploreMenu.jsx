import React from 'react'
import './ExploreMenu.scss'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category, setCategory}) => {

  return (
   <>
   <section>
    <div className="container">
    <div className="explore-menu" id='explore-menu'>
        <h1>Explore Our Menu</h1>
        <p className='explore-menu-text'>See what we have to offer. Discover a world of delicious flavors and mouthwatering dishes that will tantalize your taste buds.</p>

        <div className="explore-menu-list">
          {menu_list.map((item, index) => {
              return(
                <div onClick={() => setCategory(prev => prev === item.menu_name ? "all" : item.menu_name)} key={index} className="explore-menu-list-item">
                    <img className={category === item.menu_name ? "active" : ""}  src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                </div>
              )
          })}
        </div>
        <hr />
    </div>
    </div>
   </section>
   </>
  )
}

export default ExploreMenu
