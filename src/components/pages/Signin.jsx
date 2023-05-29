import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import styles from './Signin.module.css';
import { SiTwitter } from 'react-icons/si';
import { FcGoogle } from 'react-icons/fc';



const Signin = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleEmail(e) {
        setEmail(e.target.value)
    }

    function handlePassword(e) {
        setPassword(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        localStorage.setItem("Email", email);
        localStorage.setItem("Password", password);
        navigate('/home')
    }

    function handleForgotPassword() {
        navigate('/resetpassword')
    }

    return (
        <>
            <div className={styles.logoBox}>
                <SiTwitter className={styles.Twticon} />
                <h2>Sign in to Twitter</h2>
                <button>
                    <FcGoogle className={styles.Gicon} />
                    Sign in with Google
                </button>
                <hr></hr>
                <span>Or</span>
                <br />
                <form onSubmit={handleSubmit} >
                    <label  >
                        <input type="email" value={email} onChange={handleEmail} className={styles.input} placeholder="Email" />
                    </label>
                    <br />
                    <br />
                    <label>
                        <input type="password" value={password} onChange={handlePassword} className={styles.input} placeholder="Password" />
                    </label>
                    <br />
                    <button type="submit">Log in</button>
                </form>
                <button onClick={handleForgotPassword}>Forgot Password?</button>
                <p>Don't have an account?<a>Sign up</a></p>
            </div>
        </>
    )
}

export default Signin;