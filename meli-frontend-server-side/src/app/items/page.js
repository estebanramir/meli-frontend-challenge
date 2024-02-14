"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import Breadcrum from "@/components/Breadcrum";
import ProductsList from "@/components/ProductList";
import styles from "./items.module.scss";
import Head from "next/head";
import { api } from "@/config/config";
import Loader from "@/components/Loader";
import NotFoundCard from "@/components/NotFoundCard";

export default function Items() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  useEffect(() => {
    const fetchData = async () => {
        try{
            const result = await fetch(
                `${api.itemsList}${search}`
              );
              const data = await result.json();
              setData(data);
        }catch(e){
            console.error("error fetching items", e)
        }
        setIsLoading(false);

    };
    fetchData();
  }, [search]);
  return (
    <div>
      <Head>
        <title>{search} | Mercado Libre</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <section className={styles.body}>
            {isLoading ? <Loader/> :
            data.items ?
            <><Breadcrum categories={data.categories} /><ProductsList products={data.items} /></>:
            <NotFoundCard/>
        }
      </section>
    </div>
  );
}
