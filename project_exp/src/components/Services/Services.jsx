import { useLang } from '../../i18n/LanguageContext'
import './Services.css'

const SERVICES = [
  { k: 'svc1', tags: ['React', 'Vite', 'UX/UI'] },
  { k: 'svc2', tags: ['React', 'TypeScript', 'SQL'] },
  { k: 'svc3', tags: ['Python', 'FastAPI', 'Docker'] },
  { k: 'svc4', tags: ['Power BI', 'Prompt Engineering', 'LLM'] },
]
const STEPS = ['prc1', 'prc2', 'prc3', 'prc4']

export default function Services() {
  const { t } = useLang()
  return (
    <>
      <section id="services" className="services">
        <div className="container">
          <p className="section-label reveal">{t.svcLabel}</p>
          <h2 className="section-title reveal delay-1">{t.svcTitle}</h2>
          <p className="section-desc reveal delay-2">{t.svcDesc}</p>
          <div className="services-grid">
            {SERVICES.map((s, i) => (
              <article key={s.k} className={`project-card reveal delay-${(i % 3) + 1}`}>
                <div className="card-header-row"><span className="card-number">{String(i + 1).padStart(2, '0')}</span></div>
                <div className="card-content">
                  <h3 className="card-title">{t[s.k + 't']}</h3>
                  <p className="card-desc">{t[s.k + 'd']}</p>
                  <div className="card-tags">{s.tags.map((g) => <span key={g} className="card-tag">{t[g] || g}</span>)}</div>
                </div>
              </article>
            ))}
          </div>
          <div className="projects-cta reveal"><a href="#contact" className="btn btn-primary">{t.svcCta}</a></div>
        </div>
      </section>

      <section id="process" className="services">
        <div className="container">
          <p className="section-label reveal">{t.prcLabel}</p>
          <h2 className="section-title reveal delay-1">{t.prcTitle}</h2>
          <div className="process-grid">
            {STEPS.map((k, i) => (
              <article key={k} className={`project-card reveal delay-${(i % 4) + 1}`}>
                <span className="card-number">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="card-title">{t[k + 't']}</h3>
                <p className="card-desc">{t[k + 'd']}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
