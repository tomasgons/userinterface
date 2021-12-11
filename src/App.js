import React, { useState, Fragment, } from 'react'


import './App.css';
import UserForm from './components/UserForm';

import UserList from './components/UserList';

const firstUsers = [

]


function App() {
  const [users, setUsers] = useState(firstUsers);
  // useEffect(() => {
  //   const firstUsers = localStorage.getItem('users');
  //   setUsers(firstUsers ? JSON.parse(firstUsers) : []);
  // }, [])

  const addUser = (user) => {
    setUsers(prevUsers => {
      return [user, ...prevUsers];

    })
  };

  const deleteItemHandler = userId => {
    setUsers(prevUsers => {
      const updatedUsers = prevUsers.filter(user => user.id !== userId);
      return updatedUsers;
    });
  };







  return (
    <Fragment>
      <header><h1>Userlist</h1></header>
      <div >
        <UserForm onAddUser={addUser} />
        <UserList items={users} onDeleteItem={deleteItemHandler} />
      </div>
    </Fragment>
  );
}

export default App;
