import Avatar from '../../assets/images/avatar.png'
import './Header-style.scss'

export default function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <ul className="navList">
                    <li className="navList__listItem">
                        <span className="underlineItem">Accueil</span>
                    </li>
                    <li className="navList__listItem">
                        <span className="underlineItem">A propos</span>
                    </li>
                    <li className="navList__listItem">
                        <span className="underlineItem">Compétences</span>
                    </li>
                    <li className="navList__listItem navList__listItem--avatar">
                        <img
                            src={Avatar}
                            alt="Avatar représentant Anthony Tur, développeur Web"
                            className="avatar"
                        />
                    </li>
                    <li className="navList__listItem">
                        <span className="underlineItem">Portfolio</span>
                    </li>
                    <li className="navList__listItem">
                        <span className="underlineItem">Services</span>
                    </li>
                    <li className="navList__listItem">
                        <span className="underlineItem">Contact</span>
                    </li>
                </ul>
            </nav>
        </header>
    )
}