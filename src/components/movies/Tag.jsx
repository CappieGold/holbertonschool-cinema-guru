import { useState } from 'react'
import './movies.css'

export default function Tag({ genre, filter, genres, setgenres }) {
    const [selected, setSelected] = useState(false)

    function handleTag() {
        if (selected) {
            setgenres(genres.filter((g) => g !== genre))
            setSelected(false)
        } else {
            setgenres([...genres, genre])
            selected(true)
        }
    }

    return (
        <li onClick={handleTag}>{genre}</li>
    )
}
