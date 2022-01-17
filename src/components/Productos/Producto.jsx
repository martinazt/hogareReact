import react from "react";
import ItemCount from "./ItemCount";
import * as ReactBootStrap from "react-bootstrap";
import torta1 from "../../img/torta1.jpg"



export default function Producto({item}){
    
    function onAdd(){
        alert(item.nombre + '' + item.stock);
    }

    return(
        <>
            <div style={{display:'in-line', margin: '25px', width:'25%'}}>
                
          
            <ReactBootStrap.Card style={{ width: '18rem', alignItems:'center'}}>
            
            <img src={torta1} variant="top"  style={{ width:'200px',height:'200px', margin:'20px'}}/> 
            <ReactBootStrap.Card.Body>
                <ReactBootStrap.Card.Title>{item.nombre}</ReactBootStrap.Card.Title>
                <ReactBootStrap.Card.Text>
                Stock disponible: {item.stock}
                </ReactBootStrap.Card.Text>
                <ReactBootStrap.Button variant="primary"  onClick={()=>onAdd()}>Agregar al carrito</ReactBootStrap.Button>
                <ItemCount tope={item.stock} />
            </ReactBootStrap.Card.Body>
            </ReactBootStrap.Card>
            
             </div>
            
        </>
    )
}