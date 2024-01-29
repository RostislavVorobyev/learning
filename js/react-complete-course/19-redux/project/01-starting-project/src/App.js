import Counter from './components/Counter'
import { Provider } from 'react-redux'
import store from './store/store.js'
import Auth from './components/Auth.js'
import Header from './components/Header.js'
import UserProfile from './components/UserProfile.js'
import { Fragment } from 'react'

function App() {
  return (
    <Provider store={store}>
      <Header></Header>
      <Auth />
      <UserProfile />
      <Counter />
    </Provider>
  )
}

export default App
