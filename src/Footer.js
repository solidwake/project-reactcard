// Import FontAwesome icons using npm
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGit, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <div className="footer">
            <a href="" className="fa-icon"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="" className="fa-icon"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="" className="fa-icon"><FontAwesomeIcon icon={faGit} /></a>
        </div>
    )
}