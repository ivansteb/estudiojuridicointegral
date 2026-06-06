import PropTypes from 'prop-types'
import { useFadeIn } from '../../hooks/useFadeIn.js'

const getInitials = (name) =>
  name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

const TeamMember = ({ name, role, bio, photo, photoAlt }) => {
  const cardRef = useFadeIn({ threshold: 0.15 })

  return (
    <article className="team-member fade-in" ref={cardRef}>
      {photo ? (
        <img src={photo} alt={photoAlt || name} className="team-photo" />
      ) : (
        <div className="team-photo team-photo-placeholder">{getInitials(name)}</div>
      )}

      <h3>{name}</h3>
      <p className="team-role">{role}</p>
      <p>{bio}</p>
    </article>
  )
}

TeamMember.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  photo: PropTypes.string,
  photoAlt: PropTypes.string,
}

export default TeamMember
