import { useLang } from '../../i18n/LanguageContext'
import DomeGallery from '../DomeGallery/DomeGallery'
import './Showcase.css'

// Trocar as fotos: passe images={[{ src, alt }]} para o DomeGallery.
export default function Showcase() {
  const { t } = useLang()
  return (
    <section id="showcase" className="showcase">
      <p className="section-label showcase-label">{t.showLabel}</p>
      <DomeGallery
        fit={0.8}
        minRadius={600}
        maxVerticalRotationDeg={0}
        segments={34}
        dragDampening={2}
        grayscale
        autoRotate={6}
      />
    </section>
  )
}
