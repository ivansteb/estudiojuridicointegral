import PropTypes from 'prop-types'
import { useState } from 'react'
import Button from '../ui/Button.jsx'

const AREAS_OPTIONS = [
  { value: '', label: 'Selecciona un area' },
  { value: 'familia', label: 'Derecho de Familia' },
  { value: 'civil', label: 'Derecho Civil' },
  { value: 'comercial', label: 'Derecho Comercial' },
  { value: 'general', label: 'Consulta general' },
]

const initialData = {
  name: '',
  email: '',
  phone: '',
  area: '',
  message: '',
}

const ContactForm = ({ formspreeId }) => {
  const [formData, setFormData] = useState(initialData)
  const [errors, setErrors] = useState({})
  const [submitStatus, setSubmitStatus] = useState('idle')

  const validate = () => {
    const nextErrors = {}

    if (formData.name.trim().length < 2) {
      nextErrors.name = 'Ingresa un nombre valido.'
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      nextErrors.email = 'Ingresa un email valido.'
    }

    if (!formData.area) {
      nextErrors.area = 'Selecciona un area de consulta.'
    }

    if (formData.message.trim().length < 10) {
      nextErrors.message = 'El mensaje debe tener al menos 10 caracteres.'
    }

    return nextErrors
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      return
    }

    if (!formspreeId || formspreeId === 'XXXXXXXX') {
      setSubmitStatus('error')
      return
    }

    setSubmitStatus('sending')

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Error al enviar')
      }

      setSubmitStatus('success')
      setFormData(initialData)
      setErrors({})
    } catch {
      setSubmitStatus('error')
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <label>
        Nombre
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          disabled={submitStatus === 'sending'}
        />
        {errors.name ? <small>{errors.name}</small> : null}
      </label>

      <label>
        Email
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          disabled={submitStatus === 'sending'}
        />
        {errors.email ? <small>{errors.email}</small> : null}
      </label>

      <label>
        Telefono
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          disabled={submitStatus === 'sending'}
        />
      </label>

      <label>
        Area de consulta
        <select
          name="area"
          value={formData.area}
          onChange={handleChange}
          disabled={submitStatus === 'sending'}
        >
          {AREAS_OPTIONS.map((option) => (
            <option key={option.value} value={option.value} disabled={option.value === ''}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.area ? <small>{errors.area}</small> : null}
      </label>

      <label>
        Mensaje
        <textarea
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          disabled={submitStatus === 'sending'}
        />
        {errors.message ? <small>{errors.message}</small> : null}
      </label>

      <Button type="submit" disabled={submitStatus === 'sending'}>
        {submitStatus === 'sending' ? 'Enviando...' : 'Enviar consulta'}
      </Button>

      {submitStatus === 'success' ? (
        <p className="form-status is-success">Mensaje enviado correctamente.</p>
      ) : null}
      {submitStatus === 'error' ? (
        <p className="form-status is-error">
          No se pudo enviar. Tambien puedes escribirnos por WhatsApp.
        </p>
      ) : null}
    </form>
  )
}

ContactForm.propTypes = {
  formspreeId: PropTypes.string.isRequired,
}

export default ContactForm
