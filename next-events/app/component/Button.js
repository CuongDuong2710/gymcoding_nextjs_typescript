'use client'

export default function Button() {
    return (
        <button
            className='btn btn-primary'
            onClick={() => console.log('Hi')}>
            Click me!
        </button>
    )
}