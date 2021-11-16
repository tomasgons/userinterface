import React from 'react';
import UserItem from './UserItem'


function UserList(props) {


    return (

        <ul className='userlist'> {props.items.map((user) => (
            <UserItem key={user.id}
                id={user.id}
                name={user.name}
                age={user.age}
                onDelete={props.onDeleteItem} />
        ))
        }

        </ul>
    )

}

export default UserList;
