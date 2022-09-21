import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeResourcePrice } from '../../features/info/infoActions.js';
import styles from './TableInput.module.scss';

// Input component for Recources Table in Modal
// Component takes uniqueName of an item 
function TableInput({
    uniqueName
}) {
    const dispatch = useDispatch();

    // State for input
    // Initial state is taken from user state(redux)
    const [price, setPrice] = React.useState(useSelector((state) => state.info.resources[uniqueName]));
    
    // Function to update price of an item "uniqueName" in localStorage
    function updateResPriceLocal(name, price) {
        const prices = JSON.parse(localStorage.getItem('resources'));
        prices[name] = price;
        localStorage.setItem('resources', JSON.stringify(prices));
    }

    // Hook to store price of an item when input value changes
    // Need to change to block first render -----------------================---------------
    useEffect(()=> {
        // Sending request to change price of item with uniqueName
        dispatch(changeResourcePrice({name: uniqueName, price}))
        // Update same info in localStorage
        updateResPriceLocal(uniqueName, price)
    },[price, dispatch, uniqueName])
    

    return (
        <input value={price} onChange={(e) => setPrice(e.target.value)} className={styles.input} />
    )
}

export default TableInput;

