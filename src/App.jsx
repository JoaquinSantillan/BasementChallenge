import './App.css'
import imageHome from '../src/images/og.svg'
import { BasementHome } from './components/home/BasementHome'
import { Nav } from './components/nav/Nav'
import '../src/styles/basementIndex.css'
import { TYPES } from './actions/shoppingActions'
import { basementInitialState, basementReducer } from './reducers/basementReducer'
import { useEffect, useReducer, useRef, useState } from 'react'
import { BasementItem } from './components/basementItem'
import { Footer } from './components/footer/Footer'


function App() {

  const [state,dispatch] = useReducer(basementReducer,basementInitialState)
  const [loading,setLoading] = useState(false)
  const [tam,setTam] = useState(20)

  const load = useRef()

  const {products,cart} = state

  const clearCart = ()=>{
      dispatch({type:TYPES.CLEAR_CART})
  }

  const addToCart = (id)=>{
      dispatch({type:TYPES.ADD_TO_CART,payload:id})
  }

  const deleteFromCart = (id)=>{
          dispatch({type:TYPES.REMOVE_ONE_FROM_CART,payload:id})
  }

    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },3500)
    },[setLoading])
    

    useEffect(()=>{
        if(tam < 200){
            setTimeout(()=>{
                setTam(tam +2)
                load.current.style.width = `${tam}%`
            },40)
        }else{
            clearInterval()
        }
    },[tam])



  return (
    <div className="App">
      {
        loading ? (<div className="loading">
          <img src={imageHome}/>
          <div className='bar'>
            <div ref={load} className='bar-charge'>
            </div>
          </div>
        </div>)
        :(<>
        <Nav
        cart={cart}
        carte={cart.length}
        deleteFromCart={deleteFromCart}
        addToCart={addToCart}/>
        <BasementHome/>
        <BasementItem 
        data={products}
        addToCart={addToCart}/>
        <Footer/>
        </>)
      }
    </div>
  )
}

export default App
