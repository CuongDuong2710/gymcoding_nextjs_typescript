'use client'

import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { signOut } from 'next-auth/react'
import { FaSearch } from 'react-icons/fa'
import Search from './Search'
import { Suspense } from 'react'

/* 
npm run build

Generating static pages (0/11)  [=   ] ⨯ useSearchParams() should be wrapped in a suspense boundary at page "/signup". \
Read more: https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout 

Basically, using the `useSearchParam` hook will cause the entire page to be rendered on the client side.

We want parts of the page to be rendered on the server to run server actions, so we need to wrap the component that uses the `useSearchParam`
hook with a Suspense component

Suspense is a React component used to isolate parts of your code that require data fetching. This allows React to load the rest of the component, and
display that component only when it's ready
*/

export default function Navbar() {
    const { status, data: session } = useSession()

    const toggleMobilesearch = () => {
        var searchDropdown = document.getElementById('searchDropdown')
        searchDropdown.classList.toggle('hidden')
    }

    return (
        <div className='navbar bg-base-100 shadow-md'>
            <div className='navbar-start'>
                <Link href='/' className='btn btn-ghost text-xl'>
                    Next-Events
                </Link>
            </div>
            <div className='navbar-center'>
                <div className='hidden md:block w-[32rem]'>
                    <Suspense>
                        <Search />
                    </Suspense>
                </div>
                <div className='md:hidden'>
                    <div
                        id='searchIcon'
                        className='btn btn-ghost'
                        onClick={toggleMobilesearch}
                    >
                        <FaSearch  size='1.5 rem' />
                    </div>
                    <div
                        id='searchDropdown'
                        className='hidden absolute mt-2 left-1/4 bg-white p-2 rounded shadow-md w-72'
                    >
                        <Suspense>
                            <Search />
                        </Suspense>
                    </div>
                </div>
            </div>
            <div className='navbar-end'>
                {status === 'authenticated' && (
                    <div className='dropdown dropdown-end'>
                        <div
                            tabIndex={0}
                            role='button'
                            className='btn btn-ghost btn-circle avatar'
                        >
                            <div className='w-10 rounded-full'>
                                <Image
                                    alt='Profile picture'
                                    src={session.user.image ?? '/default-user.png'}
                                    width={60}
                                    height={60}
                                />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className='mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52'
                        >
                            <li>
                                <Link href='/profile'>Profile</Link>
                            </li>
                            <li>
                                <Link href='/events/create'>Create Events</Link>
                            </li>
                            <li>
                                <Link href='/' onClick={signOut}>Sign Out</Link>
                            </li>
                        </ul>
                    </div>
                )}
                {status === 'unauthenticated' && (
                    <div className='flex-none'>
                        <ul className='menu menu-horizontal px-1'>
                            <li>
                                <Link href='/login'>Login</Link>
                            </li>
                            <li>
                                <Link href='/signup'>
                                    Sign Up</Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}