import './auth.css'
import Input from '../../components/general/Input'
import Button from '../../components/general/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey, faPlus, faUser } from '@fortawesome/free-solid-svg-icons'

export default function Register({ username, password, setUsername, setPassword }) {
    return(
        <div>
            <p>Create a new account</p>
            <Input
                label="Username:"
                type="text"
                value={username}
                setValue={setUsername}
                icon={<FontAwesomeIcon icon={faUser} />}
            />
            <Input
                label="Password:"
                type="password"
                value={password}
                setValue={setPassword}
                icon={<FontAwesomeIcon icon={faKey} />}
            />
            <Button icon={<FontAwesomeIcon icon={faPlus} />} label="Sign Up" />
        </div>
    )
}
