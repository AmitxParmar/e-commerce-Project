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
        icon: 'missionLogo'/* <GiCompass /> */,
        title: 'mission',
        text:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
    },
    {
        id: "u23hr78923",
        icon: "visionLogo", /* < GiDiamondHard /> */
        title: 'vision',
        text:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
    },
    {
        id: "asda345sda234",
        icon: "historyLogo"/* <GiStabbedNote /> */,
        title: 'history',
        text:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
    },
]

export const products_url = 'https://localhost:8000/api/products'

export const single_product_url = `https://localhost:8000/api/products/`
