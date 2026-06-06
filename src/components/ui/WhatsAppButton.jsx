import PropTypes from 'prop-types'

const WhatsAppButton = ({ phoneNumber, message = '' }) => {
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      className="whatsapp-button"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir WhatsApp"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.42 0 .04 5.38.04 12c0 2.12.55 4.19 1.6 6.02L0 24l6.2-1.62A11.95 11.95 0 0 0 12.04 24h.01c6.62 0 11.99-5.38 11.99-12 0-3.2-1.25-6.21-3.52-8.52Zm-8.47 18.5h-.01a9.94 9.94 0 0 1-5.07-1.39l-.36-.21-3.68.97.98-3.59-.24-.37A9.94 9.94 0 0 1 2.05 12C2.05 6.49 6.53 2 12.04 2c2.66 0 5.16 1.04 7.04 2.92A9.9 9.9 0 0 1 22 12c0 5.51-4.48 9.98-9.95 9.98Zm5.47-7.47c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.66.15-.2.3-.76.97-.94 1.16-.17.2-.34.22-.64.08-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.5-1.77-1.68-2.07-.17-.3-.02-.47.13-.62.13-.13.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.23-.24-.58-.48-.5-.66-.5h-.56c-.2 0-.52.08-.79.37-.27.3-1.04 1.01-1.04 2.47s1.06 2.87 1.21 3.07c.15.2 2.08 3.17 5.03 4.44.7.3 1.25.48 1.67.62.7.22 1.34.19 1.84.11.56-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
      </svg>
    </a>
  )
}

WhatsAppButton.propTypes = {
  phoneNumber: PropTypes.string.isRequired,
  message: PropTypes.string,
}

export default WhatsAppButton
