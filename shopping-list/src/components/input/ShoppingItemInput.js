import React, { useState } from 'react';
import './ShoppingItemInput.css';



const ShoppingItemInput = (props) => {

    const [titleInput, setTitleInput] = useState('')
    const [qtyInput, setQtyInput] = useState('')
    const [priceInput, setPriceInput] = useState('')


    const inputItemHandler = (event) => {
        setTitleInput(event.target.value)
    }
    const inputQtyHandler = (event) => {
        setQtyInput(event.target.value)
    }

    const inputPriceHandler = (event) => {
        setPriceInput(event.target.value)
    }

    const newInputHandler = (event) => {
        event.preventDefault();

        const shopItem = {
            title: titleInput,
            quantity: qtyInput,
            price: priceInput,
            id: Math.random()
        }

        props.recivedData(shopItem);
        
        setTitleInput('');
        setQtyInput('');
        setPriceInput('');
    }


    return (
        <div className='input-form-box'>
            <form className='form-control' onSubmit={newInputHandler}>
                <div className='add-input'>
                    <label>Add Item: </label>
                    <input placeholder='chandelier' value={titleInput} type='text' onChange={inputItemHandler}></input>
                </div>
                <div className='add-input-others'>
                    <div className='add-input-child'>
                        <label>Add Quantity: </label>
                        <input placeholder='0' type='number' value={qtyInput} min='0' max='50' onChange={inputQtyHandler}></input>
                    </div>
                    <div className='add-input-child'>
                        <label>Add Price: </label>
                        <input placeholder='0' type='number' value={priceInput} min='0' step='any' onChange={inputPriceHandler}></input>
                    </div>
                </div>
                <div className='add'>
                    <button id='add-button' type='submit'>Add To Cart</button>
                </div>
            </form>
        </div>
    )
}

export default ShoppingItemInput;