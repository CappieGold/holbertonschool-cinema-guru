import './general.css'

export default function SelectInput({ label, options, className, value, setValue }) {

    function handleSelect(event) {
        setValue(event.target.value)
    }
    
    return (
        <div className="select-container">
            {label}
            <select className={`select-field ${className}`} value={value} onChange={handleSelect}>
                {options.map((option) => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </div>
    )
}
