import './general.css'

export default function SelectInput({ label, options, className, value, setValue }) {

    function handleSelect(event) {
        setValue(event.target.value)
    }
    
    return (
        <div>
            {label}
            <select className={className} value={value} onChange={handleSelect}>
                {options.map((option) => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </div>
    )
}
