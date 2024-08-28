import { Router } from 'express';
import authMiddleware from '../middlewares/authMiddleware';
import { createTodo, deleteTodo, getTodos, updateTodo } from '../controllers/todoController';

const router = Router();

router.post('/', authMiddleware, createTodo); 
router.get('/', authMiddleware, getTodos); 
router.put('/', authMiddleware, updateTodo); 
router.delete('/:id', authMiddleware, deleteTodo); 

export default router;
