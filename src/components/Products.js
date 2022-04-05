import React from 'react'
import ashphone from "../accessories/ashphone.jpg"
import blueblackphone from "../accessories/blueblackphone.jpg"
import bannycase from "../accessories/bannycase.jpeg"
import multicase from "../accessories/multicase.jpg"
import whitepen from "../accessories/whitepen.jpg"
import brownpen from "../accessories/brownpen.jpg"
import bluehead from "../accessories/bluehead.jpeg"
import blackhead from "../accessories/blackhead.jpg"
import { Link } from 'react-router-dom'







function Products() {
  return (
    <div className='prod'>
    <div className='firstrow'>
    <div className='card'>
    <h2>Smartphones</h2>
    <img src={ashphone} alt=""/>
    <p>Ghc70</p>
    <button> <Link to ="/products">View Smartphones</Link></button>
     </div>

     <div className='card'>
    <h2>Smartphones</h2>
    <img src={blueblackphone} alt=""/>
    <p>Ghc70</p>
    <button> <Link to ="/products">View Smartphones </Link></button>
     </div>

    </div>
    <div className='firstrow'> 

    <div className='card'>
    <h2>Phonecases</h2>
    <img src={bannycase} alt=""/>
    <p>Ghc70</p>
    <button> <Link to ="/products">Buy Me</Link></button>
     </div>

     <div className='card'>
    <h2>Phonecases</h2>
    <img src={multicase} alt=""/>
    <p>Ghc90</p>
    <button> <Link to ="/products">Buy Me </Link></button>
     </div>
    </div>

    <div className='firstrow'>
    <div className='card'>
    <h2>Pendrives</h2>
    <img src={whitepen} alt=""/>
    <p>Ghc100</p>
    <button> <Link to ="/products">Buy Me</Link></button>
     </div>

     <div className='card'>
    <h2>Pendrives</h2>
    <img src={brownpen} alt=""/>
    <p>Ghc100</p>
    <button> <Link to ="/products">Buy Me </Link></button>
     </div>
    </div>

    <div className='firstrow'>
    <div className='card'>
    <h2>Headphones</h2>
    <img src={bluehead} alt=""/>
    <p>Ghc200</p>
    <button><Link to ="/products">Buy Me </Link></button>
     </div>

     <div className='card'>
    <h2>Headphones</h2>
    <img src={blackhead} alt=""/>
    <p>Ghc88</p>
    <button><Link to ="/products">Buy Me</Link></button>
     </div>
    </div>
    
    </div>
  )
}

export default Products