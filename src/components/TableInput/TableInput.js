import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeResourcePrice } from '../../features/auth/authActions';
import styles from './TableInput.module.scss';


function TableInput({
    uniqueName
}) {
    const dispatch = useDispatch();

    const [price, setPrice] = React.useState(useSelector((state) => state.user.resources[uniqueName]));
    
    function updateResPriceLocal(name, price) {
        const prices = JSON.parse(localStorage.getItem('resources'));
        prices[name] = price;
        localStorage.setItem('resources', JSON.stringify(prices));

    }

    useEffect(()=> {
            dispatch(changeResourcePrice({name: uniqueName, price}))
            updateResPriceLocal(uniqueName, price)
    },[price, dispatch, uniqueName])
    

    return (
        <input value={price} onChange={(e) => setPrice(e.target.value)} className={styles.input} />
    )
}

export default TableInput;

