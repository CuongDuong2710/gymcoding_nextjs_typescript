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

const populateEvent = query => {
    return query.populate({
        path: 'organizer',
        model: User,
        select: '_id name'
    })
}

export async function getEventById(eventId) {
    await dbConnect()

    const event = await populateEvent(Event.findById(eventId))

    if (!event) throw new Error('Event not found')

    return JSON.parse(JSON.stringify(event))
}

export async function updateEvent({ userId, event, path }) {
    await dbConnect()

    const eventToUpdate = await Event.findById(event._id)
    if (!eventToUpdate || eventToUpdate.organizer.toHexString() !== userId) {
        throw new Error('Unauthorized or event not found')
    }

    const updatedEvent = await Event.findByIdAndUpdate(
        event._id,
        {...event},
        { new: true}
    )
    revalidatePath(path)

    return JSON.parse(JSON.stringify(updatedEvent))
}

export async function deleteEvent(eventId) {
    await dbConnect()

    const deletedEvent = await Event.findByIdAndDelete(eventId)
    if (deleteEvent) revalidatePath('/', 'layout')
}

export async function getEventsByUser(userId) {
    await dbConnect()

    const conditions = { organizer: userId }

    const eventsQuery = Event.find(conditions).sort({ createdAt: 'desc' })
    
    const events = await populateEvent(eventsQuery)

    return JSON.parse(JSON.stringify(events))
}

export async function getAllEvents() {
    await dbConnect()

    const eventsQuery = Event.find({}).sort({ createdAt: 'desc' })

    const events = await populateEvent(eventsQuery)

    return JSON.parse(JSON.stringify(events))
}