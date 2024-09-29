import { getServerSession } from "next-auth"
import { authConfig } from "../api/auth/[...nextauth]/authConfig"
import { getUserByEmail } from "../lib/actions/user.action"
import UserForm from "../component/UserForm"


export default async function Profile() {
    let user = {}

    const data = await getServerSession(authConfig)
    if (data?.user) {
        user = await getUserByEmail(data.user?.email)
    }

    return (
        <>
            <div className='py-12 px-4 mx-auto max-w-3xl'>
                <h2 className='mb-4 text-3xl font-bold'>My profile</h2>
                <UserForm user={user} />
            </div>
        </>
    )
}