import React, { useState } from 'react';
import Modal from './Modal';
function UserForm(props) {

    const [enteredName, setEnteredName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const [isModal, setModal] = useState('modalcontainer');
    const [textModal, setTextModal] = useState('modalcontainer');

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
            setModal('modalcontaineropen')
            setTextModal("Please enter a valid name and age (no empty input field)")
            return;
        }
        if (enteredAge < 0) {
            setModal('modalcontaineropen')
            setTextModal("Please enter a valid age (> 0)")
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
    const resetModal = (event) => {
        event.preventDefault();
        setModal('modalcontainer');
        setEnteredName('');
        setEnteredAge('');
        console.log('check');
    }



    return (

        <form onSubmit={submitHandler} className="userform" >
            <div className="">
                <h1>UserList</h1>
                <div className="">
                    <label>Name </label>
                    <input type="text" value={enteredName} onChange={nameChangeHandler} />
                </div>
                <div className="">
                    <label>Age </label>
                    <input type="number" value={enteredAge} onChange={ageChangeHandler} />
                </div>
                <div className="">
                    <button type="submit">Add User</button>
                </div>
            </div>
            <Modal className={isModal} onClick={resetModal} text={textModal} />
        </form>

    )
}

// isValid ? 'modalcontainer' : 'modalcontaineropen'

export default UserForm