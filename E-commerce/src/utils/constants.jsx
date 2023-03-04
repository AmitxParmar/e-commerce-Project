import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
export const links = [
    {
        id: 1,
        text: 'home',
        url: '/',
    },
    {
        id: 2,
        text: 'about',
        url: '/about',
    },
    {
        id: 3,
        text: 'products',
        url: '/products',
    },
]

export const services = [
    {
        id: "1asd2df34",
        icon: <GiCompass />,
        title: 'mission',
        text:
            'Our mission is to provide our customers with the best possible shopping experience, from the moment they land on our site to the time they receive their orders. We strive to make shopping online convenient, fast, and secure while offering competitive prices and exceptional customer service.',
    },
    {
        id: "u23hr78923",
        icon: < GiDiamondHard />,
        title: 'vision',
        text:
            'At our ecommerce site, our vision is to become a leading platform for online shopping by providing customers with a seamless and enjoyable shopping experience.',
    },
    {
        id: "asda345sda234",
        icon: <GiStabbedNote />,
        title: 'history',
        text:
            'Our history dates back to 2015 when we started as a small online store selling a few products. Over the years, we have grown into a full-fledged ecommerce platform with a wide range of products and services.',
    },
]

export const products_url = 'http://localhost:8000/api/products'

export const single_product_url = `http://localhost:8000/api/products/`
