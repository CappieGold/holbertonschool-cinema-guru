import './components.css'

export default function Activity({ activity }) {
    return (
        <li>
            <p>
                {activity.user.username}
                {activity.activityType}
                {activity.title.title}
            </p>
        </li>
    )
}
