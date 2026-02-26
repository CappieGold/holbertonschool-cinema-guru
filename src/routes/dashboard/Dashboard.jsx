import './dashboard.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Header from '../../components/navigation/Header'
import SideBar from '../../components/navigation/SideBar'

export default function Dashboard({ userUsername, setIsLoggedIn }) {
    return (
        <BrowserRouter>
            <div className='dashboard'>
                <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
                <SideBar />
                <Routes>
                    <Route path="/home" />
                    <Route path="/favorites" />
                    <Route path="/watchlater" />
                    <Route path="*" element={<Navigate to="/home" replace />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}
