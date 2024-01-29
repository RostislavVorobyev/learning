import { useSelector } from 'react-redux'
import classes from './UserProfile.module.css'

const UserProfile = () => {
  const hid = !useSelector((x) => x.auth.isAuthenticated)
  return (
    <main className={classes.profile} hidden={hid}>
      <h2>My User Profile</h2>
    </main>
  )
}

export default UserProfile
