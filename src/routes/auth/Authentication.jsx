import './auth.css'
import { useState } from 'react'
import Button from '../../components/general/Button'
import Login from './Login'
import Register from './Register'

export default function Authentication({ setIsLoggedIn, setUserUsername }) {
    const [_switch, setSwitch] = useState(true)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className="auth-page">
            <form className="auth-card">
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
