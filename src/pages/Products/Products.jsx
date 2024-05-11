import React, { useState, useEffect } from "react";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import './Products.css'


function Products() {
    return (
        <div className="prod" id="Productos">
            <h1 className="product-h1">Nuestros Productos</h1>
            <ItemListContainer/>
        </div>
    )
}
export default Products;

