import './Users.css'
import { useCollection} from '../../Hooks/UseCollection'
// import Transactions from '../../Components/Transactions/Transactions'
import { Link } from 'react-router-dom'
import User from '../../Components/User/User'

export default function Users() {
    const { documents } = useCollection('Users')
    // console.log(documents)
  return (
    <div className='users-container'>
      <h2>Users</h2>
      <h4>You have {documents && <span>{documents.length}</span>} users</h4>
       <ul>
         {documents && documents.map((user) => (
           <Link className='link' to={`/users/${user.id}`}>
             <User key={user.id} user={user}/>
           </Link>
         ))}
       </ul>
    </div>
  )
}
