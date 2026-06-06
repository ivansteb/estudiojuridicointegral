import { MailIcon, PhoneIcon } from '../ui/Icons.jsx'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div>
          <h3 className="footer-title">Estudio Juridico Integral</h3>
          <p>Santa Fe, Argentina</p>
        </div>

        <div className="footer-contact">
          <p>
            <MailIcon size={16} />
            <span>
              contacto@estudio.com
              {/* TODO: reemplazar con email real */}
            </span>
          </p>
          <p>
            <PhoneIcon size={16} />
            <span>
              +54 9 342 0000000
              {/* TODO: reemplazar con telefono real */}
            </span>
          </p>
        </div>
      </div>

      <p className="footer-copy">
        &copy; {new Date().getFullYear()} Estudio Juridico Integral
      </p>
    </footer>
  )
}

export default Footer
