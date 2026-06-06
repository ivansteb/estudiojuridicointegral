import { useFadeIn } from '../../hooks/useFadeIn.js'
import Button from '../ui/Button.jsx'

const HERO_CONTENT = {
  tagline: 'Asesoramiento legal con compromiso y cercania',
  subtitle: 'Derecho de Familia - Derecho Civil - Derecho Comercial',
  ctaLabel: 'Consultanos',
  ctaHref: '#contacto',
}

const Hero = () => {
  const textRef = useFadeIn({ threshold: 0.2 })

  return (
    <div className="hero-content fade-in" ref={textRef}>
      <p className="hero-kicker">Estudio Juridico Integral</p>
      <h1>{HERO_CONTENT.tagline}</h1>
      <p className="hero-subtitle">{HERO_CONTENT.subtitle}</p>
      <Button href={HERO_CONTENT.ctaHref}>{HERO_CONTENT.ctaLabel}</Button>
    </div>
  )
}

export default Hero
