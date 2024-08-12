import api from './api';

export const createTodo = async (text: string, token: string) => {
  const response = await api.post('/todos', { text }, {
    headers: {
      'x-auth-token': token
    }
  });
  return response.data;
};

export const getTodos = async (token: string) => {
  const response = await api.get('/todos', {
    headers: {
      'x-auth-token': token
    }
  });
  return response.data;
};
