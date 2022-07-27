

export const BasementCart = ({data,deleteFromCart})=>{

    let {id,title,price,quantity,image} = data

    return(
        <div>
            <h1>{title} x {quantity}</h1>
            <p>{price}</p>
            <img src={image}/>
            <p>TOTAL: {price * quantity}</p>
            <button onClick={()=> deleteFromCart(id)}>remove one</button>
        </div>
    )
}