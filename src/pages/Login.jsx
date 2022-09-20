import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userLogin, getResourcePrice } from '../features/auth/authActions';


function Login() {

    const { isLoading, userInfo, error } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    
    const { register, handleSubmit} = useForm();

    const navigate = useNavigate();
    
    useEffect(() => {
        if(!localStorage.getItem('resources')) {
            dispatch(getResourcePrice());
        }
        if(userInfo) navigate('/')
    }, [navigate, userInfo]);

    const submitForm =  (data) => {
        dispatch(userLogin(data));
    };

    const content = 
        <section className='login'>
            <div className='form_container'>
                <h1>Login</h1>

                <form onSubmit={handleSubmit(submitForm)} className='form'>
                    {error && <p>error</p>}
                    <div className='form_line'>
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
                        <button type='submit' disabled={isLoading} >Sign In</button>
                    </div>
                </form>
            </div>
        </section>
    

    return content;
}

export default Login;