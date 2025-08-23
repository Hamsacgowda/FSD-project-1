import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [authMessage, setAuthMessage] = useState('');

  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [pages, setPages] = useState('');
  const [publishedDate, setPublishedDate] = useState('');

  useEffect(() => {
    if (token) fetchBooks();
  }, [token]);

  async function fetchBooks() {
    try {
      const res = await axios.get(`${API_URL}/books`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setBooks(res.data);
    } catch {
      alert('Failed to fetch books');
    }
  }

  async function handleAuth(e) {
    e.preventDefault();
    setAuthMessage('');
    try {
      const endpoint = isLogin ? 'login' : 'register';
      const res = await axios.post(`${API_URL}/${endpoint}`, { username, password });
      if (isLogin) {
        localStorage.setItem('token', res.data.token);
        setToken(res.data.token);
      } else {
        setAuthMessage('Registered! Please login.');
        setIsLogin(true);
      }
      setUsername('');
      setPassword('');
    } catch (err) {
      setAuthMessage(err.response?.data?.message || 'Auth failed');
    }
  }

  async function handleAddBook(e) {
    e.preventDefault();
    if (!title || !author || !pages) return alert('Enter title, author and pages');
    try {
      const res = await axios.post(`${API_URL}/books`, { 
        title, author, pages: Number(pages), publishedDate: publishedDate || null
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setBooks([res.data, ...books]);
      setTitle('');
      setAuthor('');
      setPages('');
      setPublishedDate('');
    } catch {
      alert('Failed to add book');
    }
  }

  async function handleDelete(id) {
    try {
      await axios.delete(`${API_URL}/books/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setBooks(books.filter(b => b._id !== id));
    } catch {
      alert('Failed to delete');
    }
  }

  function handleLogout() {
    setToken('');
    localStorage.removeItem('token');
    setBooks([]);
  }

  if (!token) {
    return (
      <div style={{ maxWidth: 400, margin: 'auto' }}>
        <h2>{isLogin ? 'Login' : 'Register'}</h2>
        <form onSubmit={handleAuth}>
          <input value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" />
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
          <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
        </form>
        <p style={{ color: 'red' }}>{authMessage}</p>
        <button onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Switch to Register' : 'Switch to Login'}
        </button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 600, margin: 'auto', padding: 20 }}>
      <h1>My Book Shop</h1>
      <button onClick={handleLogout}>Logout</button>
      <form onSubmit={handleAddBook}>
        <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Book Title" />
        <input value={author} onChange={e => setAuthor(e.target.value)} placeholder="Author" />
        <input type="number" value={pages} onChange={e => setPages(e.target.value)} placeholder="Pages" />
        <input type="date" value={publishedDate} onChange={e => setPublishedDate(e.target.value)} placeholder="Published Date (optional)" />
        <button type="submit">Add Book</button>
      </form>
      <ul>
        {books.map(b => (
          <li key={b._id}>
            <b>{b.title}</b> by {b.author} — {b.pages} pages {b.publishedDate ? `(Published: ${new Date(b.publishedDate).toLocaleDateString()})` : ''}
            <button onClick={() => handleDelete(b._id)} style={{ marginLeft: 10 }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
