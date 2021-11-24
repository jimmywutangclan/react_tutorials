import React, { useEffect, useState } from 'react'

export default function UserInfo() {
    const [userId, setUserId] = useState(1);
    const [user, setUser] = useState({});
    
    const userChange = (event) => {
        setUserId(event.target.value);
    }

    // [], the second arg, is the dependent values that causes this effect to refresh, change in that value causes refresh
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/' + userId).then((response) => response.json()).then(data => {
            setUser(data);
        });
        return () => {
            console.log("Done on new reload");
        }
    }, [userId]);

    return (
        <div>
            <div>
                <input type="text" value={userId} onChange={userChange} />
                <h2>Username: {user.name}</h2>
                <h2>Email: {user.email}</h2>
            </div>
        </div>
    )
}
