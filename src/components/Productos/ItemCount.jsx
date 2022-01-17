import react, {useState} from "react";

export default function MasMenos({tope}){
    
    const [cantidad, setCantidad] = useState(1);

    function sumar(){
        let aux = cantidad;

        if (aux < tope) {
            aux = aux +1;
            setCantidad(aux);
        }
        
        
    }

    function restar(){
        let aux = cantidad;

        if (aux > 1) {
            aux = aux -1;
        }
      setCantidad(aux);
    }


    return(
        <>
           <br /> 
           <br />
           <span onClick={()=>restar()}>-</span>
           {cantidad}
           <span onClick={()=>sumar()}>+</span>
           <br /> 
           <br />
        </>
    )
}