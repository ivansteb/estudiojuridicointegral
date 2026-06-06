import PropTypes from 'prop-types'

const ScrollSection = ({ id, children, className = '', tall = false }) => {
  const style = tall
    ? {
        minHeight: '100dvh',
        height: 'auto',
        overflowY: 'auto',
        scrollSnapAlign: 'start',
        width: '100%',
      }
    : {
        height: '100dvh',
        overflow: 'hidden',
        scrollSnapAlign: 'start',
        width: '100%',
      }

  return (
    <section id={id} className={`scroll-section ${className}`.trim()} style={style}>
      {children}
    </section>
  )
}

ScrollSection.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  tall: PropTypes.bool,
}

export default ScrollSection
