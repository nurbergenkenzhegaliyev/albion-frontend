import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Header.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { logout } from '../../features/auth/userSlice';

function Header() {
    
    const { userInfo, userToken } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    let loggedIn = false;
    if(userToken) { loggedIn = !loggedIn }
    // useEffect(() => {
    //     if (userToken) {
            // dispatch(getUsers())
    //     }
    // }, [userToken, dispatch]);

    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate('/')
    }

    return (
        <header className={styles.header}>
            <Link to="/">
                <div>
                    <h3 className={styles.logo_text}>Albion crafter</h3>
                </div>
            </Link>

            <ul>
                <Link to={ loggedIn ? "/craft" : "#"} >
                    <li>
                        Craft
                    </li>
                </Link>
                <Link to="/">
                    <li>
                        home
                    </li>
                </Link>
                <Link to="/">
                    <li>
                        home
                    </li>
                </Link>
            </ul>

            {userInfo ? (
                <div className={styles.auth_container}>
                    <span>
                        {userInfo.username}
                    </span>
                    <button onClick={handleLogout} className={styles.auth}>
                        Logout
                    </button>
                </div>
            ) : (
                <div className={styles.auth_container}>
                    <Link to="/login">
                        <span className={styles.auth}>
                            Login
                        </span>
                    </Link>
                    <Link to="/register">
                        <span className={styles.auth}>
                            Register
                        </span>
                    </Link>
                </div>
            )} 
                
        </header>
    )
}

export default Header;