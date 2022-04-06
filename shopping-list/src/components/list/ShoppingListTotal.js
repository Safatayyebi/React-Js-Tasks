// import { useState } from 'react';
import './ShoppingListTotal.css';

const ShoppingListTotal = (props) => {
    
    const items = props.items
    let array = []
    let totalSum = 0

    items.map((item) => {
        const price = item.price
        const qty = item.quantity

        var total = 0
        total = qty * price

        array.push(total)
        return array;
    })
    
    for(let i = 0; i < array.length; i++){
        totalSum = totalSum + array[i]
    }



    return (
        <div className='shopping-list-total'>
            <ul>
                <li>
                    <ul className='list-item-detail-total'>
                        <li>Total</li>
                        <li>${totalSum.toFixed(2)}</li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default ShoppingListTotal;