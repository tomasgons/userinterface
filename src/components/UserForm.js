import React, { useState, useRef } from 'react';
import Modal from './Modal'
import Card from './Card';

function UserForm(props) {

    const nameInputRef = useRef();
    const ageInputRef = useRef();




    const [error, setError] = useState('');




    const submitHandler = (event) => {
        event.preventDefault();
        const enteredUserName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;
        if (enteredUserName.trim().length === 0 || enteredUserAge.trim().length === 0) {
            setError(
                {
                    title: 'Invalid input',
                    message: "Please enter a valid name and age (no empty input field)"
                }
            )
            return;
        }
        if (+enteredUserAge < 0) {
            setError(
                {
                    title: 'Invalid age',
                    message: "Please enter a positive age ( > 0 )"
                }
            )
            return;
        }
        const userData = {
            name: enteredUserName,
            age: enteredUserAge,
            id: Math.random().toString()
        };

        props.onAddUser(userData);
        nameInputRef.current.value = ('')
        ageInputRef.current.value = ('')

        localStorage.setItem('Name', userData.name);
        localStorage.setItem('Age', userData.age)
    }
    const errorHandler = () => {
        setError(null);
        // nameInputRef.current.value = ('')
        // ageInputRef.current.value = ('')


    }

    return (
        <Card>
            {error && < Modal title={error.title} message={error.message} onClick={errorHandler} />}
            <form onSubmit={submitHandler} className="userform" >
                <div >
                    <h2>enter your details here</h2>
                    <div>
                        <label>Name </label>
                        <input type="text"

                            ref={nameInputRef} />
                    </div>
                    <div >
                        <label>Age (Years)</label>
                        <input type="number"

                            ref={ageInputRef} />
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