"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { login } from '../../../services/authService';
import Nav from '@/components/nav';
import styles from './page.module.css'

const buttenNames = {
  Home: "/",
  Login: "login",
  Register: "register"
}

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter(); // Next.js router

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const data = await login(email, password);
      localStorage.setItem('token', data.token);
      router.push('/todo'); //todo change this to fit your app 
    } catch (err) {
      console.error('Error logging in');
    }
  };

  return (
    <main>
      <Nav buttenNames={buttenNames} />
      <div className='d-flex justify-content-center'>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            className={styles.formFiled}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            className={styles.formFiled}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className={styles.formButton}>Login</button>
          <button type="submit" className={styles.formButton}>Reset Password</button>
      </form>
      </div>
      
    </main>
    
  );
};

export default Login;
