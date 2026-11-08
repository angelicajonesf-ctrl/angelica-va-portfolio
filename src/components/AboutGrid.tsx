import type { CSSProperties } from 'react'
import { profile } from '@/data/profile'

const asset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

type Capability = {
  index: string
  title: string
  description: string
  marks: { src: string; name: string }[]
}


const CAPABILITIES: Capability[] = [
  {
    index: '01',
    title: 'Executive & Administrative Assistance',
    description: 'Executive Assistant · Administrative Assistant · General VA',
    marks: [
      { src: 'icons/google.svg', name: 'Google' },
      { src: 'icons/microsoft365.svg', name: 'Microsoft 365' },
      { src: 'icons/notion.svg', name: 'Notion' },
      { src: 'icons/odoo.svg', name: 'Odoo' },
    ],
  },
  {
    index: '02',
    title: 'Real Estate Virtual Assistance',
    description: 'Lead Generation · Skip Tracing · CRM Management',
    marks: [
      { src: 'icons/propstream.png', name: 'PropStream' },
      { src: 'icons/hubspot.svg', name: 'HubSpot' },
      { src: 'icons/salesforce.svg', name: 'Salesforce' },
      { src: 'icons/zillow.svg', name: 'Zillow' },
    ],
  },
  {
    index: '03',
    title: 'Cold Calling & Appointment Setting',
    description: 'Outbound Calls · Lead Qualification · Follow-ups',
    marks: [
      { src: 'icons/hubspot.svg', name: 'HubSpot' },
      { src: 'icons/bitrix24.svg', name: 'Bitrix24' },
      { src: 'icons/salesforce.svg', name: 'Salesforce' },
      { src: 'icons/googlecalendar.svg', name: 'Google Calendar' },
    ],
  },
  {
    index: '04',
    title: 'Customer Service & Social Media Support',
    description: 'Client Communication · Social Media Engagement · Scheduling',
    marks: [
      { src: 'icons/canva.svg', name: 'Canva' },
      { src: 'icons/facebook.svg', name: 'Facebook' },
      { src: 'icons/instagram.svg', name: 'Instagram' },
      { src: 'icons/messenger.svg', name: 'Messenger' },
    ],
  },
]


export default function AboutGrid() {
  return (
    <section className="pgrid agrid" aria-labelledby="about-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">About Me</span>

        <h1 className="pgrid__title" id="about-title">
          {`Hi, I’m ${profile.firstName}.`}
        </h1>

        <p className="pgrid__lede">
          A versatile Virtual Assistant helping businesses stay organized,
          connect with potential clients, and keep daily operations running smoothly.
        </p>
      </header>

      <div className="home__glass agrid__glass">
        <div className="agrid__copy">
          <p className="agrid__lead">
  Behind every smooth operation is reliable support.
  <span> That's what I deliver.</span>
</p>

          <p className="agrid__note">
            With over 3 years of experience across administrative support,
            customer service, and real estate operations, I've developed
            a practical approach to managing both behind-the-scenes tasks
            and client-facing responsibilities.
          </p>

          <p className="agrid__note">
            Whether it's organizing records, handling inquiries, following
            up with leads, scheduling appointments, or supporting day-to-day
            operations, I bring consistency, attention to detail, and
            reliable follow-through to every task.
          </p>

          <ul className="agrid__caps" role="list">
            {CAPABILITIES.map((c) => (
              <li key={c.index} className="agrid__cap">
                <span className="agrid__cap-marks">
                  {c.marks.map((m, i) => (
                    <span
                      key={`${c.index}-${m.name}`}
                      className="agrid__mark"
                      title={m.name}
                      style={{
                        '--i': c.marks.length - i,
                      } as CSSProperties}
                    >
                      <img
                        src={asset(m.src)}
                        alt={m.name}
                        loading="lazy"
                        decoding="async"
                      />
                    </span>
                  ))}
                </span>

                <span className="agrid__cap-content">
                  <span className="agrid__cap-title">{c.title}</span>
                  <span className="agrid__cap-description">
                    {c.description}
                  </span>
                </span>

                <span className="agrid__cap-index" aria-hidden="true">
                  {c.index}
                </span>
              </li>
            ))}
          </ul>
               </div>

               <div className="agrid__portrait">
          <img
            src={asset('angelica-about-illustration.png')}
            alt="Illustration of Angelica working at her computer"
            loading="eager"
            decoding="async"
            width={900}
            height={700}
          />
        </div>
      </div>
    </section>
  )
}
