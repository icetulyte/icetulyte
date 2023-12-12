'use client'

import { useState } from 'react';
import styles from './sign-up.module.css';
import { useRouter } from 'next/navigation';

const SignUpPage = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setpasswordValue] = useState('');
    const [confirmPasswordValue, setConfirmPasswordValue] = useState('');

    const router = useRouter();

    const onSignUpClicked = async () => {
        alert('Sign up not implemented yet');
    }
    return (
        <div className={styles.inputs}>
            <h1>Sign up</h1>
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
            <input 
                type="password"
                placeholder="password"
                value={confirmPasswordValue}
                onChange={e => setConfirmPasswordValue(e.target.value)}
            />
            <hr />
            <button
                disabled={
                    !emailValue || !passwordValue || passwordValue !== confirmPasswordValue
                }
                onClick={onSignUpClicked}
            >
                Sign up
            </button>
            <button
                onClick={() => router.push('login')}
            >
                Already have an account? Log In
            </button>
        </div>
    )
}

export default SignUpPage;