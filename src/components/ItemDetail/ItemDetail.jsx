import React, { useState } from 'react'
import './ItemDetail.css'
import { useCartContex } from '../../routing/contex/cartContex'


const ItemDetail = ({item}) => {
    if (!item) {
        return <div>Loading...</div>
    }
    
    const { id, title, des1,des2,des3,des4,des5,des6,des7,des8,des9, image } = item;
    
    const [showItemCount, setShowItemCount] = useState(true);

    const goBack = () => {
        history.back()
    };
    
    return (
        <div className='itemDetail'>
            <div className="contendorList">
                
                <div className='item'>
                    <p>{des1}</p>
                    <p>{des2}</p>
                    <p>{des3}</p>
                    <p>{des4}</p>
                    <p>{des5}</p>
                    <p>{des6}</p>
                    <p>{des7}</p>
                    <p>{des8}</p>
                    <p>{des9}</p>
                    <a className='link-detalle' href="https://drive.google.com/drive/folders/1tSew4NA7lKnQy2jHwKhZv61bFyqNI4hm">Para ver fotos de los productos, visita nuestro catalogo aqui.</a>
                </div>
                
            </div>
            
        </div>
)
}

export default ItemDetail