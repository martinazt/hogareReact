import react from "react";
import ItemCount from "./ItemCount";
import * as ReactBootStrap from "react-bootstrap";
import torta1 from "../../img/torta1.jpg"



export default function Item({item}){
    
    function onAdd(onAdd){
        alert(' se sumaron '+ onAdd + ' del producto : '+ item.nombre  );
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
                <ItemCount tope={item.stock} onAdd={onAdd}/>
                <ReactBootStrap.Button variant="primary"  >Ver detalles</ReactBootStrap.Button>
            </ReactBootStrap.Card.Body>
            </ReactBootStrap.Card>
            
             </div>
            
        </>
    )
}