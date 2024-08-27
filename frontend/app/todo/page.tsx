"use client"

import React, { useEffect, useState } from 'react';
import { createTodo, getTodos } from '../../services/todoService';
import { Todo } from '../../types/todo';
import Nav from '@/components/nav';
import styles from './page.module.css'
import { CImage } from '@coreui/react';

const buttenNames = {
  Home: "/",
  Logout: "logout",
}

const Todos: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [taskDescription, setText] = useState('');
  const [title, setTitle] = useState('');

  useEffect(() => {
    const fetchTodos = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        const data = await getTodos(token);
        setTodos(data);
      }
    };

    fetchTodos();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (token) {
      const newTodo = await createTodo(title, taskDescription, token);
      setTodos([...todos, newTodo]);
      setText('');
      setTitle('');
    }
  };

  return (
    <main>
      <Nav buttenNames={buttenNames}/>
      <div className='d-flex justify-content-center'>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            placeholder="Task Title"
            value={title}
            className={styles.formFiled}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Task Description"
            rows={5}
            cols={10}
            value={taskDescription}
            onChange={(e) => setText(e.target.value)}
            className={styles.formFiled}
          >
            
          </textarea>
          <button type="submit" className={styles.formButton}>Add Todo</button>
        </form>
      </div>
      <div className='d-flex justify-content-center'>
        <div className={styles.taskDiv}>
          <img src="/book-03.jpg" alt="Book Image" />
          <div className={styles.taskInnerDiv}>
            <h2>Title</h2>
            <p>text to description of the task</p>
          </div>
          
        </div>
      </div>
      
    </main>
  );
};

export default Todos;
