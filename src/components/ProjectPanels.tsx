
import { useEffect, useState, type ReactNode } from 'react'
import { Ticket, Robot, FlowArrow, type Icon } from '@/components/slab'
import { lazy, Suspense } from 'react'
import AIStackGrid from './AIStackGrid'
import { AppsSection } from './Projects'
import { useFunnelModal } from './FunnelModal'
import { websiteFunnel } from '@/data/funnels'

const FunnelBarrel = lazy(() => import('./FunnelBarrel'))

const inboxAsset = (name: string) =>
  `${import.meta.env.BASE_URL}projects/${encodeURIComponent(name)}`

/* ========================================
   EXECUTIVE SUPPORT PROJECTS
======================================== */

const executiveCases = [
  {
    id: 'inbox',
    number: '01',
    title: 'Inbox Management',
    eyebrow: 'Executive Inbox Management',
    headline: '3,714 emails, 241 unread —',
    highlight: 'now zero.',
    description:
      'From unstructured correspondence to a priority-driven inbox management system.',
    tool: 'Gmail',
    shots: [
      {
        name: 'Before',
        status: '241 unread',
        file: 'inbox-before.png',
        desc: 'Unsorted correspondence with no custom labeling system.',
      },
      {
        name: 'After',
        status: 'Inbox zero',
        file: 'inbox-after.png',
        desc: 'Color-coded labels and dedicated action sections.',
      },
    ],
    challenge:
      'Thousands of unsorted emails made it difficult to identify urgent requests and track follow-ups.',
    approach:
      'Created color-coded labels by category and priority, cleared the backlog, set up action sections, and maintained daily inbox reviews.',
    result:
      'Inbox zero achieved, with a structured system for tracking requests and managing correspondence.',
  },
  {
    id: 'calendar',
    number: '02',
    title: 'Calendar Management',
    eyebrow: 'Executive Calendar Management',
    headline: 'From an empty calendar to',
    highlight: 'organized priorities.',
    description:
      'A structured executive scheduling sample designed to balance meetings, administrative responsibilities, travel, and personal commitments.',
    tool: 'Google Calendar',
    shots: [
      {
        name: 'Before',
        status: 'Unstructured calendar',
        file: 'calendar-before.png',
        desc: 'An empty monthly calendar without organized schedules or task categories.',
      },
      {
        name: 'After',
        status: 'Structured schedule',
        file: 'calendar-after.png',
        desc: 'A centralized, color-coded executive calendar with organized priorities and recurring responsibilities.',
      },
    ],
    challenge:
      'An unstructured calendar makes it difficult to visualize priorities, coordinate commitments, and allocate time effectively.',
    approach:
      'Created five color-coded scheduling categories for meetings, administrative tasks, urgent priorities, travel, and personal appointments. Organized recurring responsibilities and key executive activities throughout the month.',
    result:
      'A centralized monthly schedule that provides clear visibility into executive priorities, upcoming commitments, and daily responsibilities.',
  },
  {
    id: 'meeting',
    number: '03',
    title: 'Meeting Coordination',
    eyebrow: 'Executive Meeting Coordination',
    headline: 'From preparation to',
    highlight: 'accountability.',
    description:
      'A complete executive meeting management sample covering preparation, documentation, action tracking, and post-meeting communication.',
    tool: 'Google Docs · Google Sheets · Gmail · Google Calendar',
    shots: [],
    challenge:
      'Without a structured meeting process, important decisions, assigned responsibilities, and deadlines can easily be overlooked.',
    approach:
      'Prepared a leadership meeting agenda, documented key discussions and decisions, created an action item tracker with a visual dashboard, and drafted a follow-up email outlining responsibilities and deadlines.',
       result:
      'A complete meeting coordination workflow designed to improve communication, provide visibility into outstanding tasks, and maintain accountability.',
  },
  {
    id: 'dms',
    number: '04',
    title: 'Document Management',
    eyebrow: 'Executive Document Management',
    headline: 'From scattered documents to',
    highlight: 'structured control.',
    description:
      'A centralized document management system designed for organized file storage, document tracking, version control, and review monitoring.',
    tool: 'Google Drive · Google Sheets',
    shots: [],
    challenge:
      'Unstructured file storage and inconsistent naming conventions make documents difficult to locate, track, and maintain.',
    approach:
      'Designed a color-coded Google Drive folder architecture, established standardized file naming conventions, created a master document register with review tracking, and developed a visual reporting dashboard.',
    result:
      'A functional portfolio sample containing 22 registered documents across six business categories, supported by eight main folders, document links, version tracking, and review monitoring.',
  },
]

/* ========================================
   MEETING DELIVERABLES
======================================== */

const meetingDeliverables = [
  {
    number: '01',
    phase: 'PREPARE',
    title: 'Meeting Agenda',
    description:
      'A structured leadership meeting agenda outlining objectives, discussion topics, and meeting priorities.',
    file: 'SAMPLE WORK I Meeting Agenda.pdf',
    type: 'pdf',
    tool: 'Google Docs',
    action: 'View meeting agenda',
  },
  {
    number: '02',
    phase: 'DOCUMENT',
    title: 'Meeting Minutes',
    description:
      'A professional record of key discussions, decisions, assigned responsibilities, and agreed next steps.',
    file: 'Sample Work I Meeting Minutes.pdf',
    type: 'pdf',
    tool: 'Google Docs',
    action: 'View meeting minutes',
  },
  {
    number: '03',
    phase: 'TRACK',
    title: 'Action Item Tracker',
    description:
      'An executive dashboard with task assignments, status monitoring, priorities, deadlines, and progress visualization.',
    file: 'meeting-action-tracker-final.png',
    type: 'image',
    tool: 'Google Sheets',
    action: 'View action tracker',
  },
  {
    number: '04',
    phase: 'FOLLOW UP',
    title: 'Post-Meeting Follow-Up',
    description:
      'A professional follow-up email summarizing action items, deadlines, meeting resources, and upcoming commitments.',
    file: 'meeting-follow-up.png',
    type: 'image',
    tool: 'Gmail',
    action: 'View follow-up email',
  },
]

function MeetingDeliverables() {
  return (
    <div className="meeting-project">

      <div className="meeting-project__intro">
        <span className="meeting-project__label">
          THE DELIVERABLES
        </span>

        <h3>A complete meeting management workflow.</h3>

        <p>
          Leadership Strategy Meeting · May 21, 2026
          · Illustrative portfolio sample
        </p>
      </div>

      <div className="meeting-deliverables">

        {meetingDeliverables.map((item) => (
          <article
            className="meeting-deliverable"
            key={item.number}
          >
            <div className="meeting-deliverable__top">
              <span className="meeting-deliverable__number">
                {item.number}
              </span>

              <span className="meeting-deliverable__phase">
                {item.phase}
              </span>
            </div>

            <h3>{item.title}</h3>

            <p>{item.description}</p>

            <a
              className="meeting-deliverable__preview"
              href={inboxAsset(item.file)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${item.title} in a new tab`}
            >
              {item.type === 'image' ? (
                <img
                  src={inboxAsset(item.file)}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <div className="meeting-deliverable__document">

                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M10 4H29L39 14V44H10V4Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M29 4V14H39"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M16 22H33M16 28H33M16 34H28"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>

                  <strong>{item.title}</strong>

                  <span>PDF DOCUMENT</span>

                </div>
              )}
            </a>

            <div className="meeting-deliverable__footer">
              <span>{item.tool}</span>

              <a
                href={inboxAsset(item.file)}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.action} ↗
              </a>
            </div>

          </article>
        ))}

      </div>

      <div className="meeting-workflow">

        <span className="meeting-project__label">
          MEETING MANAGEMENT PROCESS
        </span>

        <div className="meeting-workflow__steps">

          {['Prepare', 'Document', 'Track', 'Follow up'].map(
            (step, index) => (
              <div
                className="meeting-workflow__step"
                key={step}
              >
                <span>{`0${index + 1}`}</span>
                <strong>{step}</strong>
              </div>
            )
          )}

        </div>

      </div>

    </div>
  )
}

/* ========================================
   EXECUTIVE PROJECT PANEL
======================================== */
const dmsDeliverables = [
  {
    number: '01',
    phase: 'ORGANIZE',
    title: 'Google Drive Architecture',
    description:
      'A structured, color-coded folder hierarchy with eight main folders and dedicated subfolders for efficient document retrieval.',
    file: 'dms-drive.png',
    tool: 'Google Drive',
    action: 'View folder architecture',
  },
  {
    number: '02',
    phase: 'STANDARDIZE',
    title: 'File Naming Convention',
    description:
      'A consistent naming system incorporating document dates, category codes, descriptive filenames, and version numbers.',
    file: 'dms-naming.svg',
    tool: 'Document Control',
    action: 'View naming convention',
  },
  {
    number: '03',
    phase: 'REGISTER',
    title: 'Master Document Register',
    description:
      'A centralized tracker containing document IDs, categories, ownership, versions, approval statuses, review dates, and direct document links.',
    file: 'dms-register.png',
    tool: 'Google Sheets',
    action: 'View document register',
  },
  {
    number: '04',
    phase: 'MONITOR',
    title: 'Document Management Dashboard',
    description:
      'A visual reporting dashboard displaying document totals, approval statuses, review deadlines, and category distribution.',
    file: 'dms-dashboard.png',
    tool: 'Google Sheets',
    action: 'View dashboard',
  },
  {
    number: '05',
    phase: 'MAINTAIN',
    title: 'Document Control Workflow',
    description:
      'A standardized process for organizing, registering, reviewing, updating, and maintaining business documents.',
    file: 'dms-workflow.svg',
    tool: 'Process Documentation',
    action: 'View document workflow',
  },
]

function DMSDeliverables() {
  return (
    <div className="meeting-project dms-project">

      <div className="meeting-project__intro">
        <span className="meeting-project__label">
          THE DELIVERABLES
        </span>

        <h3>A complete document management system.</h3>

        <p>
          Summit Business Solutions · May 2026
          · Illustrative portfolio sample
        </p>
      </div>

      <div className="meeting-deliverables">

        {dmsDeliverables.map((item) => (
          <article
            className="meeting-deliverable"
            key={item.number}
          >
            <div className="meeting-deliverable__top">
              <span className="meeting-deliverable__number">
                {item.number}
              </span>

              <span className="meeting-deliverable__phase">
                {item.phase}
              </span>
            </div>

            <h3>{item.title}</h3>

            <p>{item.description}</p>

            <a
              className="meeting-deliverable__preview"
              href={inboxAsset(item.file)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${item.title} in a new tab`}
            >
              <img
                src={inboxAsset(item.file)}
                alt={item.title}
                loading="lazy"
                decoding="async"
              />
            </a>

            <div className="meeting-deliverable__footer">
              <span>{item.tool}</span>

              <a
                href={inboxAsset(item.file)}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.action} ↗
              </a>
            </div>

          </article>
        ))}

      </div>

      <div className="meeting-workflow">

        <span className="meeting-project__label">
          DOCUMENT MANAGEMENT PROCESS
        </span>

        <div className="meeting-workflow__steps">

          {[
            'Organize',
            'Standardize',
            'Register',
            'Monitor',
            'Maintain',
          ].map((step, index) => (
            <div
              className="meeting-workflow__step"
              key={step}
            >
              <span>{`0${index + 1}`}</span>
              <strong>{step}</strong>
            </div>
          ))}

        </div>

      </div>

    </div>
  )
}
export function AutomationsPanel() {
  const [activeCase, setActiveCase] = useState(0)
  const project = executiveCases[activeCase]

  return (
    <div className="ppanel ppanel--window inbox-window">

      <div className="ppanel__bar">
        <span className="ppanel__dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>

        <span className="ppanel__url">
          <span className="ppanel__url-host">
            Executive & Business Operations
          </span>
          {' / case studies'}
        </span>
      </div>

      {/* PROJECT NAVIGATION */}

      <nav
        className="executive-case-tabs"
        aria-label="Executive support projects"
      >
        {executiveCases.map((item, index) => (
          <button
            key={item.id}
            type="button"
            className={`executive-case-tab ${
              activeCase === index ? 'is-active' : ''
            }`}
            aria-pressed={activeCase === index}
            onClick={() => setActiveCase(index)}
          >
            <span className="executive-case-tab__number">
              {item.number}
            </span>

            <span>{item.title}</span>
          </button>
        ))}
      </nav>

      {/* CASE STUDY */}

      <div className="inbox-gallery" key={project.id}>
        <article className="inbox-case executive-case-content">

          <header className="inbox-case__header">
            <span className="inbox-case__eyebrow">
              {project.number} / {project.eyebrow}
            </span>

            <h2>
              {project.headline}{' '}
              <em>{project.highlight}</em>
            </h2>

            <p>{project.description}</p>
          </header>

          {/* PROJECT-SPECIFIC CONTENT */}

          {project.id === 'meeting' ? (

  <MeetingDeliverables />

) : project.id === 'dms' ? (

  <DMSDeliverables />

) : (

            <div className="inbox-case__comparison">
              {project.shots.map((shot) => (
                <figure
                  key={shot.name}
                  className="inbox-case__shot"
                  data-state={shot.name.toLowerCase()}
                >
                  <div className="inbox-case__shot-head">
                    <strong>{shot.name}</strong>
                    <span>{shot.status}</span>
                  </div>

                  <a
                    href={inboxAsset(shot.file)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${shot.name.toLowerCase()} screenshot full size (new tab)`}
                  >
                    <img
                      src={inboxAsset(shot.file)}
                      alt={`${shot.name} — ${project.title}`}
                    />
                  </a>

                  <figcaption>{shot.desc}</figcaption>
                </figure>
              ))}
            </div>

          )}

          {/* CASE STUDY DETAILS */}

          <div className="inbox-case__details">
            <section>
              <h3>The challenge</h3>
              <p>{project.challenge}</p>
            </section>

            <section>
              <h3>My approach</h3>
              <p>{project.approach}</p>
            </section>

            <section className="inbox-case__result">
              <h3>The result</h3>
              <p>{project.result}</p>
            </section>
          </div>

          <footer className="inbox-case__footer">
            <span>
             {project.id === 'meeting' || project.id === 'dms'
  ? 'Tools: '
  : 'Tool: '}
              {project.tool}
            </span>

            <span>
              {project.number} / {project.title}
            </span>
          </footer>

        </article>
      </div>
    </div>
  )
}

/* ========================================
   OTHER PROJECT PANELS
======================================== */

function SectionWindow({
  label,
  children,
}: {
  label: string
  children: ReactNode
}) {
  return (
    <div className="ppanel ppanel--window">
      <div className="ppanel__bar">
        <span className="ppanel__dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>

        <span className="ppanel__url">
          <span className="ppanel__url-host">
            {label}
          </span>
        </span>
      </div>

      <div className="ppanel__scroll">
        {children}
      </div>
    </div>
  )
}

export function BarrelPanel() {
  const { openFull, modal } = useFunnelModal()

  return (
    <div className="ppanel ppanel--barrel">
      <Suspense
        fallback={
          <div
            className="funnels__barrel-skeleton"
            aria-hidden="true"
          />
        }
      >
        <FunnelBarrel
          funnels={websiteFunnel}
          onOpen={openFull}
        />
      </Suspense>

      {modal}
    </div>
  )
}

export function AIWindow() {
  return (
    <SectionWindow label="Your systems">
      <AIStackGrid />
    </SectionWindow>
  )
}

export function AppsWindow() {
  return (
    <SectionWindow label="Your apps">
      <AppsSection />
    </SectionWindow>
  )
}

export function PlanPanel() {
  return (
    <div className="ppanel ppanel--frame">
      <FrameBar
        host="yourdomain.com"
        path="/sample-plan"
      />

      <LiveFrame
        src="/placeholders/sample-plan.html"
        title="Sample document"
      />
    </div>
  )
}

type Build = {
  id: string
  label: string
  src: string
  path: string
  Icon: Icon
}

const BUILDS: Build[] = [
  {
    id: 'ticketing',
    label: 'Featured Project One',
    src: '/placeholders/sample-plan.html?doc=1',
    path: '/featured-one',
    Icon: Ticket,
  },
  {
    id: 'framework',
    label: 'Featured Project Two',
    src: '/placeholders/sample-plan.html?doc=2',
    path: '/featured-two',
    Icon: Robot,
  },
  {
    id: 'workflow',
    label: 'Featured Project Three',
    src: '/placeholders/sample-plan.html?doc=3',
    path: '/featured-three',
    Icon: FlowArrow,
  },
]

function BuildPanel({ build }: { build: Build }) {
  return (
    <div className="ppanel ppanel--frame">
      <FrameBar
        host="yourdomain.com"
        path={build.path}
      />

      <LiveFrame
        src={build.src}
        title={build.label}
      />
    </div>
  )
}

export const TicketingPanel = () => (
  <BuildPanel build={BUILDS[0]} />
)

export const FrameworkPanel = () => (
  <BuildPanel build={BUILDS[1]} />
)

export const WorkflowPanel = () => (
  <BuildPanel build={BUILDS[2]} />
)

function FrameBar({
  host,
  path,
}: {
  host: string
  path: string
}) {
  return (
    <div className="ppanel__bar">
      <span className="ppanel__dots" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>

      <span className="ppanel__url">
        <span className="ppanel__url-host">
          {host}
        </span>

        <span className="ppanel__url-path">
          {path}
        </span>
      </span>
    </div>
  )
}

const FRAME_DELAY_MS = 440

function LiveFrame({
  src,
  title,
}: {
  src: string
  title: string
}) {
  const [ready, setReady] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const id = window.setTimeout(
      () => setMounted(true),
      FRAME_DELAY_MS
    )

    return () => window.clearTimeout(id)
  }, [])

  return (
    <div className="ppanel__stage">

      {!ready && (
        <div
          className="ppanel__skeleton"
          aria-hidden="true"
        />
      )}

      {mounted && (
        <iframe
          className="ppanel__iframe"
          src={src}
          title={title}
          loading="eager"
          onLoad={() => setReady(true)}
          data-ready={ready ? 'true' : 'false'}
        />
      )}

    </div>
  )
}
