import bcrypt from 'bcrypt'
import Credentials from 'next-auth/providers/credentials'
import { getUserByEmail } from '@/app/lib/actions/user.action'

export const authConfig = {
    pages: {
        signIn: '/login',
    },
    providers: [
        Credentials({
            async authorize(credentials) {
                const email = credentials?.email.toLowerCase()
                const password = credentials?.password

                const user = await getUserByEmail(email) // get from database
                if (user && (await bcrypt.compare(password, user.password))) {
                    return user
                }
                return null
            }
        })
    ],
    callbacks: {
        jwt({ token, trigger, session }) { // session is the object you passed into the update() function in UserForm.js
            if (trigger === 'update' && session) {
                token.name = session.name
                token.picture = session.image
            }
            return token
        }
    }
}