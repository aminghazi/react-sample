import { useEffect, useState } from 'react';
import axios from 'axios';

const TodoThree = () => {
  const [todos, setTodos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchTodos();
  }, [currentPage]);

  const fetchTodos = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/todos?_page=${currentPage}&_limit=10`
      );
      setTodos(response.data);
      const totalCount = response.headers['x-total-count'];
      const totalPages = Math.ceil(totalCount / 10);
      setTotalPages(totalPages);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageClick(i)}
          disabled={i === currentPage}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
      <div>
        {renderPageNumbers()}
      </div>
    </div>
  );
};

export default TodoThree;
