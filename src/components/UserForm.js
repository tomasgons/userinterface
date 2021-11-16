import React, { useState } from 'react';
import Modal from './Modal';
function UserForm(props) {

    const [enteredName, setEnteredName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const [error, setError] = useState('');


    const nameChangeHandler = (event) => {
        if (event.target.value.trim().length > 0) {
        }

        setEnteredName(event.target.value);

    };
    const ageChangeHandler = (event) => {
        if (event.target.value.trim().length > 0)
            setEnteredAge(event.target.value);

    };

    const submitHandler = (event) => {
        event.preventDefault();
        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError(
                {
                    title: 'Invalid input',
                    message: "Please enter a valid name and age (no empty input field)"
                }
            )
            return;
        }
        if (+enteredAge < 0) {
            setError(
                {
                    title: 'Invalid age',
                    message: "Please enter a positive age ( > 0 )"
                }
            )
            return;
        }
        const userData = {
            name: enteredName,
            age: enteredAge,
            id: Math.random().toString()
        };

        props.onAddUser(userData);

        setEnteredName('')
        setEnteredAge('')


    }
    const errorHandler = () => {
        setError(null);

    }



    return (

        <form onSubmit={submitHandler} className="userform" >
            <div className="">
                <h1>UserList</h1>
                <p>no empty fields and no negative age, try it out</p>
                <div className="">
                    <label>Name </label>
                    <input type="text" value={enteredName} onChange={nameChangeHandler} />
                </div>
                <div className="">
                    <label>Age (Years)</label>
                    <input type="number" value={enteredAge} onChange={ageChangeHandler} />
                </div>
                <div className="">
                    <button type="submit">Add User</button>
                </div>
            </div>
            {error && < Modal title={error.title} message={error.message} onClick={errorHandler} />}
        </form>

    )
}



export default UserForm