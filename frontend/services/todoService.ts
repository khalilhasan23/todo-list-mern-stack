import api from './api';
//todo update this file to fit your app for example change the the urls 
export const createTodo = async (titel: string, taskDescription: string, token: string) => {
  const response = await api.post('/todos', { titel, taskDescription }, {
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
