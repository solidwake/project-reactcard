// Import FontAwesome icons using npm
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGit, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <div className="footer-bg">
            <div className="footer">
                <a href="https://www.linkedin.com/in/idris-westbrook/" className="fa-icon"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
                <a href="https://twitter.com/idris_westbrook" className="fa-icon"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
                <a href="https://github.com/solidwake" className="fa-icon"><FontAwesomeIcon icon={faGit} size="2x" /></a>
            </div>
        </div>
    )
}