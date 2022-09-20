import axios from 'axios';
import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeResourcePrice } from '../../features/auth/authActions';
import styles from './TableInput.module.scss';


function TableInput({
    uniqueName
}) {
    const dispatch = useDispatch();

    function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
    }
    console.log(uniqueName)
    const [price, setPrice] = React.useState(useSelector((state) => state.user.resources[uniqueName]));
    
    function updateResPriceLocal(name, price) {
        const prices = JSON.parse(localStorage.getItem('resources'));
        console.log('PRCIES: ',prices)
        prices[name] = price;
        console.log('PRCIES: ',prices)
        localStorage.setItem('resources', JSON.stringify(prices));

    }

    useEffect(()=> {
            dispatch(changeResourcePrice({name: uniqueName, price}))
            updateResPriceLocal(uniqueName, price)
    },[price])
    

    return (
        <input value={price} onChange={(e) => setPrice(e.target.value)} className={styles.input} />
    )
}

export default TableInput

