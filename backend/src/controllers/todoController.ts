import { Request, Response } from 'express';
import Todo from '../models/Todos';
import { AuthenticatedRequest } from '../types/express';

const createTodo = async (req: AuthenticatedRequest, res: Response) => {
    const { titel, taskDescription } = req.body;
    
    try {
        const todo = new Todo({
            userId: req.user?.id,
            titel,
            taskDescription,
            completed: false
        });
        
        await todo.save();
        res.status(201).json(todo);
    } catch (err) {
        console.log(err);
        
        res.status(500).json({ message: 'Server error' });
    }
};

const updateTodo = async (req: AuthenticatedRequest, res: Response) => {
    const { todo } = req.body;
    
    try {
        const updatedProduct = await Todo.findByIdAndUpdate(
            todo._id,
            { titel: todo.titel, taskDescription: todo.taskDescription, completed: todo.completed}, 
        );
        if (!updatedProduct) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.status(201).json(updatedProduct);
    } catch (err) {
        console.log(err);
        
        res.status(500).json({ message: 'Server error' });
    }
};

const deleteTodo = async (req: AuthenticatedRequest, res: Response) => {
    const { id } = req.params; 

    try {
        const todo = await Todo.findByIdAndDelete(id); 
        
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }

        res.status(200).json({ message: 'Todo deleted successfully' }); 
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' }); 
    }
};

const getTodos = async (req: AuthenticatedRequest, res: Response) => {
    try {
        const todos = await Todo.find({ userId: req.user?.id });
        res.status(200).json(todos);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

export { createTodo, getTodos, updateTodo, deleteTodo };