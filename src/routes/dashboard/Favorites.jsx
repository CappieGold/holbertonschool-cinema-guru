import './dashboard.css'
import MovieCard from '../../components/movies/MovieCard'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Favorites() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const token = localStorage.getItem('accessToken')
        axios.get('/api/titles/favorite/', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((response) => {
                setMovies(response.data ?? [])
            })
    }, [])

    return (
        <div>
            <h1>Movies you like</h1>
            {movies.map((movie) => (
                <MovieCard key={movie.imdbId} movie={movie} />
            ))}
        </div>
    )
}
