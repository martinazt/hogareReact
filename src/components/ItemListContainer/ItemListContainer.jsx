
import React from "react";
import "./ItemListContainer.css"
import ListaDeProductos from "../Productos/ListaDeProductos";

const ItemListContainer = () => {
    return(
        <div className="itemListContainer" style={{display:'in-line', width:'100%', alignContent:'center', height:'100vh'}}>
            <div>
                <ListaDeProductos/>
            </div>
            
        </div>
    );
};

export default ItemListContainer;