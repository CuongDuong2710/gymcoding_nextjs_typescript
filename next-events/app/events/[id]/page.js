import { getServerSession } from "next-auth";
import { getEventById } from "../../lib/actions/event.action";
import { authConfig } from "@/app/api/auth/[...nextauth]/authConfig"
import { getUserByEmail } from "../../lib/actions/user.action";
import EventDetail from "../../component/EventDetails";

export default async function SingleEvent({ params: { id }}) {
    const event = await getEventById(id)

    let userId = ''
    const data = await getServerSession(authConfig)
    if (data?.user) {
        const user = await getUserByEmail(data.user?.email)
        userId = user._id
    }
    return <EventDetail event={event} userId={userId} />
}