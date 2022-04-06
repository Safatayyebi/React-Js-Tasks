import React from 'react';
import './ShoppingListHeader.css';

const ShoppingListHeader = () => {
    return (
        <div className='shopping-list-header'>
            <ul>
                <li>
                    <ul className='list-item-detail-header'>
                        <li>No.</li>
                        <li>Item Name</li>
                        <li>Qty</li>
                        <li>Price</li>
                        <li>Total Price</li>
                        <li></li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default ShoppingListHeader;