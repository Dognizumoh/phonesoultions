import React from 'react'
import smartphone1 from "../pics/smartphone1.jpg"
import headphone1 from "../pics/headphone1.jpg"
import pendrive2 from "../pics/pendrive2.jpg"
import phonecase2 from "../pics/phonecase2.jpg"

function Home() {
  return (
    <div className='products'>
    <div className='firstrow'>
    <div className='card'>
    <h2>Smartphones</h2>
    <img src={smartphone1} alt=""/>
    <p>We sell quality smart phones at affordable prices</p>
    <button>View Phones</button>
     </div>
     

     <div className='card'>
    <h2>Phonecase2</h2>
    <img src={phonecase2} alt=""/>
    <p>We sell quality smart phones at affordable prices</p>
    <button>View Phones</button>
     </div>
     </div>
     <div className='second-row'>
     <div className='card'>
    <h2>pendrive2</h2>
    <img src={pendrive2} alt=""/>
    <p>We sell quality smart phones at affordable prices</p>
    <button>View Phones</button>
     </div>
     
     


    <div className='card'>
    <h2>Headphones</h2>
    <img src={headphone1} alt=""/>
    <p>We sell quality smart phones at affordable prices</p>
    <button>View Phones</button>
    
    
    </div>

    </div>
    
    
    </div>
  )
}

export default Home