import React,{ useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from './Header.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../features/auth/userSlice.js';
import {deleteInfo} from '../../features/info/infoSlice.js'
import jwtDecode from 'jwt-decode';

function Header() {
    
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    // Logout function
    const handleLogout = () => {
        dispatch(deleteInfo());
        // Call logout() funciton
        dispatch(logout());
        // Navigate to home('/')
        navigate('/')
    }

    useEffect(() => {
        const user = localStorage.getItem("userToken");
        if (user) {
          const decodedJwt = jwtDecode(user);
          if (decodedJwt.exp * 1000 < Date.now()) {
            handleLogout();
          }
        }
    },[location]);

    // Get userInfo from state to check if user logged in
    // Otherwise some option will not be allowed
    const { userInfo } = useSelector((state) => state.user);

    return (
        <header className={styles.header}>
            <Link to="/">
                <div>
                    <h3 className={styles.logo_text}>Albion crafter</h3>
                </div>
            </Link>

            <ul>
                <Link to={ userInfo ? "/craft" : "#"} >
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