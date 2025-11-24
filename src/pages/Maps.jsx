import { useState } from 'react'
import './Maps.css'
import { useLanguage } from '../context/LanguageContext'
import { translations } from '../i18n/translations'

export default function Maps() {
  const [mapType, setMapType] = useState('2d')
  const { language } = useLanguage()
  const t = translations[language].maps

  const businessLocation = {
    lat: 28.7041,
    lng: 77.1025,
    name: t.locationName,
    address: t.addressLine
  }

  return (
    <main className="maps">
      <section className="maps-hero">
        <h1>{t.heroHeading}</h1>
        <p>{t.heroCopy}</p>
      </section>

      <section className="maps-content">
        <div className="maps-container">
          <div className="map-selector">
            <button 
              className={`map-btn ${mapType === '2d' ? 'active' : ''}`}
              onClick={() => setMapType('2d')}
            >
              {t.buttons['2d']}
            </button>
            <button 
              className={`map-btn ${mapType === '3d' ? 'active' : ''}`}
              onClick={() => setMapType('3d')}
            >
              {t.buttons['3d']}
            </button>
          </div>

          {mapType === '2d' ? (
            <div className="map-wrapper">
              <iframe
                width="100%"
                height="500"
                frameBorder="0"
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.546179159834!2d${businessLocation.lng}!3d${businessLocation.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNirgun+Washers!5e0!3m2!1sen!2sin!4v1234567890`}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          ) : (
            <div className="map-wrapper">
              <iframe
                width="100%"
                height="500"
                frameBorder="0"
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.546179159834!2d${businessLocation.lng}!3d${businessLocation.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNirgun+Washers!5e0!3m2!1sen!2sin!4v1234567890`}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <p className="map-note">{t.mapNote}</p>
            </div>
          )}

          <div className="location-info">
            <h2>{businessLocation.name}</h2>
            
            <div className="address-section">
              <div>
                <h4>Address</h4>
                <p>{businessLocation.address}</p>
              </div>
            </div>

            <div className="contact-details">
              <div className="detail-item">
                <div>
                  <h4>{t.contact.phoneLabel}</h4>
                  <p><a href="tel:+917770099299">{t.contact.phoneValue}</a></p>
                </div>
              </div>
              <div className="detail-item">
                <div>
                  <h4>{t.contact.emailLabel}</h4>
                  <p><a href="mailto:nirgunwashers@gmail.com">{t.contact.emailValue}</a></p>
                </div>
              </div>
              <div className="detail-item">
                <div>
                  <h4>{t.contact.hoursLabel}</h4>
                  <p>{t.contact.hoursValue}</p>
                </div>
              </div>
            </div>

            <div className="directions-btn">
              <a 
                href={`https://www.google.com/maps/dir/?api=1&destination=${businessLocation.lat},${businessLocation.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-get-directions"
              >
                {t.directions}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="map-features">
        <div className="features-container">
          <h2>{t.featuresHeading}</h2>
          <div className="features-grid">
            {t.features.map((feature) => (
              <div className="feature" key={feature.title}>
                <div className="feature-icon"></div>
                <h3>{feature.title}</h3>
                <p>{feature.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
