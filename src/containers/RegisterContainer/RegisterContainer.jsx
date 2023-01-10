import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../features/auth/authActions';
import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import styles from './RegisterContainer.module.scss'

function RegisterContainer() {

    const { isLoading, userInfo, error } = useSelector((state) => state.user)

    const dispatch = useDispatch();

    const { register, handleSubmit} = useForm();

    const navigate = useNavigate();

    useEffect(() => {
        if(userInfo) navigate('/')
    }, [navigate, userInfo]);

    const submitForm = (data) => {
        dispatch(registerUser(data));
    }
    return (
        <>
        <div className={styles.main} >
            <section className={styles.login}>
                <div className={styles.form_container}>
                    <h1>Register</h1>

                    <form onSubmit={handleSubmit(submitForm)}  className={styles.form}>
                        <div className={styles.form_line}>
                            <input 
                                type='text'
                                {...register('username')}
                                placeholder='   username'
                                required
                            />
                            <input 
                                type='password'
                                {...register('password')}
                                placeholder='   password'
                                required
                            />
                            <button type='submit' disabled={isLoading} >
                                Sign Up
                            </button>
                        </div>
                        
                        <div className={styles.errorMessage}>
                            {error && <p>{error}</p>}
                        </div>
                    </form>
                </div>
                
            </section>
        </div>
        
        </>
        
    )
}

export default RegisterContainer;