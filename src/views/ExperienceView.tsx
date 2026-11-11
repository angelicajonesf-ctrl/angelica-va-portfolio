import { useEffect, useRef, useState } from 'react'
import { Briefcase, Phone, Buildings, CheckCircle } from '@/components/slab'

const RESUME_AVAILABLE = false // Change to true after uploading public/resume.pdf
const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`

const experiences = [
  {
    role: 'Facility Assistant / Administrator',
    company: 'Secure Storage Services Corp.',
    period: 'February – September 2026',
    Icon: Buildings,
    description: 'Managed daily branch operations, client documentation, invoicing, collections, and administrative reporting.',
    highlights: [
      'Managed 60+ active client agreements',
      'Handled ₱600,000+ in monthly collections',
      'Maintained a 97–100% on-time collection rate',
    ],
  },
  {
    role: 'Real Estate Virtual Assistant',
    company: 'Filipino Real Estate Virtual Assistant',
    period: 'Previous Experience',
    Icon: Phone,
    description: 'Supported a US real estate client through lead generation, skip tracing, outbound calling, appointment setting, and CRM management.',
    highlights: [
      'Handled 200–500 outbound calls per day',
      'Qualified property owners and scheduled appointments',
      'Maintained lead information and follow-up records',
    ],
  },
  {
    role: 'Customer Service Associate',
    company: 'Virtual Source Inc.',
    period: 'Previous Experience',
    Icon: Phone,
    description: 'Handled real estate outreach, lead qualification, customer communication, and CRM updates.',
    highlights: [
      'Managed 200–300+ outbound calls per day',
      'Recorded lead information accurately',
      'Coordinated qualified leads with acquisition teams',
    ],
  },
  {
    role: 'Area Head',
    company: 'Happy Go Shopping Center',
    period: 'Previous Experience',
    Icon: Briefcase,
    description: 'Oversaw daily operations, reporting, coordination, and sales and marketing activities.',
    highlights: [
      'Coordinated day-to-day business operations',
      'Prepared operational reports',
      'Supported sales and marketing initiatives',
    ],
  },
]

const expertise = [
  'Administrative & Operations Support',
  'Client & Stakeholder Communication',
  'Real Estate Outreach',
  'Lead Generation & Appointment Setting',
  'Invoicing & Collections',
  'Reporting & Coordination',
]

export default function ExperienceView() {
  const timelineRef = useRef<HTMLDivElement>(null)
  const [timelineProgress, setTimelineProgress] = useState(0)

  useEffect(() => {
    const timeline = timelineRef.current
    if (!timeline) return

    const cards = Array.from(timeline.querySelectorAll<HTMLElement>('.experience-card'))
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduceMotion || !('IntersectionObserver' in window)) {
      cards.forEach((card) => card.classList.add('is-visible'))
    } else {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible')
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.08, rootMargin: '0px 0px 40px 0px' },
      )
      cards.forEach((card) => observer.observe(card))
      // Cleanup is registered below along with the scroll listener.
      const updateProgress = () => {
        const rect = timeline.getBoundingClientRect()
        const viewMarker = window.innerHeight * 0.68
        const progress = ((viewMarker - rect.top) / Math.max(rect.height, 1)) * 100
        setTimelineProgress(Math.max(0, Math.min(100, progress)))
      }
      updateProgress()
      window.addEventListener('scroll', updateProgress, { passive: true })
      window.addEventListener('resize', updateProgress)
      return () => {
        observer.disconnect()
        window.removeEventListener('scroll', updateProgress)
        window.removeEventListener('resize', updateProgress)
      }
    }

    const updateProgress = () => {
      const rect = timeline.getBoundingClientRect()
      const progress = ((window.innerHeight * 0.68 - rect.top) / Math.max(rect.height, 1)) * 100
      setTimelineProgress(Math.max(0, Math.min(100, progress)))
    }
    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)
    return () => {
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
    }
  }, [])

  return (
    <section className="experience-page" aria-labelledby="experience-title">
      <div className="experience-page__layout">
        <aside className="experience-page__side">
          <div className="experience-page__intro">
            <span className="experience-page__eyebrow">MY PROFESSIONAL JOURNEY</span>
            <h1 id="experience-title">Experience &amp; Background</h1>
            <span className="experience-page__underline" aria-hidden="true" />
            <p>
              My background in administration, operations, customer service, and real estate
              support has equipped me with practical skills to help businesses stay organized
              and operate efficiently.
            </p>
          </div>

          <div className="experience-page__focus" aria-label="Professional focus areas">
            <span>Administrative &amp; Operations Support</span>
            <span>Real Estate Outreach &amp; Lead Management</span>
            <span>Client Communication &amp; Coordination</span>
          </div>

          <div className="experience-resume">
            <div className="experience-resume__paper" aria-hidden="true">
              <div className="experience-resume__avatar" />
              <div className="experience-resume__paper-title" />
              <div className="experience-resume__paper-line" />
              <div className="experience-resume__paper-line short" />
              <div className="experience-resume__paper-rule" />
              <div className="experience-resume__paper-line" />
              <div className="experience-resume__paper-line" />
              <div className="experience-resume__paper-line short" />
              <div className="experience-resume__paper-rule" />
              <div className="experience-resume__paper-line" />
              <div className="experience-resume__paper-line short" />
            </div>
            <div className="experience-resume__content">
              <span className="experience-resume__eyebrow">EXPLORE MORE</span>
              <h2>My Resume</h2>
              <p>See my complete work history, skills, and qualifications.</p>
              {RESUME_AVAILABLE ? (
                <>
                  <a className="experience-resume__button" href={resumeUrl} target="_blank" rel="noopener noreferrer">View Resume</a>
                  <a className="experience-resume__button experience-resume__button--outline" href={resumeUrl} download="Angelica-Jones-Funelas-Resume.pdf">Download PDF</a>
                </>
              ) : (
                <>
                  <span className="experience-resume__button experience-resume__button--disabled" aria-disabled="true">View Resume</span>
                  <span className="experience-resume__button experience-resume__button--outline experience-resume__button--disabled" aria-disabled="true">Download PDF</span>
                  <small>Resume PDF coming soon</small>
                </>
              )}
            </div>
          </div>
        </aside>

        <div className="experience-timeline" ref={timelineRef} aria-label="Career timeline">
          <div className="experience-timeline__track" aria-hidden="true">
            <div className="experience-timeline__fill" style={{ height: `${timelineProgress}%` }} />
          </div>
          {experiences.map((job, index) => (
            <div className="experience-timeline__entry" key={job.company}>
              <span className={`experience-timeline__dot${index === 0 ? ' experience-timeline__dot--first' : ''}`} aria-hidden="true" />
              <article className="experience-card">
                <div className="experience-card__identity">
                  <span className="experience-card__icon"><job.Icon size={25} weight="duotone" /></span>
                  <span className="experience-card__period">{job.period}</span>
                </div>
                <div className="experience-card__main">
                  <h2>{job.role}</h2>
                  <h3>{job.company}</h3>
                  <p>{job.description}</p>
                </div>
                <ul className="experience-card__highlights">
                  {job.highlights.map((highlight) => (
                    <li key={highlight}><CheckCircle size={17} weight="fill" /><span>{highlight}</span></li>
                  ))}
                </ul>
              </article>
            </div>
          ))}
        </div>
      </div>

      <div className="experience-expertise" aria-label="Core expertise">
        <strong className="experience-expertise__label">Core Expertise</strong>
        <div className="experience-expertise__viewport">
          <div className="experience-expertise__track">
            {[0, 1].map((copy) => (
              <div className="experience-expertise__group" key={copy} aria-hidden={copy === 1}>
                {expertise.map((item) => <span key={item}>{item}</span>)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
