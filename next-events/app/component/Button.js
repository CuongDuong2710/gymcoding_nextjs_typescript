'use client'

import { useEffect, useState } from "react"

export default function Button() {
    const [users, setUsers] = useState([])

    useEffect(function() {
        fetchUser()
    }, [])

    async function fetchUser() {
        const userData = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await userData.json()
        setUsers(users)
    }

    return (
        <>
        <button
            className='btn btn-primary'
        >
            Get Users
        </button>
        <ul>
            {users.map(user => {
                return <li key={user.id}>{user.name}</li>
            })}
        </ul>
        </>
    )
}