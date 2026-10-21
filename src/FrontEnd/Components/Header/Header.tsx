import './Header.css'

export default function Header(){
    return (
        <header className='header'>
            <img className='logo' src="/src/assets/FullLogo.svg" alt="Logo" />
            <button className='signBtn'>Signup/login</button>
        </header>
    )
}