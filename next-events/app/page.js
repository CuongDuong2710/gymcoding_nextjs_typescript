import Button from "./component/Button"
import { getUser } from "./lib/actions/action"

export const metadata = {
  title: 'Home'
}

export default async function Home() {
  const users = await getUser()
  
  return  (
    <div className='m-2'>
      <Button />
    </div>
  )
}
