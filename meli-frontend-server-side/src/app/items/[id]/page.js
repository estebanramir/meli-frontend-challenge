'use client'
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'
import Header from '@/components/Header';
import ProductDetail from '@/components/ProductDetail';
import Breadcrum from '@/components/Breadcrum';
import NotFoundCard from '@/components/NotFoundCard';
import styles from '../items.module.scss'
import { api } from '@/config/config';
import Loader from '@/components/Loader';

export default function ItemsById() {
    const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const params = useParams()

    useEffect(() => {
        const fetchProduct = async () => {
            try{
                const itemId = params.id.split('-')
                const result = await fetch(`${api.itemDescription}${itemId[0]}`)
                const data = await result.json()
                setData(data)
            }catch(e){
                console.error("error fetching product", e)
            }
                setIsLoading(false)
        }
        fetchProduct()
    },[])
    return (
        <div>
        <Header />
        <section className={styles.body}>
        {isLoading ? <Loader/> :
        data.item ?
            <><Breadcrum categories={data.categories} /><ProductDetail product={data.item} /></> : <NotFoundCard/>}
        </section >
        </div>
    )
}