import profilePhoto from './images/hero.jpg'

export default function Photo() {
    return (
        <div className="top-picture">
            <img src={profilePhoto} className="main-photo" alt="Photo of Idris Westbrook" />
        </div>
    )
}