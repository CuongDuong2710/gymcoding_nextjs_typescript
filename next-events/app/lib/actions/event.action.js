'use server'

import { revalidatePath } from "next/cache"
import { dbConnect } from "../dbConnect"
import Event from "../models/event.model"
import User from "../models/user.model"

export async function createEvent(userId, event, path) { // http://localhost:3000/events/create

    await dbConnect()

    const organizer = await User.findById(userId)
    if (!organizer) throw new Error('Organizer is not found')

    const newEvent = await Event.create({
        ...event,
        organizer: userId
    })
    revalidatePath(path)

    return JSON.parse(JSON.stringify(newEvent))
}