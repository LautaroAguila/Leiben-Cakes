import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import PropTypes from 'prop-types';
import './ItemListContainer.css';
import ItemList from "../ItemList/ItemList";

import { db } from "../../firebase/config";
import { collection, query, where, getDocs } from "firebase/firestore";



const ItemListContainer = ({}) => {

    const [items, setItems] = useState([]);
    const {categoryId} = useParams()
    



    useEffect(() => {
        
        const productsCollection = collection(db, 'products')

        if (categoryId) {
            const queryCollection = query(
                productsCollection,
                where('category','==',categoryId)
            )
            getDocs(queryCollection).then(({docs})=>{
                
                const products = docs.map((doc)=>({
                    id: doc.id,
                    ...doc.data(),
                }))
                setItems(products)
            })
        }else{
            getDocs(productsCollection).then(({docs})=>{
                
                const products = docs.map((doc)=>({
                    id: doc.id,
                    ...doc.data(),
                }))
                setItems(products)
            })
        }
        
        
        

    }, [categoryId])

    return ( 
        <>
            
            <ItemList itemList={items}/>
            
        </>
        
    )
};


export default ItemListContainer;