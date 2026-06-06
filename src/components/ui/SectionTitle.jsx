import PropTypes from 'prop-types'

const SectionTitle = ({ title, subtitle, align = 'center', light = false }) => {
  return (
    <div className={`section-title align-${align} ${light ? 'is-light' : ''}`.trim()}>
      <h2>{title}</h2>
      <span className="separator" />
      {subtitle ? <p>{subtitle}</p> : null}
    </div>
  )
}

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  align: PropTypes.oneOf(['left', 'center', 'right']),
  light: PropTypes.bool,
}

export default SectionTitle
