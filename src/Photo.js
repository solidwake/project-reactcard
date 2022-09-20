import profilePhoto from './images/hero7.png'

export default function Photo() {
    return (
        <div className="top-picture">
            <img src={profilePhoto} className="main-photo" alt="Idris Westbrook" />
        </div>
    )
}