import './navigation.css'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Activity from '../Activity'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faFolder, faStar } from '@fortawesome/free-solid-svg-icons'

export default function SideBar() {
    const [selected, setSelected] = useState("home")
    const [small, setSmall] = useState(true)
    const [activities, setActivities] = useState([])
    const [showActivities, setShowActivities] = useState(false)
    const navigate = useNavigate()

    function setPage(pageName) {
        setSelected(pageName)
        if (pageName === "Home") {
            navigate("/home")
        } else if (pageName === "Favorites") {
            navigate("/favorites")
        } else {
            navigate("/watchlater")
        }
    }

    useEffect(() => {
        const token = localStorage.getItem('accessToken')
        axios.get('/api/activity', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((response) => {
                setActivities(response.data)
            })
    }, [])

    return (
        <nav>
            <ul>
                <li onClick={() => setPage("Home")}>
                    <FontAwesomeIcon icon={faFolder} />
                    Home
                </li>
                <li onClick={() => setPage("Favorites")}>
                    <FontAwesomeIcon icon={faStar} />
                    Favorites
                </li>
                <li onClick={() => setPage("Watch Later")}>
                    <FontAwesomeIcon icon={faClock} />
                    Watch Later
                </li>
            </ul>
            <ul>
                {activities.slice(0, 10).map((activity) => (
                    <Activity key={activity.id} activity={activity} />
                ))}
            </ul>
        </nav>
    )
}
