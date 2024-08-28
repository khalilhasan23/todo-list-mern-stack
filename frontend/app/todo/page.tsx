"use client"

import React, { useEffect, useState } from 'react';
import { createTodo, getTodos } from '../../services/todoService';
import { Todo } from '../../types/todo';
import Nav from '@/components/nav';
import styles from './page.module.css'
import { CCol, CCollapse, CContainer, CImage, CNavbar, CNavbarBrand, CNavbarNav, CNavbarToggler, CRow } from "@coreui/react";

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
      <Nav buttenNames={buttenNames} />
      <CContainer  className='d-flex justify-content-center'>
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
          <button type="submit" className={styles.formButton}>Add Task</button>
        </form>
      </CContainer>

      <div className='d-flex justify-content-center'>
        <div className={styles.tasksSaperator}>

        </div>
      </div>

      <CContainer className='mt-2 mb-5'>
        <CRow>
          <CCol xs={2} className='d-flex justify-content-start'>
            <div className={styles.toDone}>To-Do</div>
          </CCol>
          <CCol xs={10}></CCol>
        </CRow>
      </CContainer>

      {todos.map((element) => (
        <CContainer key={element.title} className='mb-5'>
          <div className={styles.taskDiv}>
              <img src="/book-03.jpg" alt="Book Image" />
              <div className={styles.taskInnerDiv}>
                <h2>{element.title}</h2>
                <p>{element.description}</p>
            </div>
            <div className={`${styles.taskButton} d-flex justify-content-end`}>
                <button className={`${styles.formButton} mx-3`}>Completed</button>
                <button className={`${styles.formButton} mx-3`}>Delete</button>
            </div>
          </div>
        </CContainer>
      ))}

      <div className='d-flex justify-content-center'>
        <div className={styles.tasksSaperator}>
        </div>
      </div>

      <CContainer className='mt-2 mb-5'>
        <CRow>
          <CCol xs={1} className='d-flex justify-content-center'>
            <div className={styles.done}>Done</div>
          </CCol>
          <CCol xs={11}></CCol>
        </CRow>
      </CContainer>

      {todos.map((element) => (
        <CContainer className='mb-5' key={element.title}>
          <div className={styles.taskDoneDiv}>
            <img src="/book-03.jpg" alt="Book Image" />
            <div className={styles.taskInnerDiv}>
              <h2>{element.title}</h2>
              <p>{element.description}</p>
            </div>
            <div className={`${styles.taskButton} d-flex justify-content-end`}>
                <button className={`${styles.doneButton} mx-3`}>Undo</button>
                <button className={`${styles.doneButton} mx-3`}>Delete</button>
            </div>
          </div>
        </CContainer>
      ))}
      

    </main>
  );
};

export default Todos;
