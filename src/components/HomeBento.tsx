
import type React from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  FolderOpen,
  User,
  Stack,
  Quotes,
  Briefcase,
  Gear,
  AddressBook,
} from '@/components/slab'

const base = import.meta.env.BASE_URL
const TOOLKIT_LOGOS = [
  { name: 'HubSpot', file: 'hubspot.svg' },
  { name: 'Google Workspace', file: 'googleworkspace.svg' },
  { name: 'Odoo', file: 'odoo.svg' },
  { name: 'Notion', file: 'notion.svg' },
  { name: 'Canva', file: 'canva.png' },
  { name: 'CapCut', file: 'capcut.png' },
]

// Replace these images with your actual portfolio screenshots.
// Upload them inside public/home/.
const WORK_SAMPLES = [
  {
    name: 'Document Management',
    image: `${base}home/document-management.png`,
  },
  {
    name: 'Administrative Trackers',
    image: `${base}home/admin-tracker.png`,
  },
  {
    name: 'Notion Workspace',
    image: `${base}home/notion-workspace.png`,
  },
  {
    name: 'Real Estate Support',
    image: `${base}home/real-estate.png`,
  },
]

const EXPERIENCE = [
  { name: 'Administrative Operations', Icon: Briefcase },
  { name: 'Client Communication', Icon: AddressBook },
  { name: 'CRM & Lead Management', Icon: Gear },
  { name: 'Real Estate Support', Icon: Briefcase },
]

const OFFERS = [
  {
    Icon: Briefcase,
    title: 'Executive Assistance',
    note: 'Admin & Operations',
  },
  {
    Icon: AddressBook,
    title: 'Real Estate VA',
    note: 'Leads & CRM',
  },
  {
    Icon: Gear,
    title: 'Social Media Support',
    note: 'Engagement & Outreach',
  },
]

const RECOMMENDATIONS = [
  {
    name: 'Gennie G.',
    role: 'Facility Administrator · SSSC',
    work: 'Administrative Operations',
  },
  {
    name: 'Jay F.',
    role: 'Manager · FILREVA',
    work: 'Appointment Setting',
  },
  {
    name: 'Reden D.',
    role: 'Team Leader · AMVSI Corp.',
    work: 'CRM & Lead Management',
  },
]

function CardHead({
  Icon,
  title,
  desc,
}: {
  Icon: typeof FolderOpen
  title: string
  desc: string
}) {
  return (
    <header className="bento__head">
      <span className="bento__label">
        <span className="bento__icon">
          <Icon size={20} weight="fill" aria-hidden="true" />
        </span>
        <h3 className="bento__title">{title}</h3>
      </span>

      <p className="bento__desc">{desc}</p>

      <ArrowUpRight
        size={15}
        weight="bold"
        aria-hidden="true"
        className="bento__arrow"
      />
    </header>
  )
}

export default function HomeBento() {
  return (
    <nav className="bento" aria-label="Explore the portfolio">

      {/* MY WORKS */}
      <Link
        to="/projects"
        className="bento__card bento__card--projects"
      >
        <CardHead
          Icon={FolderOpen}
          title="My Works"
          desc="Practical work samples, systems, and workflows."
        />

        <div className="bento__media bento__reel" aria-hidden="true">
          <div className="bento__reel-track">
            {[...WORK_SAMPLES, ...WORK_SAMPLES].map((work, i) => (
              <span key={i} className="bento__shot">
                <img
                  src={work.image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </span>
            ))}
          </div>
        </div>
      </Link>

      {/* ABOUT */}
      <Link
        to="/about"
        className="bento__card bento__card--about"
      >
        <CardHead
          Icon={User}
          title="Meet Angelica"
          desc="Learn about my background and approach to work."
        />

        <div className="bento__media bento__fan" aria-hidden="true">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="bento__photo"
              style={{ '--i': i } as React.CSSProperties}
            >
              <img
                src={`${base}angelica new profile.png`}
                alt=""
                loading="lazy"
                decoding="async"
              />
            </span>
          ))}
        </div>
      </Link>

      {/* EXPERIENCE */}
      <Link
        to="/about"
        className="bento__card bento__card--ai"
      >
        <CardHead
          Icon={Briefcase}
          title="My Experience"
          desc="Administrative operations, real estate, and client support."
        />

        <div className="bento__media bento__chips" aria-hidden="true">
          {[0, 1].map((row) => (
            <div
              key={row}
              className="bento__chip-row"
              data-dir={row ? 'right' : 'left'}
            >
              <div className="bento__chip-track">
                {[...EXPERIENCE, ...EXPERIENCE].map(
                  ({ name, Icon }, i) => (
                    <span key={i} className="bento__chip">
                      <Icon size={15} weight="duotone" />
                      {name}
                    </span>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </Link>

      {/* SERVICES */}
      <Link
        to="/services"
        className="bento__card bento__card--services"
      >
        <CardHead
          Icon={Stack}
          title="My Services"
          desc="Flexible virtual support for your growing business."
        />

        <ul className="bento__media bento__offers" role="list">
          {OFFERS.map(({ Icon, title, note }, i) => (
            <li
              key={title}
              className="bento__offer"
              style={{ '--i': i } as React.CSSProperties}
            >
              <span className="bento__offer-tile">
                <Icon size={15} weight="duotone" aria-hidden="true" />
              </span>

              <span className="bento__offer-text">
                <span className="bento__offer-title">
                  {title}
                </span>
                <span className="bento__offer-note">
                  {note}
                </span>
              </span>

              <span className="bento__offer-num" aria-hidden="true">
                0{i + 1}
              </span>
            </li>
          ))}
        </ul>
      </Link>

{/* MY DIGITAL TOOLKIT */}
<Link
  to="/tools"
  className="bento__card bento__card--toolkit"
>
  <CardHead
    Icon={Gear}
    title="My Digital Toolkit"
    desc="The platforms behind my daily workflow."
  />

  <div className="bento__media bento__toolkit" aria-hidden="true">
    <div className="bento__toolkit-orbit">
      {TOOLKIT_LOGOS.map((tool, i) => (
        <span
          key={tool.name}
          className="bento__toolkit-logo"
          style={{ '--i': i } as React.CSSProperties}
          title={tool.name}
        >
          <img
            src={`${base}icons/${tool.file}`}
            alt=""
            loading="lazy"
            decoding="async"
          />
        </span>
      ))}
      <span className="bento__toolkit-center">
        <Gear size={25} weight="duotone" aria-hidden="true" />
      </span>
    </div>
    <span className="bento__toolkit-caption">
      Explore My Tools
      <ArrowUpRight size={13} weight="bold" aria-hidden="true" />
    </span>
  </div>
</Link>

      {/* PROFESSIONAL RECOMMENDATIONS */}
      <Link
        to="/testimonials"
        className="bento__card bento__card--quotes"
      >
        <CardHead
          Icon={Quotes}
          title="Professional Recommendations"
          desc="Feedback from people I've worked with."
        />

        <div className="bento__media bento__reviews" aria-hidden="true">
          <div className="bento__reviews-track">
            {[...RECOMMENDATIONS, ...RECOMMENDATIONS].map(
              (person, i) => (
                <span key={i} className="bento__review">
                  <span className="bento__review-top">
                    <Quotes size={14} weight="fill" />
                    <b>{person.name}</b>
                  </span>

                  <span className="bento__review-role">
                    {person.role}
                  </span>

                  <span className="bento__review-work">
                    {person.work}
                  </span>
                </span>
              )
            )}
          </div>
        </div>
      </Link>
    </nav>
  )
}
