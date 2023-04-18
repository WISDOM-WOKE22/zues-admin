import './User.css'
// import { Link } from 'react-router-dom'

export default function User({ user }) {
  return (
    <div className='user-container'>
        <div>{user.displayName}</div>
        <div>{(user.id).slice(0,9)}</div>
        <div>{user.email}</div>
        <div>{user.password}</div>
    </div>
  )
}
