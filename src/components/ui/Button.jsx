import PropTypes from 'prop-types'

const Button = ({
  children,
  variant = 'primary',
  onClick,
  href,
  target,
  disabled = false,
  type = 'button',
  className = '',
}) => {
  const classes = `btn btn-${variant} ${className}`.trim()

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className={`${classes} ${disabled ? 'is-disabled' : ''}`.trim()}
        onClick={disabled ? (event) => event.preventDefault() : onClick}
      >
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
  onClick: PropTypes.func,
  href: PropTypes.string,
  target: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  className: PropTypes.string,
}

export default Button
