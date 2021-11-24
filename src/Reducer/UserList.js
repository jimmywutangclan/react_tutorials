import React, { useEffect, useReducer } from 'react'

// current state and action(type/payload), dispatch action and type in a reducer
const reducer = (state, action) => {
    switch(action.type) {
        // call right before sending request, just change loading of state
        case 'USERS_REQUEST':
            return {...state, loading: true};
        case 'USERS_SUCCESS':
            // Have to delete error in case of success, since error overrides the other rendering in our return html
            return {...state, users: action.payload, loading: false, error: ''};
        case 'USERS_FAILS':
            return {...state, loading: false, error: action.payload};
        default:
            return state;
    }
};

export default function UserList() {
    // reducer, initial state(not loading, no users, no error)
    const [state, dispatch] = useReducer(reducer, {loading: false, users:[], error: ""});
    
    const {loading, error, users} = state;

    // dispatch an action, async since we dont wanta nything else that happens to wait on this
    const loadUsers = async () => {
        dispatch({type: 'USERS_REQUEST'});
        try {
            // use await promises
            const response = await fetch ('http://jsonplaceholder.typicode.com/users/');
            const data = await response.json();
            dispatch({type:'USERS_SUCCESS', payload: data});
        } catch(err) {
            dispatch({type: 'USERS_FAIL', payload: err.message});
        }  
    }

    // empty array input, run on component mount
    useEffect(() => {
        loadUsers();
    }, []);

    // loading, error, or table? show depending on the states
    return (
        <div>
            <h1>Users</h1>
            <button onClick={loadUsers}>Reload</button>
            {loading ? <div>Loading users</div> :
            error ? <div>Error: {error}</div>
            : <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.name}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>}
        </div>
    )
}
