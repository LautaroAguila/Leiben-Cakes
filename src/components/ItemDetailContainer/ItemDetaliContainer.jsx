import React from 'react'
import { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'

import { db } from '../../firebase/config'
import { collection, doc, getDoc } from 'firebase/firestore'



const ItemDetaliContainer = ({id}) => {
    const [loading, setLoading] = useState(true)
    const [item, setItem] = useState()
    /*const {productId} = useParams()*/

    useEffect(()=>{
        const productsCollection = collection(db, 'products')
        const refDoc = doc(productsCollection, id)
        getDoc(refDoc)
            .then((doc) => {
                setItem({ ...doc.data() })
            })
            .catch((error) => {
                console.log('error: ', error)
            })
        setLoading(false)

    }, [id]) 

    return ( <> <ItemDetail item={item}/> </>)

}
export default ItemDetaliContainer