import classes from './Auth.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '../store/store'

const Auth = () => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated)
  const dispatch = useDispatch()

  console.log(isAuth)
  const onLoginHandle = function (e) {
    e.preventDefault()
    console.log('ok')
    if (
      document.getElementById('password').value &&
      document.getElementById('email')
    ) {
      dispatch(authActions.login())
    }
  }

  return (
    <main className={classes.auth} hidden={isAuth}>
      <section>
        <form onSubmit={onLoginHandle}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  )
}

export default Auth
