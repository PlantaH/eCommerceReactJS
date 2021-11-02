import React, {useState,  createContext } from 'react';
import swal from 'sweetalert';

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
        swal({
            title: "¿Queres borrar el producto?",      
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                let hay = cartList.find( (prod) => prod.item.id === itemId)    

                setCartList(cartList.filter( (prod) => prod.item.id  !== itemId))
                setTotalItemsCarrito(totalItemsCarrito - hay.cantidad)

                swal("Eliminaste el producto!", {
                icon: "success",
            });
            } 
        });
    }

    const clearCart = () =>{     
        swal({
            title: "¿Estas seguro?",      
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                setCartList([])
                setTotalItemsCarrito(0)
                swal("Vaciaste el carrito!", {
                icon: "success",
            });
            } 
        });
    }
    
    const totalCart = () =>{
        let total = 0    
        cartList.map(item => (total += parseFloat( item.item.precio * item.cantidad )))
        return "USD " + total
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
            clearCart ,
            totalCart,
            setCartList
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider