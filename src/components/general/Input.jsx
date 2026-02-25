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
            <div className="input-label-row">
                {icon}
                {label}
            </div>
            <input onChange={handleInput}
                type={type}
                className={`input-field ${className}`}
                value={value}
                {...inputAttributes}
            />
        </div>
    )
}
