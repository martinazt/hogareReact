import react, {useState} from "react";
import * as ReactBootStrap from "react-bootstrap";

export default function MasMenos({tope,onAdd}){
    
    const [cantidad, setCantidad] = useState(1);

    function sumar(){
        if (cantidad < (tope)) {  setCantidad(cantidad + 1)}
       
        
    }

    function restar(){
        if (cantidad > 1) {  setCantidad(cantidad-1)}
    }


    return(
        <>
           <br /> 
           <br />
           <span onClick={()=>restar()}>-</span>
           {cantidad}
           <span onClick={()=>sumar()}>+</span>
           <div>
                <ReactBootStrap.Button variant="primary"  onClick={()=>onAdd(cantidad)}>Agregar al carrito</ReactBootStrap.Button>  
           </div>
           
           <br /> 
           <br />
        </>
    )
}