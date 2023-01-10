import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userLogin } from '../../features/auth/authActions';
import { getCraftingItems, getResourcePrice } from '../../features/info/infoActions';
import styles from './LoginContainer.module.scss'

export default React.memo(function LoginContainer() {
    console.log(1)
    const { userInfo, error } = useSelector((state) => state.user);
    const { register, handleSubmit} = useForm();

    const dispatch = useDispatch();
    const navigate = useNavigate();
    

    if(userInfo) {

        dispatch(getResourcePrice());
        dispatch(getCraftingItems());

        navigate('/')
    }

    const submitForm =  (data) => {
        dispatch(userLogin(data));
    };

    const content = 
        <div className={styles.main} >
            <div className={styles.login}>
                <div className={styles.form_container}>

                    <h1>Login</h1>

                    <form onSubmit={handleSubmit(submitForm)} className={styles.form}>
                        <div className={styles.form_line}>
                            <input
                                type='text'
                                {...register('username')}
                                placeholder='username'
                                required
                            />
                            <input
                                type='password'
                                {...register('password')}
                                placeholder='password'
                                required
                            />
                            <button type='submit'>Sign In</button>
                        </div>
                        <div className={styles.errorMessage}>
                            {error && <p>{error}</p>}
                        </div>
                    </form>

                </div>
            </div>
        </div>
        
    

    return content;
})

