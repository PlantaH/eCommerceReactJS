import React,{useState} from 'react'

const Filter = ({dispatch,nuevo,setNuevo,precioLimite,setMaxPrice}) => {
    
  const [filterValue,setFilterValue] = useState(precioLimite)  
  const [filterSel,setFilterSel] = useState(precioLimite)  

  const checkNuevo = (e) =>{   
      setNuevo(e.target.checked)
      dispatch()                
  } 

  const changePrice = (e) =>{              
    setMaxPrice(e.target.value)
    setFilterValue(e.target.value)
    setFilterSel(e.target.value);
  }
    
  return (      
    <section>    
      <section className="mb-4">
        <h6 className="font-weight-bold mb-3">Estado</h6>
        <div className="form-check pl-0 mb-3">
          <input type="checkbox" className="form-check-input filled-in" id="new" onChange={checkNuevo} checked={nuevo}/>
          <label className="form-check-label small text-uppercase card-link-secondary" for="new">Ver solo nuevos</label>
        </div>
      </section>
      <section className="mb-4">
        <h6 className="font-weight-bold mb-3">Precio máximo USD {filterSel}</h6>
        <div className="slider-price d-flex align-items-center my-4">
          <span className="font-weight-normal small text-muted mr-2">$0</span>
          <form className="multi-range-field w-100 mb-1">
            <input id="multi" className="multi-range" type="range" onChange={changePrice} min="0" max={precioLimite} value={filterValue}  />
          </form>
          <span className="font-weight-normal small text-muted ml-2">${precioLimite}</span>
        </div>           
      </section>
    </section>
  )
}

export default Filter
