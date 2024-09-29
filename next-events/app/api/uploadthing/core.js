import { createUploadthing } from "uploadthing/next";

import { getServerSession } from "next-auth";
import { authConfig } from "../auth/[...nextauth]/authConfig";
import { metadata } from "@/app/layout";
import { compareSync } from "bcrypt";

const uploadBuilder = createUploadthing() // return an uploadBuilder function. This will be used to create a route

// Auth function is to check on server session and return the user session
const auth = async () => {
    const session = await getServerSession(authConfig)
    return session
}

// UTRouter constant that will serve as UploadThing's route configuration:
export const UTRouter = {
    imageUploader: uploadBuilder({ image: { maxFileSize: '4MB' } })
        // set permissions and file types for this FileRoute
        .middleware(async () => {
            const session = await auth()

            // If you throw, the user will not be able to upload
            if (!session) throw new Error('Unauthorized')

            return { userEmail: session.user?.email }
        })
        .onUploadComplete(async ({ metadata, file }) => {
            // This code RUNS ON YOUR SERVER after upload
            console.log('Upload complete for user: ', metadata.userEmail)
            console.log('file url: ', file.url)
            return { uploadedBy: metadata.userEmail }
        })
}
