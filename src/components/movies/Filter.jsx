import './movies.css'
import Input from '../general/Input'
import SearchBar from '../general/SearchBar'
import SelectInput from '../general/SelectInput'
import Tag from './Tag'

export default function Filter({
    minYear,
    setMinYear,
    maxYear,
    setMaxYear,
    sort,
    setSort,
    genres,
    setGenres,
    title,
    setTitle
}) {
    const genresList = [
        "action", "drama", "comedy", "biography", "romance",
        "thriller", "war", "history", "sport", "sci-fi",
        "documentary", "crime", "fantasy"
    ]

    return (
        <div className="filter-container">
            <SearchBar title={title} setTitle={setTitle} />
            <div className="filter-controls">
                <Input label="Min Date:" type="number" value={minYear} setValue={setMinYear} />
                <Input label="Max Date:" type="number" value={maxYear} setValue={setMaxYear} />
                <SelectInput
                    label="Sort:"
                    options={["latest", "oldest", "highestrated", "lowestrated"]}
                    value={sort}
                    setValue={setSort}
                />
            </div>
            <ul className="filter-tags">
                {genresList.map((genre) => (
                    <Tag key={genre} genre={genre} filter={true} genres={genres} setGenres={setGenres} />
                ))}
            </ul>
        </div>
    )
}
