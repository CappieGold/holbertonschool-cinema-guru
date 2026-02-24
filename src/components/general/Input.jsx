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
        <div>
            {label}
            {icon}
            <input onChange={handleInput}
                type={type}
                className={className}
                value={value}
                {...inputAttributes}
            />
        </div>
    )
}
