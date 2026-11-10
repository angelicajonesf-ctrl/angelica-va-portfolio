
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
      
<div className="bento__toolkit-burst" aria-hidden="true">
  {Array.from({ length: 16 }, (_, i) => (
    <span
      key={i}
      className="bento__toolkit-ray"
      style={{ '--i': i } as React.CSSProperties}
    />
  ))}
</div>
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
  <Briefcase size={29} weight="duotone" aria-hidden="true" />
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

/* ==========================================
   DIGITAL TOOLKIT — HOVER CONFETTI BURST
   ========================================== */

.home .bento__toolkit-orbit {
  isolation: isolate;
}

.home .bento__toolkit-burst {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  overflow: visible;
}

/* Small colorful rays surrounding the orbit */
.home .bento__toolkit-ray {
  --angle: calc(var(--i) * 22.5deg);
  --ray-color: #e9a6c0;

  position: absolute;
  top: 50%;
  left: 50%;
  width: 5px;
  height: 20px;
  border-radius: 100% 100% 80% 80%;
  background: var(--ray-color);
  opacity: 0;

  transform:
    translate(-50%, -50%)
    rotate(var(--angle))
    translateY(-52px)
    scaleY(0.2);

  transition:
    transform 650ms cubic-bezier(.2, 1.3, .3, 1),
    opacity 250ms ease;
}

/* Alternating pastel colors */
.home .bento__toolkit-ray:nth-child(4n + 1) {
  --ray-color: #e89ab7;
}

.home .bento__toolkit-ray:nth-child(4n + 2) {
  --ray-color: #f1ba65;
}

.home .bento__toolkit-ray:nth-child(4n + 3) {
  --ray-color: #65cdb0;
}

.home .bento__toolkit-ray:nth-child(4n + 4) {
  --ray-color: #d6a5d9;
}

/* Rays burst outward when hovering */
.home .bento__card--toolkit:hover .bento__toolkit-ray,
.home .bento__card--toolkit:focus-visible .bento__toolkit-ray {
  opacity: 1;

  transform:
    translate(-50%, -50%)
    rotate(var(--angle))
    translateY(-108px)
    scaleY(1);

  transition-delay: calc(var(--i) * 20ms);
}

/* Gentle settling motion after expansion */
.home .bento__card--toolkit:hover .bento__toolkit-burst,
.home .bento__card--toolkit:focus-visible .bento__toolkit-burst {
  animation: toolkit-burst-settle 900ms ease-out both;
}

@keyframes toolkit-burst-settle {
  0% {
    transform: scale(0.88);
  }

  55% {
    transform: scale(1.04);
  }

  100% {
    transform: scale(1);
  }
}

/* Compact laptop screens */
@media (min-width: 1100px) and (max-height: 800px) {
  .home .bento__card--toolkit:hover .bento__toolkit-ray,
  .home .bento__card--toolkit:focus-visible .bento__toolkit-ray {
    transform:
      translate(-50%, -50%)
      rotate(var(--angle))
      translateY(-82px)
      scaleY(0.75);
  }
}

/* Respect reduced-motion settings */
@media (prefers-reduced-motion: reduce) {
  .home .bento__toolkit-ray,
  .home .bento__toolkit-burst {
    animation: none !important;
    transition: none !important;
  }
}
