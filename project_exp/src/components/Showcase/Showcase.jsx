import { useLang } from '../../i18n/LanguageContext'
import FlexCarousel from '../../FlexCarousel'
import './Showcase.css'

// Trocar as fotos: passe items={[{ src, alt, title }]} para o FlexCarousel.
export default function Showcase() {
  const { t } = useLang()
  return (
    <section id="showcase" className="showcase">
      <p className="section-label showcase-label">{t.showLabel}</p>
      <FlexCarousel
        preset="liquid"
        intro="rise"
        cardHeight={0.7}
        gap={12}
        squeeze={0.2}
        focusOnClick
        captions
        fit="natural"
        radius={0}
        lensWidth={0.74}
        lensHeight={1.18}
        tilt={62}
        roundness={1}
        bend={0.34}
        reach={0.38}
        curl="twist"
        dispersion={0.45}
        liquid={0}
        followCursor={false}
        autoplay
        interval={3}
        autoplayStiffness={5}
        captureWheel={false}
      />
    </section>
  )
}
