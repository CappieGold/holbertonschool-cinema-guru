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
                axios.delete(`/api/titles/watchlater/${movie.imdbId}`, {
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
        <li className="movie-card">
            <div className="movie-card-image">
                <img src={movie.imageurls?.[0]} alt={movie.title} />
                <div className="movie-card-icons">
                    <FontAwesomeIcon
                        icon={faClock}
                        className={`movie-icon ${isWatchLater ? "movie-icon-active" : ""}`}
                        onClick={() => handleClick("watchlater")}
                    />
                    <FontAwesomeIcon
                        icon={faStar}
                        className={`movie-icon ${isFavorite ? "movie-icon-active" : ""}`}
                        onClick={() => handleClick("favorite")}
                    />
                </div>
            </div>
            <div className="movie-card-info">
                <h3 className="movie-card-title">{movie.title}</h3>
                <p className="movie-card-synopsis">{movie.synopsis}</p>
                <ul className="movie-card-genres">
                    {movie.genres.map((genre) => (
                        <li key={genre} className="movie-genre-tag">{genre}</li>
                    ))}
                </ul>
            </div>
        </li>
    )
}
