import './general.css'

export default function Input({
    label,
    type,
    className,
    value,
    setValue,
    icon = null,
    inputAttributes = {}
}) {

    function handleInput(event) {
        setValue(event.target.value)
    }

    return (
        <div className="input-container">
            {icon}
            {label}
            <input onChange={handleInput}
                type={type}
                className={`input-field ${className}`}
                value={value}
                {...inputAttributes}
            />
        </div>
    )
}
