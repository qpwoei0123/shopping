import React from 'react'
import Item from './Item'

export default function ItemList({Items}){
    console.log(Items)
    return (
            <div className="item-list">
                {/* {Items.map(item => <Item key={item.id} item={item} />)} */}
            </div>
        )
}