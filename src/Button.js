import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Button() {
    return (
        <div className="email">
            <button type="button" className="btn"><FontAwesomeIcon icon={faEnvelope} size="lg" /><a href="mailto:westbrook.idris@gmail.com?&subject=I'd%20like%20to%20discuss%20a%20web%20development%20project" className="e-link">  Email</a></button>
        </div>
    )
}