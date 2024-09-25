import { dbConnect } from "./lib/dbConnect"

export const metadata = {
  title: 'Home'
}

export default async function Home() {
  let connection;
  try {
    connection = await dbConnect()
  } catch (error) {
    console.log(error)
  }
  
  return  (
    <div className='m-2'>
      { connection ? (
        <h1>Database is connected!</h1>
      ): (
        <h1>Database is NOT connected!</h1>
      )}
    </div>
  )
}
