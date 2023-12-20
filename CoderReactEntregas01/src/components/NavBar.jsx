import React from 'react'
import CartWidget from './CartWidget'
import './styles.css'

const NavBar = () => {
  return (
    <div className='divNavbar'>
        <header className='navbar'>
            <h2>JT Yôga</h2>
            <nav>
                <ul>
                    <li><a>Clases</a></li> 
                    <li><a>Formación</a></li> 
                    <li><a>Especializaciones</a></li> 
                </ul>
            
            </nav>

            <CartWidget></CartWidget>
        </header>
    </div>
  )
}

export default NavBar