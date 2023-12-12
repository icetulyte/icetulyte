'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './login.module.css';

const LogInPage = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const router = useRouter();

    const onLogInClicked = async () => {
        alert('Log in not implemented yet');
    }
    return (
        <div className={styles.inputs}>
            <h1>Log in</h1>
            {errorMessage && (<div className="fail">{errorMessage}</div>)}
            <input
                type="email"
                placeholder="someone@gmail.com"
                value={emailValue}
                onChange={e => setEmailValue(e.target.value)}
            />
            <input 
                type="password"
                placeholder="password"
                value={passwordValue}
                onChange={e => setPasswordValue(e.target.value)}
            />
            <hr />
            <button
                disabled={!emailValue || !passwordValue}
                onClick={onLogInClicked}
            >
                Log in
            </button>
            <button
                onClick={() => router.push('forgot-password')}
            >
                Forgot your password
            </button>
            <button
                onClick={() => router.push('sign-up')}
            >
                Don't have an account? Sign Up
            </button>
        </div>
    )
}

export default LogInPage;