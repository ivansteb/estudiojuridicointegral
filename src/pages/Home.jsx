import Footer from '../components/layout/Footer.jsx'
import Navbar from '../components/layout/Navbar.jsx'
import ScrollContainer from '../components/layout/ScrollContainer.jsx'
import ScrollSection from '../components/layout/ScrollSection.jsx'
import AreasCard from '../components/sections/AreasCard.jsx'
import ContactForm from '../components/sections/ContactForm.jsx'
import Hero from '../components/sections/Hero.jsx'
import MapEmbed from '../components/sections/MapEmbed.jsx'
import TeamMember from '../components/sections/TeamMember.jsx'
import { BriefcaseIcon, FileTextIcon, UsersIcon } from '../components/ui/Icons.jsx'
import SectionTitle from '../components/ui/SectionTitle.jsx'
import WhatsAppButton from '../components/ui/WhatsAppButton.jsx'
import { AREAS_DATA } from '../data/areas.js'
import { TEAM_DATA } from '../data/team.js'

const ICONS_BY_NAME = {
  Users: UsersIcon,
  FileText: FileTextIcon,
  Briefcase: BriefcaseIcon,
}

const Home = () => {
  return (
    <>
      <Navbar />

      <ScrollContainer>
        <ScrollSection id="inicio" className="section section-hero">
          <Hero />
        </ScrollSection>

        <ScrollSection id="areas" className="section section-areas">
          <div className="section-content">
            <SectionTitle
              title="Áreas de práctica"
              subtitle="Acompañamos conflictos y decisiones legales con cercanía, orden y estrategia."
            />

            <div className="areas-grid">
              {AREAS_DATA.map((area, index) => (
                <AreasCard
                  key={area.id}
                  title={area.title}
                  description={area.description}
                  Icon={ICONS_BY_NAME[area.iconName]}
                  delayClass={index === 1 ? 'delay-100' : index === 2 ? 'delay-200' : ''}
                />
              ))}
            </div>
          </div>
        </ScrollSection>

        <ScrollSection id="equipo" className="section section-team">
          <div className="section-content">
            <SectionTitle
              title="Equipo"
              subtitle="Profesionales comprometidos con una mirada humana del derecho."
            />

            <div className="team-grid">
              {TEAM_DATA.map((member) => (
                <TeamMember key={member.id} {...member} />
              ))}
            </div>
          </div>
        </ScrollSection>

        <ScrollSection id="contacto" className="section section-contact" tall>
          <div className="section-content section-content-contact">
            <SectionTitle
              title="Contacto"
              subtitle="Contanos tu situación y te responderemos a la brevedad."
              align="left"
            />

            <div className="contact-layout">
              <ContactForm formspreeId="XXXXXXXX" />
              <MapEmbed address="Santa Fe, Argentina" />
            </div>
          </div>

          <Footer />
        </ScrollSection>
      </ScrollContainer>

      <WhatsAppButton
        phoneNumber="5493425000000"
        message="Hola, quiero realizar una consulta legal."
      />
    </>
  )
}

export default Home
