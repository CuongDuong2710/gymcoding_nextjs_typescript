'use client'

import Link from "next/link"
import { deleteEvent } from "../lib/actions/event.action"
import { formatDateTime } from '../lib/dateformat'
import Image from 'next/image'

export default function EventCard({ event, userId }) {
    const { _id, imageUrl, title, category, description, startDateTime, organizer } = event

    return (
        <>
            <div className='card w-full bg-base-100 shadow-xl hover:shadow-2xl'>
                <figure>
                    <Image
                        src={imageUrl}
                        alt='Event Image'
                        width={1920}
                        height={1268}
                    />
                </figure>
            </div>
            <div className='card-body'>
                <h2 className='card-title'>{title}</h2>
                <div className='badge badge-secondary'>{category}</div>
                <p className='text-sm text-gray-700' >{formatDateTime(startDateTime)}</p>
                <p className='text-sm'>{description}</p>
                <div className='card-actions justify-end'>
                    {organizer._id === userId ? (
                        <>
                            <Link
                                href={`/events/${_id}/update`}
                                className='btn btn-primary'
                            >
                                Edit
                            </Link>
                            <button
                                onClick={() => document.querySelector('#delete_modal').showModal()}
                                className='btn btn-warning'
                            >
                                Delete
                            </button>
                        </>
                    ) : (
                        <>
                        <Link href={`/events/${_id}`} className='btn btn-primary'>
                            Learn more
                        </Link>
                        </>   
                    )}
                </div>
            </div>
        </>
    )
}