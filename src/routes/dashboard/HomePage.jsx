import './dashboard.css'
import MovieCard from '../../components/movies/MovieCard'
import { useEffect, useState } from 'react'
import Filter from '../../components/movies/Filter'
import Button from '../../components/general/Button'
import axios from 'axios'

export default function HomePage() {
    const [movies, setMovies] = useState([])
    const [minYear, setMinYear] = useState(1970)
    const [maxYear, setMaxYear] = useState(2022)
    const [genres, setGenres] = useState([])
    const [sort, setSort] = useState("")
    const [title, setTitle] = useState("")
    const [page, setPage] = useState(1)

    function loadMovies(pageToLoad) {
        const token = localStorage.getItem('accessToken')
        axios.get('/api/titles/advancedsearch', {
            params: {
                minYear,
                maxYear,
                genres: genres.join(','),
                title,
                sort,
                page: pageToLoad
            },
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((response) => {
                setMovies(response.data.titles ?? [])
            })
    }

    useEffect(() => {
        setPage(1)
        loadMovies(1)
    }, [minYear, maxYear, genres, title, sort])

    return (
        <div>
            <Filter
                minYear={minYear}
                setMinYear={setMinYear}
                maxYear={maxYear}
                setMaxYear={setMaxYear}
                genres={genres}
                setGenres={setGenres}
                sort={sort}
                setSort={setSort}
                title={title}
                setTitle={setTitle}
            />
            <ul className="movies-grid">
                {movies.map((movie) => (
                    <MovieCard key={movie.imdbId} movie={movie} />
                ))}
            </ul>
            <div className="load-more">
                <Button label="Load More.." onClick={() => {
                    setPage(page + 1)
                    loadMovies(page + 1)
                }} />
            </div>
        </div>
    )
}
