import React, { useState } from 'react';

function UserForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email) {
      setError('Both name and email are required!');
      return;
    }

    const newUser = { name, email };
    setUsers([...users, newUser]);

    setName('');
    setEmail('');
    setError('');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h1>Add User</h1>

      <form 
      class=" ml-16 " 
       onSubmit={handleSubmit}>
        <input
          class=" bg-black "
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: '8px', margin: '5px' }}
        />
        <input
                  class=" bg-black "

          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: '8px', margin: '5px' }}
        />
        <button class="bg-" type="submit" style={{ padding: '8px 16px', margin: '5px' }}>
          Add
        </button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <h2>User List</h2>
      {users.length > 0 ? (
        users.map((user, index) => (
          <div key={index} style={{ marginBottom: '10px' }}>
            <strong>{user.name}</strong> - {user.email}
          </div>
        ))
      ) : (
        <p>No users added yet.</p>
      )}
    </div>
  );
}

export default UserForm;
