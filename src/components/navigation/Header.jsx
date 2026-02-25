import './navigation.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'

export default function Header({ userUsername, setIsLoggedIn }) {
    function logout() {
        localStorage.removeItem('accessToken')
        setIsLoggedIn(false)
    }
    return (
        <nav className="header">
            <p className="header-title">Cinema Guru</p>
            <div className="header-right">
                <img src="https://picsum.photos/100/100" alt="avatar" />
                <p>Welcome, {userUsername}!</p>
                <span className="logout" onClick={logout}>
                    <FontAwesomeIcon icon={faArrowRightFromBracket} />
                    Logout
                </span>
            </div>
        </nav>
    )
}
