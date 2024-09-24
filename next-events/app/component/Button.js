'use client'

import { useState } from "react"
import { getUser } from "../lib/actions/action"

export default function Button() {
    const [users, setUsers] = useState([])

    async function fetchUser() {
        const users = await getUser()
        setUsers(users)
    }

    return (
        <>
        <button
            className='btn btn-primary'
            onClick={fetchUser}
        >
            Get Users
        </button>
        <ul>
            {users.map(user => {
                return <li>{user.name}</li>
            })}
        </ul>
        </>
    )
}