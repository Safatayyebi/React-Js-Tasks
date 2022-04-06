import React from 'react';
import './ShoppingListItem.css';

const ShoppingListItem = (props) => {

    const totalPriceItem = (a, b) => {
        const total = (a * b).toFixed(2)
        return total;
    }

    var items = (props.items)
    const generateNumber = (id) => {
        const index = items.findIndex(item => item.id === id );
        return (index + 1)
    }

    return (
        <div className='shopping-list'>
            <ul>
                {props.items.map((item) =>
                    <li key={item.id} className='list-items'>
                        <ul className='list-item-detail'>
                            <li>{generateNumber(item.id)}</li>
                            <li>{item.title}</li>
                            <li>{item.quantity}</li>
                            <li>${item.price}</li>
                            <li>${totalPriceItem(item.quantity, item.price)}</li>
                            <li>
                                <button id='delete' onClick={() => props.deleteHandler(item.id)} type='submit'>Delete</button>
                            </li>
                        </ul>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default ShoppingListItem;