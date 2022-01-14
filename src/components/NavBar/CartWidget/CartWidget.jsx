import React from "react";
import carrito from "../../../img/carrito.png";
import "../../../estilos/imagen.css";

export default function CartWidget(){
    return(
        <img src={carrito} />
    )
}