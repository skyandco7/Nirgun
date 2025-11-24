import { useState } from 'react'
import QRCode from 'qrcode.react'
import './Contact.css'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../i18n/translations'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const { language } = useLanguage()
  const t = translations[language].contact

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', service: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  const whatsappNumber = '917770099299'
  const whatsappMessage = 'Hello Nirgun Washers, I would like to inquire about your services.'
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <main className="contact">
      <section className="contact-hero">
        <h1>{t.heroHeading}</h1>
        <p>{t.heroCopy}</p>
      </section>

      <section className="contact-content">
        <div className="contact-container">
          <div className="contact-info-section">
            <h2>{t.infoHeading}</h2>
            
            <div className="info-box">
              <h4>{t.labels.phone.replace(' *', '')}</h4>
              <p><a href="tel:+917770099299">+91 77700 99299</a></p>
              <p className="small-text">{t.phoneNote}</p>
            </div>

            <div className="info-box">
              <h4>{t.labels.email.replace(' *', '')}</h4>
              <p><a href="mailto:nirgunwashers@gmail.com">nirgunwashers@gmail.com</a></p>
              <p className="small-text">{t.emailNote}</p>
            </div>

            <div className="info-box">
              <h4>{t.addressHeading}</h4>
              {t.addressLines.map((line) => (
                <p key={line} className={line.includes('Hours') ? 'small-text' : undefined}>{line}</p>
              ))}
            </div>

            <div className="whatsapp-section">
              <h4>{t.whatsappHeading}</h4>
              <p className="whatsapp-text">{t.whatsappText}</p>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="whatsapp-link">
                {t.whatsappButton}
              </a>
            </div>

            <div className="qr-section">
              <h4>{t.qrHeading}</h4>
              <p className="qr-text">{t.qrText}</p>
              <div className="qr-code-container">
                <QRCode 
                  value={whatsappLink}
                  size={200}
                  level="H"
                  includeMargin={true}
                  fgColor="#000000"
                  bgColor="#ffffff"
                />
              </div>
              <p className="qr-instruction">{t.qrInstruction}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-social">
        <div className="social-container">
          <h2>{t.socialHeading}</h2>
          <div className="social-links">
            <a href="#" className="social-link facebook" aria-label="Facebook">f</a>
            <a href="#" className="social-link instagram" aria-label="Instagram">ig</a>
            <a href="#" className="social-link twitter" aria-label="Twitter">tw</a>
            <a href="#" className="social-link youtube" aria-label="YouTube">yt</a>
          </div>
        </div>
      </section>
    </main>
  )
}
