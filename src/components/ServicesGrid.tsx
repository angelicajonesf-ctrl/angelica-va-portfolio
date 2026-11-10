
import type { CSSProperties } from 'react'
import {
  MagnetStraight,
  Timer,
  Trophy,
  CheckCircle,
} from '@/components/slab'
import type { Icon } from '@/components/slab'
import Autopilot, { TOOLS } from '@/components/Autopilot'

/* ---------- How I Work ---------- */

type Stage = {
  index: string
  label: string
  body: string
  Icon: Icon
  chips: string[]
}

const STAGES: Stage[] = [
  {
    index: '01',
    label: 'Discover',
    body: 'Understand your business goals, priorities, and daily challenges.',
    Icon: MagnetStraight,
    chips: ['Goals', 'Needs', 'Priorities'],
  },
  {
    index: '02',
    label: 'Organize',
    body: 'Align tasks, tools, and workflows to keep everything on track.',
    Icon: Timer,
    chips: ['Tasks', 'Systems', 'Workflow'],
  },
  {
    index: '03',
    label: 'Deliver',
    body: 'Provide dependable assistance, clear updates, and timely follow-through.',
    Icon: Trophy,
    chips: ['Support', 'Updates', 'Results'],
  },
]

/* ---------- Services ---------- */

type Service = {
  index: string
  title: string
  description: string
  chip: string
  logos: string[]
  bullets: string[]
}

const SERVICES: Service[] = [
  {
    index: '01',
    title: 'Executive & Administrative Assistance',
    description:
      'Keep your daily operations organized and running smoothly.',
    chip: 'ADMIN & OPERATIONS',
    logos: [
      'icons/google.svg',
      'icons/notion.svg',
      'icons/odoo.svg',
    ],
    bullets: [
      'Inbox, scheduling & documents',
      'Invoicing, records & reports',
      'Day-to-day coordination',
    ],
  },
  {
    index: '02',
    title: 'Real Estate Virtual Assistance',
    description:
      'Reliable lead and administrative support for real estate professionals.',
    chip: 'REAL ESTATE',
    logos: [
      'icons/propstream.png',
      'icons/zillow.png',
      'icons/hubspot.svg',
    ],
    bullets: [
      'Lead generation & skip tracing',
      'Cold calling & appointments',
      'CRM updates & follow-ups',
    ],
  },
  {
    index: '03',
    title: 'Social Media Support',
    description:
      'Maintain an active and consistent online presence.',
    chip: 'CONTENT & ENGAGEMENT',
    logos: [
      'icons/canva.png',
      'icons/instagram.png',
      'icons/capcut.png',
    ],
    bullets: [
      'Canva graphics & basic editing',
      'Scheduling & publishing',
      'Comments, messages & engagement',
    ],
  },
  {
    index: '04',
    title: 'Customer Service & Client Relations',
    description:
      'Responsive communication that helps clients feel supported.',
    chip: 'CLIENT SUPPORT',
    logos: [
      'icons/facebook.png',
      'icons/google.svg',
      'icons/zendesk.svg',
    ],
    bullets: [
      'Phone, email & chat inquiries',
      'Follow-ups & coordination',
      'Issue tracking & escalation',
    ],
  },
  {
    index: '05',
    title: 'CRM & Operations Support',
    description:
      'Keep business records, databases, and workflows accurate.',
    chip: 'SYSTEMS & RECORDS',
    logos: [
      'icons/salesforce.png',
      'icons/bitrix.png',
      'icons/microsoft365.svg',
    ],
    bullets: [
      'CRM & database maintenance',
      'Contracts & payment tracking',
      'Spreadsheet trackers & reporting',
    ],
  },
]

/* ---------- Service Logos ---------- */

function Marks({ logos }: { logos: string[] }) {
  return (
    <span className="bento__logos" aria-hidden="true">
      {logos.map((src) => (
        <span key={src} className="bento__logo">
          <img
            src={`${import.meta.env.BASE_URL}${src}`}
            alt=""
            width={22}
            height={22}
            decoding="async"
          />
        </span>
      ))}
    </span>
  )
}

/* ---------- Services Page ---------- */

export default function ServicesGrid() {
  return (
    <section
      className="pgrid sgrid"
      aria-labelledby="services-title"
    >
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">
          Services
        </span>

        <h1
          className="pgrid__title"
          id="services-title"
        >
          Reliable Support. Smoother Operations.
        </h1>

        <p className="pgrid__lede">
          Helping business owners and real estate
          professionals stay organized, manage leads,
          and keep daily operations running smoothly.
        </p>
      </header>

      <div className="home__glass sgrid__glass">

        {/* ---------- Three-Step Process ---------- */}

        <div
          className="sgrid__method"
          aria-labelledby="method-title"
        >
          <div className="sgrid__method-copy">
            <span className="sgrid__method-eyebrow">
              How I Work
            </span>

            <h2
              className="sgrid__method-title"
              id="method-title"
            >
              A Simple Process.
              <br />
              <span>Reliable Support.</span>
            </h2>

            <p className="sgrid__method-sub">
              Every business has different needs.
              I focus on understanding your priorities,
              organizing the workflow, and providing
              consistent support.
            </p>
          </div>

          <ol className="sgrid__stages" role="list">
            {STAGES.map((s, i) => {
              const StageIcon = s.Icon

              return (
                <li
                  key={s.index}
                  className="sgrid__stage"
                  style={{ '--i': i } as CSSProperties}
                >
                  <span
                    className="sgrid__stage-ghost"
                    aria-hidden="true"
                  >
                    {s.index}
                  </span>

                  <span
                    className="sgrid__stage-icon"
                    aria-hidden="true"
                  >
                    <StageIcon
                      size={22}
                      weight="duotone"
                    />
                  </span>

                  <h3 className="sgrid__stage-label">
                    {s.label}
                  </h3>

                  <p className="sgrid__stage-body">
                    {s.body}
                  </p>

                  <ul
                    className="sgrid__stage-chips"
                    role="list"
                    aria-label={`${s.label} touches`}
                  >
                    {s.chips.map((c) => (
                      <li
                        key={c}
                        className="sgrid__stage-chip"
                      >
                        {c}
                      </li>
                    ))}
                  </ul>
                </li>
              )
            })}
          </ol>
        </div>

        {/* ---------- Service Cards ---------- */}

        <div className="sgrid__offers">
          <div className="sgrid__offers-head">
            <h2 className="sgrid__offers-title">
              What I Can Do for You.
            </h2>

            <p className="sgrid__offers-sub">
              Flexible support tailored to your
              business needs. Choose one service
              or combine a few.
            </p>
          </div>

          <ul
            className="bento sgrid__services"
            role="list"
          >
            {SERVICES.map((s) => (
              <li
                key={s.title}
                className="bento__card sgrid__service"
              >
                <span className="bento__head">
                  <span className="sgrid__service-top">
                    <Marks logos={s.logos} />

                    <span
                      className="sgrid__service-index"
                      aria-hidden="true"
                    >
                      {s.index} / 05
                    </span>
                  </span>

                  <span className="bento__title">
                    {s.title}
                  </span>

                  <span className="bento__desc">
                    {s.description}
                  </span>
                </span>

                <span
                  className="sgrid__chip"
                  aria-hidden="true"
                >
                  {s.chip}
                </span>

                <ul
                  className="sgrid__bullets"
                  role="list"
                >
                  {s.bullets.map((b) => (
                    <li
                      key={b}
                      className="sgrid__bullet"
                    >
                      <CheckCircle
                        size={15}
                        weight="duotone"
                        aria-hidden="true"
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        {/* ---------- Animated Client Support Workflow ---------- */}

        <div className="sgrid__flow">
          <header className="sgrid__flow-head">
            <div className="sgrid__flow-copy">

              <span className="sgrid__flow-eyebrow">
                Workflow in Action
              </span>

              <h2 className="sgrid__flow-title">
                From Inquiry to Resolution.
              </h2>

              <p className="sgrid__flow-sub">
                A visual example of how I manage client
                inquiries, organize information, coordinate
                follow-ups, and keep tasks moving toward
                completion.
              </p>

            </div>

            <ul
              className="sgrid__flow-tools"
              role="list"
              aria-label="Areas of support shown in this workflow"
            >
              {TOOLS.map(({ Icon: ToolIcon, label }) => (
                <li
                  key={label}
                  className="sgrid__flow-tool"
                >
                  <ToolIcon
                    size={14}
                    weight="duotone"
                    aria-hidden="true"
                  />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </header>

          <div className="sgrid__flow-main">
            <Autopilot compact maxScale={1.08} />
          </div>

          <p
            style={{
              margin: '12px 0 0',
              textAlign: 'center',
              fontSize: '12px',
              lineHeight: 1.5,
              color: 'var(--muted)',
            }}
          >
            A visual overview of how I manage client inquiries, coordinate follow-ups, and guide tasks from start to resolution.
          </p>
        </div>

      </div>
    </section>
  )
}

/* SERVICES — DARK OUTER BACKGROUND ONLY */

[data-theme="dark"] .pgrid.sgrid {
  background-color: #17131F;
}
