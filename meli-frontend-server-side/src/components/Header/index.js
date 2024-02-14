'use client'
import Link from 'next/link'
import styles from './Header.module.scss'
import { useSearchParams, useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Header() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const initialSearch = searchParams.get('search') || ''
    const [searchValue, setSearchValue] = useState(initialSearch)

    const handleChange = (ev) => {
        setSearchValue(ev.target.value)
    }

    const handleSubmit = (ev) => {
        ev.preventDefault()
        if (searchValue.trim()) {
            router.push(`/items?search=${searchValue}`)
        } else {
            setSearchValue('')
        }
    }
    return (
        <header className={styles['searchBar']}>
            <div className={styles['searchBar-wrapper']}>
                <Link href="/">
                    <img src="/mercado-libre-logo.png" className={styles['searchBar-logo']} alt="logo mercadolibre" />
                </Link>
                <form className={styles['searchBar-searchForm']} onSubmit={handleSubmit}>
                    <input
                        className={styles['searchBar-searchInput']}
                        type="text"
                        id="search"
                        name="search"
                        placeholder="Nunca dejes de buscar"
                        maxLength="100"
                        required
                        value={searchValue}
                        onChange={handleChange}
                    />
                    <button className={styles['searchBar-searchButton']} type="submit" aria-label="buscar">
                        <img src="/loupe.svg" className={styles['searchBar-searchIcon']} alt="icono busqueda" />
                    </button>
                </form>
            </div>
        </header>
    )
}
