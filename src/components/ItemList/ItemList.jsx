"use client";
import React from "react";
import PropTypes from "prop-types";
import "./ItemList.css"

import Item from "../Item/Item";

const ItemList = ({itemList}) => {
    return (
        <div className="items">
            
            {itemList.map(({id, title,des1 ,des2,des3,des4,des5,des6,des7,des8,des9,image}) => {
                return (
                    <Item 
                        key= {id}
                        id = {id}
                        title = {title}
                        des1 = {des1}
                        des2 = {des2}
                        des3 = {des3}
                        des4 = {des4}
                        des5 = {des5}
                        des6 = {des6}
                        des7 = {des7}
                        des8 = {des8}
                        des9 = {des9}
                        image = {image}
                    />
                )
            })}
        </div>
    );
}

ItemList.propTypes = {};
export default ItemList;