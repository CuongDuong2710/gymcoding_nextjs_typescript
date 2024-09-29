
'use server'

import { dbConnect } from "../dbConnect"
import User from "../user.model"
import bcrypt from 'bcrypt'
import { revalidatePath } from "next/cache"

export async function createUser(user) {
    await dbConnect()

    const passwordHash = await bcrypt.hash(user.password, 10)

    const newUser = await User.create({
        ...user,
        password: passwordHash
    })

    return JSON.parse(JSON.stringify(newUser))
}

export async function getUserByEmail(userEmail) {
    await dbConnect()

    const user = await User.findOne({email: userEmail})

    if (!user) throw new Error('User Not Found')
    return JSON.parse(JSON.stringify(user))

}

export async function updateUser(userId, user) {
    await dbConnect()

    const updatedUser = await User.findByIdAndUpdate(
        userId,
        {...user},
        { new: true }
    )

    if (!updateUser) throw new Error('User Update Failed')
    
    revalidatePath('/profile') // when update is done, refresh the Profile page
    return JSON.parse(JSON.stringify(updatedUser))
}