import { Request, Response } from 'express';
import Todo from '../models/Todo';
import { AuthenticatedRequest } from '../types/express';

const createTodo = async (req: AuthenticatedRequest, res: Response) => { //todo use the req: Request instate of req: AuthenticatedRequest
  const { text } = req.body;
  try {
    const todo = new Todo({
      userId: req.user?.id,
      text
    });

    await todo.save();

    res.status(201).json(todo);
  } catch (err) {
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

export { createTodo, getTodos };
