'use client'

import { useSearchParams, useRouter } from "next/navigation"
import { useDebouncedCallback } from "use-debounce"

export default function Search() {
    const searchParams = useSearchParams() // get the current URL's query string
    const { replace } = useRouter() // navigate to he Home page to run the search process

    const handleSearch = useDebouncedCallback(term => {
        const params = new URLSearchParams(searchParams) // create URLSearchParams object and set the query parameter
        if (term) {
            params.set('query', term)
        } else {
            params.delete('query')
        }
        replace(`/?${params.toString()}`) // send search params to Home page -> http://localhost:3000/?query=samsung
        document.querySelector('input[name="search"]').value = ''
    }, 1000) // useDebouncedCallback hook will delay handleSearch() execution for one second

    return (
        <div className='form-control'>
            <input 
                name='search'
                type='text'
                placeholder='Search event...'
                onChange={e => handleSearch(e.target.value)}
                className='input input-bordered w-full'
            />
        </div>
    )
}