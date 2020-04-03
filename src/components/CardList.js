import React from 'react'
import Card from './Card'

const CardList = ({ items }) => {
    // throw new Error('NOOO')
    return (
        items.map(item => (<Card key={item.id} id={item.id} item={item} />))
    )
}

export default CardList