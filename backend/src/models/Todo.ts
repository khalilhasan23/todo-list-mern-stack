import { Schema, model, Document } from 'mongoose';

interface ITodo extends Document {
  userId: string;
  text: string;
  completed: boolean;
}

const todoSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  text: { type: String, required: true },
  completed: { type: Boolean, default: false }
});

const Todo = model<ITodo>('Todo', todoSchema);

export default Todo;
