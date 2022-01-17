import react from "react";
import Producto from "./Producto";
import { useState } from "react";


export default function ListaDeProductos(){
   /* const arrayDeProductos = [
        {nombre: 'Pantalon', stock: '5'},
        {nombre: 'Remera', stock: '4'},
        {nombre: 'Gorra', stock: '1'}
    ];
    */

   const [arrayDeProductos, setArrayDeProductos] = useState([
        {nombre: 'Pantalon', stock: '5', url:'../../img/torta1.jpg'},
        {nombre: 'Remera', stock: '4',url:'../../img/torta2.png'},
        {nombre: 'Gorra', stock: '1',url:'../../img/torta3.jpg'}
   ])

    return(
        <>
        <div style={{display:'flex', margin: '25px', textAlign:'center'}}>
            {
                arrayDeProductos.map(item =>{
                   return <Producto item = {item}/>
                })
            }
        </div>
            

        </>
    )
}