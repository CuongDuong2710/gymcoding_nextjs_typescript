import { getServerSession } from "next-auth"
import { authConfig } from "../api/auth/[...nextauth]/authConfig"
import { getUserByEmail } from "../lib/actions/user.action"
import UserForm from "../component/UserForm"
import { getEventsByUser } from "../lib/actions/event.action"


export default async function Profile() {
    let events = []
    let userId;
    let user = {}

    const data = await getServerSession(authConfig)
    if (data?.user) {
        user = await getUserByEmail(data.user?.email)
        userId = user._id
        events = await getEventsByUser(userId)
    }

    return (
        <>
            <div className='py-12 px-4 mx-auto max-w-3xl'>
                <h2 className='mb-4 text-3xl font-bold'>My profile</h2>
                <UserForm user={user} />
            </div>
            <div className='py-12 px-4 mx-auto max-w-6xl'>
                <h2 className='mb-4 text-3xl font-bold'>My Events</h2>
                <div className='grid lg:grid-cols-3 gap-4 mt-12'>
                    {events.map(event => {
                        return <h2>{event.description}</h2>
                            // <EventCard event={event} userId={userId} key={event._id} />
                    })}
                </div>
            </div>
        </>
    )
}