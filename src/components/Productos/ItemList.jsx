import react from "react";
import Item from "./Item";
import { useState } from "react";


export default function ItemList(){
   /* const arrayDeProductos = [
        {nombre: 'Pantalon', stock: '5'},
        {nombre: 'Remera', stock: '4'},
        {nombre: 'Gorra', stock: '1'}
    ];
    */

   const [arrayDeProductos, setArrayDeProductos] = useState([
        {nombre: 'TORTA 1', stock: '5', url:'../../img/torta1.jpg'},
        {nombre: 'TORTA 2', stock: '4',url:'../../img/torta2.png'},
        {nombre: 'TORTA 3', stock: '1',url:'../../img/torta3.jpg'}
   ])

    return(
        <>
        <div style={{display:'flex', margin: '25px', textAlign:'center'}}>
            {
                arrayDeProductos.map(item =>{
                   return <Item item = {item}/>
                })
            }
        </div>
            

        </>
    )
}