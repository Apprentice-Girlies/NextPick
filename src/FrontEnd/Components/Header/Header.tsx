import './Header.css'
import SiginLoginBtn from "../SiginLoginBtn/SiginLoginBtn.tsx";

export default function Header(){
    return (
        <header className='header'>
            <img className='logo' src="/src/assets/Logo.svg" alt="Logo" />
            <SiginLoginBtn/>
        </header>
    )
}