import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../features/auth/authActions';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Register() {

    const { isLoading, userInfo, error, success } = useSelector((state) => state.user)

    const dispatch = useDispatch();

    const { register, handleSubmit} = useForm();

    const navigate = useNavigate();

    useEffect(() => {
        if(success) navigate('/login')

        if(userInfo) navigate('/')
    }, [navigate, userInfo, success]);

    const submitForm = (data) => {
        dispatch(registerUser(data));
    }
    return (
        <>
        <section className='login'>
            <div className='form_container'>
                <h1>Register</h1>

                <form onSubmit={handleSubmit(submitForm)}  className='form'>
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
                        <button type='submit' disabled={isLoading} >
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
            
        </section>
        </>
        
    )
}

export default Register;