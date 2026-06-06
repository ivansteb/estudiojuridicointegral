import PropTypes from 'prop-types'

const MapEmbed = ({ address, title = 'Ubicacion del estudio', height = '320px' }) => {
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&output=embed`

  return (
    <iframe
      title={title}
      src={mapSrc}
      width="100%"
      height={height}
      style={{ border: 0, borderRadius: 'var(--radius-md)' }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  )
}

MapEmbed.propTypes = {
  address: PropTypes.string.isRequired,
  title: PropTypes.string,
  height: PropTypes.string,
}

export default MapEmbed
