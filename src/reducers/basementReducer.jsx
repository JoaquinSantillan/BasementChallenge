import { TYPES } from "../actions/basementActions"
import imageOne from '../images/cap.png'
import imageTwo from '../images/shirt.png'
import imageTreh from '../images/hoodie.png'

export const basementInitialState = {
    products:[
        {
            id:"1",
            title:"BLACK CAP",
            description:"Basic cap black basement mark",
            image:imageOne,
            price:"200"
        },
        {
            id:"2",
            title:"BLACK SHIRT",
            image:imageTwo,
            description:"Unisex Basic shoftStyle T-shirt black",
            price:"300"
        },
        {
            id:"3",
            title:"BLACK HOODIE",
            image:imageTreh,
            description:"Unisex Basic hoodie black basement",
            price:"600"
        }
    ],
    cart:[]
}

export function basementReducer (state,action){
    
    switch (action.type) {
        case TYPES.ADD_TO_CART:{
            let newItem = state.products.find(
                (product)=> product.id === action.payload)
            
            let ItemCart = state.cart.find((item)=> item.id === newItem.id)
        
            return ItemCart ?
            {
                ...state,
                cart: state.cart.map((item)=> item.id === newItem.id ? {...item,quantity:item.quantity + 1}:item)
            }:
            {
                ...state,
                cart:[...state.cart,{...newItem,quantity:1}]
            }
        }

        case TYPES.CLEAR_CART:{
            return basementInitialState
        }
        case TYPES.REMOVE_ONE_FROM_CART:{
            let itemToDelete = state.cart.find((item)=> item.id === action.payload)

            return itemToDelete.quantity > 1 
            ? {...state,
                cart:state.cart.map((item)=> item.id === action.payload ? {...item,quantity:item.quantity - 1} : item)
            } : {
                ...state,
                cart:state.cart.filter((item)=> item.id !== action.payload)
            }
        }
        default:
            state;
    }
}