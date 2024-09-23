export default function Events({params}){
    return (
        <>
            <h1>The segments of the page:</h1>
            <pre>{params.id.toString()}</pre>
        </>
    )
}

// http://localhost:3000/events/2/11/2022
// The segments of the page:
// 2,11,2022