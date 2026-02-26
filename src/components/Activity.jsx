import './components.css'

export default function Activity({ activity }) {
    const actionMap = {
        favorite: 'to favorites',
        watchLater: 'to watch later',
        removeFavorited: 'from favorites',
        removeWatchLater: 'from watch later'
    }

    const date = new Date(activity.createdAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })

    return (
        <li className="activity-item">
            <p>
                <span className="activity-username">{activity.user.username}</span>
                {' added '}
                <span className="activity-title">{activity.title.title}</span>
                {' ' + actionMap[activity.activityType] + ' - '}
                <span className="activity-date">{date}</span>
            </p>
        </li>
    )
}
