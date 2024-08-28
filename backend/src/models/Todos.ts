import { Schema, model, Document } from 'mongoose';

interface ITodo extends Document {
    userId: any;
    titel: string;
    taskDescription: string;
    completed: boolean;
}

const todoSchema = new Schema<ITodo>({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    titel: { type: String, required: true },
    taskDescription: { type: String, required: true },
    completed: { type: Boolean, required: true },
});

const Todo = model<ITodo>('Todo', todoSchema);

export default Todo;
