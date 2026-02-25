import './general.css'

export default function Button({ label, className, onClick, icon = null, type = 'button' }) {
    return (
        <div>
            <button type={type} className={`button-red ${className}`} onClick={onClick}>
                {icon}
                {label}
            </button>
        </div>
    )
}
