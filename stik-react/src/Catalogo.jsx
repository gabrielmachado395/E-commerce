import React from 'react'
import CatalogCarousel from '../components/carousel'

export default function Catalogo() {
    return (
        <section className='max-w-4xl mx-auto px-4'>
            <CatalogCarousel />
            <div className='newsletter-content' id='newsletter'>
                <h2>BAIXE NOSSO CATÁLOGO</h2>
            </div>
        </section>
    )
}