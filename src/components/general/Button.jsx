import './general.css'

export default function Button({ label, className, onClick, icon = null }) {
    return (
        <div>
            <button type='button' className={`button-red ${className}`} onClick={onClick}>
                {icon}
                {label}
            </button>
        </div>
    )
}
