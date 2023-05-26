import { useEffect, useState } from 'react';
import axios from 'axios';

const TodoThree = () => {
  const [todos, setTodos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [sortBy, setSortBy] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchTodos();
  }, [currentPage, sortBy]);

  const fetchTodos = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/todos?_page=${currentPage}&_limit=10${
          sortBy ? `&_sort=${sortBy}` : ''
        }`
      );
      setTodos(response.data);
      const totalCount = response.headers['x-total-count'];
      const totalPages = Math.ceil(totalCount / 10);
      setTotalPages(totalPages);
    } catch (error) {
      console.error('Error fetching todos:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
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
      <div>
        <label>
          Sort by:
          <select value={sortBy} onChange={handleSortChange}>
            <option value="">None</option>
            <option value="title">Title</option>
            <option value="id">ID</option>
          </select>
        </label>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      )}
      <div>
        {renderPageNumbers()}
      </div>
    </div>
  );
};

export default TodoThree;
