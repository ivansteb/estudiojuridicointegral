import PropTypes from 'prop-types'
import { useFadeIn } from '../../hooks/useFadeIn.js'

const AreasCard = ({ title, description, Icon, delayClass = '' }) => {
  const cardRef = useFadeIn({ threshold: 0.15 })

  return (
    <article ref={cardRef} className={`areas-card fade-in ${delayClass}`.trim()}>
      <div className="areas-icon">{Icon ? <Icon size={28} /> : null}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  )
}

AreasCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  Icon: PropTypes.elementType,
  delayClass: PropTypes.string,
}

export default AreasCard
