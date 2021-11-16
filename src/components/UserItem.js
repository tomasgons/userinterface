import React from 'react';

function UserItem(props) {

    const deleteHandler = () => {
        // setDeleteText('(Deleted!)');
        props.onDelete(props.id);
    };

    return (


        <div className='useritem' >
            <p>Name: {props.name} </p>
            <p >Age: {props.age} years old</p>
            <button onClick={deleteHandler}>DELETE</button>


        </div>

    )
}


export default UserItem;