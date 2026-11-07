
import { Briefcase, Phone, Buildings, CheckCircle } from '@/components/slab'

const experiences = [
  {
    role: 'Facility Assistant / Administrator',
    company: 'Secure Storage Services Corp.',
    period: 'February – September 2026',
    Icon: Buildings,
    description:
      'Managed daily branch operations, client documentation, invoicing, collections, and administrative reporting.',
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
    description:
      'Supported a US real estate client through lead generation, skip tracing, outbound calling, appointment setting, and CRM management.',
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
    description:
      'Handled real estate outreach, lead qualification, customer communication, and CRM updates.',
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
    description:
      'Oversaw daily operations, reporting, coordination, and sales and marketing activities.',
    highlights: [
      'Coordinated day-to-day business operations',
      'Prepared operational reports',
      'Supported sales and marketing initiatives',
    ],
  },
]

export default function ExperienceView() {
  return (
    <section className="experience-page">
      <div className="experience-page__intro">
        <span className="experience-page__eyebrow">
          MY PROFESSIONAL JOURNEY
        </span>
        <h1>Experience & Background</h1>
        <p>
          My background in administration, operations, customer
          service, and real estate support has equipped me with
          practical skills to help businesses stay organized
          and operate efficiently.
        </p>
      </div>

      <div className="experience-page__grid">
        {experiences.map((job) => (
          <article className="experience-card" key={job.company}>
            <div className="experience-card__heading">
              <span className="experience-card__icon">
                <job.Icon size={22} weight="duotone" />
              </span>
              <span className="experience-card__period">
                {job.period}
              </span>
            </div>

            <h2>{job.role}</h2>
            <h3>{job.company}</h3>
            <p>{job.description}</p>

            <ul>
              {job.highlights.map((highlight) => (
                <li key={highlight}>
                  <CheckCircle size={17} weight="fill" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
