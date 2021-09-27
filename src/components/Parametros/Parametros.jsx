import React from 'react'

const Parametros = ( {nombre,edad,mayorDeEdad} ) => {
    let esMayor =""
    if (mayorDeEdad )
        esMayor = "sos mayor "
       else 
       esMayor = "sos menor"
       
    return ( 
        <main>
            <p>este es el main {nombre} tenes{edad} años y {esMayor}</p>
        </main>   
    )
}

export default Parametros
