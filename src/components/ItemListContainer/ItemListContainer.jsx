
import React from "react";
import "./ItemListContainer.css"
import ItemList from "../Productos/ItemList";
import * as ReactBootStrap from "react-bootstrap";
import react, { useState, useEffect } from "react";

const ItemListContainer = () => {

    const [llegoLaPromesa, setLlegoLaPromesa] = useState(false);
    const [arrayDeProductos, setArrayDeProductos] = useState([]);

    const productosEnStock = new Promise((resolve, reject) => {
        setTimeout(() => {
            //reject('server caido');
            resolve(['nike', 'adidas', 'chanel']);
        }, 5000)
    });

    useEffect(() => {
        productosEnStock
            .then(res => {
                setLlegoLaPromesa(true);
                setArrayDeProductos(res);

            })
            .catch(err => {
                console.log(err);
            });
    })

    return(

        <>
            {(llegoLaPromesa) ?
                <>
                     <div className="itemListContainer" style={{display:'in-line', width:'100%', alignContent:'center', height:'100vh'}}>
                        <div>
                            <ItemList/>
                        </div>
                        
                    </div>
                </>
                :
                <>
                    <div className="cargandoPantalla" >
                        <div>
                             <h3> ACTUALIZANDO INFORMACION</h3> <br /> <br /><br />
                        </div>
                       
                         <ReactBootStrap.Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </ReactBootStrap.Spinner>
                    </div>
                </>
            }
        </>

        
    );
};

export default ItemListContainer;