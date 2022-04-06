import { useState } from 'react';
import './Card.css';
import ShoppingListHeader from './permanent/ShoppingListHeader';
import ShoppingCardTitle from './permanent/ShoppingCardTitle';
import ShoppingListItem from './list/ShoppingListItem';
import ShoppingListTotal from './list/ShoppingListTotal';
import ShoppingItemInput from './input/ShoppingItemInput';
import Signature from './permanent/Signature'


const DUMMY_DATA = [
    {
        id: 's1',
        title: 'Spoon',
        quantity: 2,
        price: 1.99,
    },
    {
        id: 's2',
        title: 'Fork',
        quantity: 4,
        price: 1.80,
    },
    {
        id: 's3',
        title: 'Plate',
        quantity: 2,
        price: 2.80,
    }
]


const Card = () => {

    const [data, setData] = useState(DUMMY_DATA);

    const dataHandler = (item) => {
        setData([
            item, ...data
        ])
    }


    // Delete Handler
    const onDeleteHandler = (id) => {
        const filteredItem = data.filter((item) => item.id !== id)
        setData(filteredItem);
    }

    return (
        <div className='card'>
            <ShoppingCardTitle />
            <ShoppingItemInput recivedData={dataHandler} />
            <ShoppingListHeader />
            <ShoppingListItem items={data} deleteHandler={onDeleteHandler} />
            <ShoppingListTotal items={data} />
            <Signature />
        </div>
    ); 
}

export default Card;