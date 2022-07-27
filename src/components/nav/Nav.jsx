import '../../styles/nav.css'
import logo from '../../images/basement.logotype.svg'
import logo2 from '../../images/Group 7451.svg'
import hd4k from '../../images/hd-4k.svg'
import { useEffect, useState } from 'react'


export const Nav = ({cart,deleteFromCart,addToCart,carte})=>{

    const [cartSlide,setCartSlide] = useState(false)

    let {id,title,price,quantity,image,description} = cart

    const handleNav = (e)=>{
        e.stopPropagation();
        setCartSlide(!cartSlide)
    }

    return(
        <div className='nav-container'>
            <nav className="nav">
            <div className='txt-nav'>
            <img className='logo-basement' src={logo}/>
            <img className='logo-basement-2' src={logo2}/>
            <img className='hd4k-basement' src={hd4k}/>
            </div>

            <div className='nav-cart'>
            <div className='cart-count' onClick={handleNav}>
            <h1>CART:{carte}</h1>
            </div>
            <div className={cartSlide ? 'cart active' : 'cart'}>
                <div className='cart-content'>
                <div className='container-button'>
                <span className='nav-close' onClick={handleNav}>CLOSE CART</span>
                </div>

                <div className='cart-container'>
                    <h1 className='cart-title'>YOUR</h1>
                    <p className='cart-title'>CART</p>
                </div>
            
                <div className='container-cart-buy'>
                    <div>
                    {
                    cart.map((item)=>(
                        <div className='container-compra'>
                        
                        <div className='container-image-compra'>
                        <img src={item.image}/>
                        </div>
                        
                        <div className='container-content-compra'>
                        
                        <div className='container-txt-compra'>
                        <h1 className='title-copmpra'>{item.title}</h1>
                        <p className='description-compra'>{item.description}</p>
                        </div>
                        
                        <div className='buttons-container-compra'>
                        
                        <div className='container-amount'>

                        <div className='container-buttons-amount'>
                        <p className='quantity'>QUANTITY: </p>
                        
                        <div className='content-buttons'>
                        <button className='button-amount' onClick={()=> addToCart(item.id)}>+</button>
                        <span>{item.quantity}</span>
                        <button className='button-amount' onClick={()=> deleteFromCart(item.id)}>-</button>
                        </div>
                        
                        </div>

                        <div className='container-price'>
                        <p className='price-copmpra'>${item.price}</p>
                        </div>

                        </div>
                        
                        </div>

                        </div>

                        </div>
                    ))
                    }
                    </div>
                </div>

                </div>
            </div>
            </div>
        </nav>
        </div>
    )
}