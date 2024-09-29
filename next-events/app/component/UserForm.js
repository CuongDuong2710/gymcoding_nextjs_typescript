'use client'

import { useForm, Controller } from "react-hook-form" // Controller component is used to control custom component like the ImageUploader component
import { useState } from "react"
import { updateUser } from "../lib/actions/user.action"
import { useUploadThing } from "../lib/uploadthing"
import { ImageUploader } from "./ImageUploader"
import { toast } from "react-hot-toast"

export default function UserForm({ user }) {
    const [files, setFiles] = useState([])

    const { register, handleSubmit, control, formState: { errors } } = useForm({ defaultValues: user })

    const { startUpload } = useUploadThing('imageUploader') // need to pass the route slug that's going to be used when we upload the image

    const doSubmit = async values => {
        let uploadedImageUrl = values.imageUrl

        if (files.length > 0) {
            const uploadedImage = await startUpload(files)

            if (!uploadedImage) {
                return
            }
            uploadedImageUrl = uploadedImage[0].url
        }
        try {
            const updatedUser = await updateUser(user._id, {
                ...values,
                imageUrl: uploadedImageUrl
            })

            if (updatedUser) {
                toast.success('User Updated')
            }
        } catch (error) {
            toast.error('User Update Error')
            console.log(error)
        }
    }

    return (
        <form onSubmit={handleSubmit(doSubmit)}>
            <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
                <div className='form-control'>
                    <label htmlFor='name' className='label'>
                        Name
                    </label>
                    <input 
                        id='name'
                        type='text'
                        className='input input-bordered w-full max-w-xs'
                        placeholder='Your Full Name'
                        {...register('name', { required: true })}
                    />
                    {errors.name?.type === 'required' && (
                        <p role='alert' className='text-red-600 text-sm pt-2'>
                            Name is required
                        </p>
                    )}
                </div>
                <div className='w-full'>
                    <label htmlFor='imageUrl' className='label'>
                        Profile picture
                    </label>
                    <Controller
                        name='imageUrl'
                        control={control}
                        rules={{ required : true }}
                        render={({ field }) => {
                            <ImageUploader
                                onFieldChange={field.onChange}
                                imageUrl={field.value}
                                setFiles={setFiles}
                            />
                        }}
                    />
                </div>
            </div>
            <button type='submit' className='btn btn-primary mt-4'>
                Update
            </button>
        </form>
    )
}

