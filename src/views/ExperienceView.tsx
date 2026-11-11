import { useEffect, useRef, useState } from 'react'
import { Briefcase, Phone, Buildings, CheckCircle } from '@/components/slab'

const experiences = [
  {
    role: 'Facility Assistant', company: 'Secure Storage Services Corp.', location: 'Makati, Philippines', period: 'Feb 2026 – Nov 2026', Icon: Buildings,
    summary: 'Managed branch administration, client agreements, financial records, and daily facility operations.',
    tags: ['100+ client agreements', '₱600K+ monthly collections', 'Occupancy: 80% → 90%'],
    details: [
      'Managed client inquiries, service agreements, transactions, collections monitoring, and documentation.',
      'Maintained a 97% on-time collection rate and recovered 100% of delinquent accounts through follow-ups.',
      'Maintained accurate digital and physical records for 100+ active client agreements.',
      'Processed subscriptions, transactions, and invoices using Odoo, Google Sheets, and Excel.',
      'Supported operational improvements that increased occupancy from 80% to 90% in two months.',
    ],
  },
  {
    role: 'Area Head', company: 'Happy Go Shopping Center', location: 'Zambales, Philippines', period: 'Apr 2024 – Feb 2026', Icon: Briefcase,
    summary: 'Coordinated daily business operations, reporting, and sales and marketing activities.',
    tags: ['Daily operations', 'Operational reporting', 'Sales & marketing'],
    details: [
      'Coordinated operational activities within an assigned area to keep workflows efficient.',
      'Prepared reports and maintained records using Microsoft Office and Google Workspace.',
      'Coordinated updates, issues, and follow-up actions with management.',
      'Supported initiatives to improve customer traffic, tenant engagement, and business performance.',
    ],
  },
  {
    role: 'Real Estate Virtual Assistant', company: 'FilReva', location: 'Zambales, Philippines', period: 'Nov 2023 – Jul 2024', Icon: Phone,
    summary: 'Supported lead generation, prospect outreach, appointment setting, and CRM management.',
    tags: ['200–300+ calls daily', 'HubSpot & Salesforce', 'Appointment setting'],
    details: [
      'Handled approximately 200–300+ outbound and inbound calls daily, depending on campaign needs.',
      'Maintained prospect records, call notes, lead statuses, and follow-up schedules.',
      'Conducted online research and organized prospect information for lead generation.',
      'Coordinated appointments and passed relevant prospect information to internal teams.',
    ],
  },
  {
    role: 'Customer Service Associate', company: 'AM Virtual Sourcing Incorporation', location: 'Zambales, Philippines', period: 'May 2023 – Nov 2023', Icon: Phone,
    summary: 'Managed customer outreach, CRM records, appointments, and follow-up communication.',
    tags: ['Customer communication', 'Accurate CRM records', 'Appointment coordination'],
    details: [
      'Handled high-volume customer communications and tracked inquiries and follow-ups.',
      'Updated CRM records, call notes, and prospect information accurately.',
      'Coordinated appointment details between prospects and internal teams.',
      'Followed established workflows to complete assigned tasks consistently and on time.',
    ],
  },
]

const RESUME_AVAILABLE = false // Set to true after uploading public/resume.pdf

function ExperienceCard({ job, index }: { job: (typeof experiences)[number]; index: number }) {
  const [expanded, setExpanded] = useState(false)
  const cardRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = cardRef.current
    if (!element) return
    if (!('IntersectionObserver' in window)) { setVisible(true); return }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); observer.unobserve(entry.target) }
    }, { threshold: 0.08 })
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <article ref={cardRef} className={`journey-item ${visible ? 'is-visible' : ''}`} style={{ transitionDelay: `${Math.min(index * 90, 270)}ms` }}>
      <span className="journey-item__dot" aria-hidden="true" />
      <div className="journey-card">
        <div className="journey-card__main">
          <span className="journey-card__icon"><job.Icon size={24} weight="duotone" /></span>
          <div className="journey-card__copy">
            <div className="journey-card__heading">
              <h2>{job.role}</h2>
              <span className="journey-card__date">{job.period}</span>
            </div>
            <div className="journey-card__meta"><strong>{job.company}</strong><span>{job.location}</span></div>
            <p className="journey-card__summary">{job.summary}</p>
            <div className="journey-card__tags">
              {job.tags.map((tag) => <span className="journey-card__tag" key={tag}><CheckCircle size={15} weight="fill" />{tag}</span>)}
            </div>
            <button type="button" className="journey-card__toggle" aria-expanded={expanded} onClick={() => setExpanded(!expanded)}>
              {expanded ? 'Hide responsibilities' : 'View responsibilities'} <span aria-hidden="true">{expanded ? '−' : '+'}</span>
            </button>
            {expanded && <ul className="journey-card__details">{job.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>}
          </div>
        </div>
      </div>
    </article>
  )
}

export default function ExperienceView() {
  const timelineRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let frame = 0
    const update = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const el = timelineRef.current
        if (!el) return
        const rect = el.getBoundingClientRect()
        const usable = Math.max(rect.height - 36, 1)
        const travelled = window.innerHeight * 0.65 - rect.top
        setProgress(Math.max(0, Math.min(100, (travelled / usable) * 100)))
      })
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => { cancelAnimationFrame(frame); window.removeEventListener('scroll', update); window.removeEventListener('resize', update) }
  }, [])

  const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`

  return (
    <section className="experience-page">
      <header className="experience-page__header">
        <span className="experience-page__eyebrow">EXPERIENCE</span>
        <h1>My Professional Journey</h1>
        <p>My background in administration, operations, customer service, and real estate support has equipped me to keep businesses organized and running efficiently.</p>
      </header>

      <div className="experience-page__layout">
        <aside className="experience-page__aside">
          <div className="experience-expertise-card">
            <h2>Areas of Expertise</h2>
            <div className="experience-expertise-card__list">
              <span><Briefcase size={19} weight="duotone" /> Administrative & Operations Support</span>
              <span><Buildings size={19} weight="duotone" /> Real Estate & Lead Management</span>
              <span><Phone size={19} weight="duotone" /> Client Communication & Coordination</span>
            </div>
          </div>
          <div className="experience-resume-card">
            <div className="experience-resume-card__paper" aria-hidden="true"><span /><i /><i /><i /><i /><i /><i /></div>
            <div className="experience-resume-card__content">
              <span className="experience-resume-card__eyebrow">EXPLORE MORE</span>
              <h2>My Resume</h2>
              <p>Explore my full work history, skills, and qualifications.</p>
              {RESUME_AVAILABLE ? <>
                <a className="experience-resume-card__button" href={resumeUrl} target="_blank" rel="noopener noreferrer">View Resume</a>
                <a className="experience-resume-card__button experience-resume-card__button--outline" href={resumeUrl} download="Angelica_Jones_Funelas_Resume.pdf">Download PDF</a>
              </> : <>
                <span className="experience-resume-card__button experience-resume-card__button--disabled">View Resume</span>
                <span className="experience-resume-card__button experience-resume-card__button--outline experience-resume-card__button--disabled">Download PDF</span>
                <small>Resume PDF coming soon</small>
              </>}
            </div>
          </div>
        </aside>

        <div className="journey-timeline" ref={timelineRef}>
          <div className="journey-timeline__rail" aria-hidden="true" />
          <div className="journey-timeline__progress" aria-hidden="true" style={{ height: `${progress}%` }} />
          {experiences.map((job, index) => <ExperienceCard job={job} index={index} key={job.company} />)}
        </div>
      </div>
    </section>
  )
}
