import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import Users from './Users';
import { searchUsers } from '../../api';

const Search = () => {
  const [text, setText] = useState('');
  const [users, setUsers] = useState([]);
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const query = new URLSearchParams(location.search).get('q');
    if (query) {
      setText(query);
      searchUsers(query).then(setUsers);
    }
  }, [location.search]);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (text === '') {
      alert('Please enter something');
    } else {
      history.push(`/?q=${text}`);
      try {
        const data = await searchUsers(text);
        setUsers(data);
        setText('');
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  };

  const onChange = (e) => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search User"
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-success btn-block"
        />
      </form>
      {users.length > 0 && (
        <button className="btn btn-danger btn-block" onClick={() => setUsers([])}>
          Clear
        </button>
      )}
      <Users users={users} />
    </div>
  );
};

export default Search;
