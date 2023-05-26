import { useEffect, useState } from 'react';
import axios from 'axios';

const TodoTwo = () => {
  const [todos, setTodos] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchTodos();
  }, [page]);

  const fetchTodos = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=10`
      );
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  return (
    <div>
      <h1>Todos 2</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
      <div>
        <button onClick={handlePreviousPage} disabled={page === 1}>
          Previous Page
        </button>
        <button onClick={handleNextPage}>Next Page</button>
      </div>
    </div>
  );
};

export default TodoTwo;
