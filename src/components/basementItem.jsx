
import '../styles/basementitem.css'
import addToCartSvg from '../images/Group 7438.svg'

export const BasementItem = ({data,addToCart})=>{

    let {id,title,price,image} = data

    return(
        <div  className="productPage">
            {
                data.map((item)=>(
                    <div className="product-item">
                    <div className='img-container-product'>
                    <img className='add' src={addToCartSvg} onClick={()=> addToCart(item.id)}/>
                    <img src={item.image}/>
                    </div>
                    <div className='txt-product-item'>
                    <h4>{item.title}</h4>
                    <p>${item.price}</p>
                    </div>
                </div>
                ))
            }
        </div>
    )
}
