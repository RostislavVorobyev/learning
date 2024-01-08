import logoImage from '../assets/logo.jpg'

export default function Header() {
  return (
    <div id='main-header'>
      <div id='title'>
        <img src={logoImage} alt='logo'></img>
        REACTFOOD
      </div>
      <button className='cart'>Cart</button>
    </div>
  )
}
