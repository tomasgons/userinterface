import React, { useState } from 'react'


import './App.css';
import UserForm from './components/UserForm';

import UserList from './components/UserList';

const firstUsers = [
  {
    id: 'e1',
    name: 'Tomas',
    age: 44
  },
  {
    id: 'e2',
    name: 'Jimi',
    age: 77
  },
  {
    id: 'e3',
    name: 'Frank',
    age: 53
  }
]


function App() {
  const [users, setUsers] = useState(firstUsers);


  const addUser = (user) => {
    setUsers(prevUsers => {
      return [user, ...prevUsers]

    })
  };

  const deleteItemHandler = userId => {
    setUsers(prevUsers => {
      const updatedUsers = prevUsers.filter(user => user.id !== userId);
      return updatedUsers;
    });
  };







  return (
    <div className="App">



      <UserForm onAddUser={addUser} />
      <UserList items={users} onDeleteItem={deleteItemHandler} />


    </div>
  );
}

export default App;
