import './movies.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { faClock, faStar } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

export default function MovieCard({ movie }) {
    const [isFavorite, setIsFavorite] = useState(false)
    const [isWatchLater, setIsWatchLater] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem('accessToken')
        axios.get('/api/titles/favorite/', {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then((response) => {
                if (response.data.some((t) => t.imdbId === movie.imdbId)) {
                    setIsFavorite(true)
                }
            })
        axios.get('/api/titles/watchLater/', {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then((response) => {
                if (response.data.some((t) => t.imdbId === movie.imdbId)) {
                    setIsWatchLater(true)
                }
            })
    }, [])

    function handleClick(type) {
        const token = localStorage.getItem('accessToken')
        if (type === "favorite") {
            if (isFavorite) {
                axios.delete(`/api/titles/favorite/${movie.imdbId}`, {
                    headers: { Authorization: `Bearer ${token}` }
                }).then(() => setIsFavorite(false))
            } else {
                axios.post(`/api/titles/favorite/${movie.imdbId}`, {}, {
                    headers: { Authorization: `Bearer ${token}` }
                }).then(() => setIsFavorite(true))
            }
        } else {
            if (isWatchLater) {
                axios.delete(`/api/titles/watchlater/${movie.imdbId}`, {}, {
                    headers: { Authorization: `Bearer ${token}` }
                }).then(() => setIsWatchLater(false))
            } else {
                axios.post(`/api/titles/watchlater/${movie.imdbId}`, {}, {
                    headers: { Authorization: `Bearer ${token}` }
                }).then(() => setIsWatchLater(true))
            }
        }
    }

    return (
        <li>
            <FontAwesomeIcon icon={faStar} onClick={() => handleClick("favorite")} />
            <FontAwesomeIcon icon={faClock} onClick={() => handleClick("watchlater")} />
            {movie.title}
            {movie.synopsis}
            {movie.genres.join(", ")}
        </li>
    )
}
