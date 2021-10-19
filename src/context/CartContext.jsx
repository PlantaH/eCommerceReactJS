import React, {useState,  createContext } from 'react';

export const CartContext = createContext([])

function CartContextProvider({children}){
    
    const [totalItemsCarrito, setTotalItemsCarrito] = useState(0) // para saber cantidad de carrito

    const [cartList, setCartList] = useState([]) //Para guardar items carrito

    const addCartItem = (item) =>{  
        const {id} = item.item
        const {cantidad} = item
        
        setTotalItemsCarrito(totalItemsCarrito + cantidad)
        
        if (!isInCart(id)) {
            setCartList([...cartList, item ])                    
        }else{            
            cartList.find(prod => prod.item.id === id).cantidad += cantidad;         
        }
         
    }

    const removeItem = (itemId) =>{
        let hay = cartList.find( (prod) => prod.item.id === itemId)    
   
        setCartList(cartList.filter( (prod) => prod.item.id  !== itemId))
        setTotalItemsCarrito(totalItemsCarrito - hay.cantidad)
    }

    const clearCart = () =>{
        setCartList([])
        setTotalItemsCarrito(0)
    }

    const isInCart = (itemId) =>{         
        return cartList.some( (prod) => prod.item.id === itemId)
    } 

    return(
        <CartContext.Provider value={{
            cartList,           
            totalItemsCarrito,
            addCartItem,
            removeItem,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider