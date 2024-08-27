"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { register } from '../../../services/authService';
import Nav from '@/components/nav';
import styles from './page.module.css'

const buttenNames = {
  Home: "/",
  Login: "login",
  Register: "register",
}

const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await register(username, email, password);
      router.push('/auth/login');
    } catch (err) {
      console.error('Error registering');
    }
  };

  return (
    <main>
      <Nav buttenNames={buttenNames} />
      <div className='d-flex justify-content-center'>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            className={styles.formFiled}
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className={styles.formFiled}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className={styles.formFiled}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className='d-flex justify-content-center'>
            <button type="submit" className={styles.formButton}>Register</button>
          </div>
        </form>
      </div>
      
    </main>
  );
};

export default Register;
