import './auth.css'
import { useState } from 'react'
import Button from '../../components/general/Button'
import Login from './Login'
import Register from './Register'
import axios from 'axios'

export default function Authentication({ setIsLoggedIn, setUserUsername }) {
    const [_switch, setSwitch] = useState(true)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit(event) {
        event.preventDefault()
        const route = _switch ? '/api/auth/login' : '/api/auth/register'
        axios.post(route, { username, password })
            .then((response) => {
                localStorage.setItem('accessToken', response.data.accessToken)
                setUserUsername(username)
                setIsLoggedIn(true)
            })
    }

    return (
        <div className="auth-page">
            <form className="auth-card" onSubmit={handleSubmit}>
                <div className="auth-tabs">
                    <Button label="Sign In" className={_switch ? "active" : ""} onClick={() => setSwitch(true)}/>
                    <Button label="Sign Up" className={!_switch ? "active" : ""} onClick={() => setSwitch(false)}/>
                </div>
                <div className="auth-body">
                    {_switch
                        ? <Login username={username} password={password} setUsername={setUsername} setPassword={setPassword} />
                        : <Register username={username} password={password} setUsername={setUsername} setPassword={setPassword} />
                    }
                </div>
            </form>
        </div>
    )
}
