import React, { useState } from 'react';
import Modal from './Modal'
import Card from './Card';

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
        setEnteredName('')
        setEnteredAge('')

    }



    return (
        <Card>
            {error && < Modal title={error.title} message={error.message} onClick={errorHandler} />}
            <form onSubmit={submitHandler} className="userform" >
                <div >
                    <h2>enter your details here</h2>
                    <p>no empty fields and no negative age, try it out</p>
                    <div>
                        <label>Name </label>
                        <input type="text" value={enteredName} onChange={nameChangeHandler} />
                    </div>
                    <div >
                        <label>Age (Years)</label>
                        <input type="number" value={enteredAge} onChange={ageChangeHandler} />
                    </div>
                    <div className="">
                        <button type="submit">Add User</button>
                    </div>
                </div>

            </form>
        </Card>

    )
}



export default UserForm