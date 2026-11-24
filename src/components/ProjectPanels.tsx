import { useEffect, useState, type ReactNode } from 'react'
import { Ticket, Robot, FlowArrow, type Icon } from '@/components/slab'
import { lazy, Suspense } from 'react'
import AIStackGrid from './AIStackGrid'
import { AppsSection } from './Projects'
import { useFunnelModal } from './FunnelModal'
import { websiteFunnel } from '@/data/funnels'

const FunnelBarrel = lazy(() => import('./FunnelBarrel'))
const inboxAsset = (name: string) => `${import.meta.env.BASE_URL}projects/${name}`


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
]

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

          {/* BEFORE AND AFTER */}

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
            <span>Tool: {project.tool}</span>
            <span>
              {project.number} / {project.title}
            </span>
          </footer>

        </article>
      </div>
    </div>
  )
}


function SectionWindow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="ppanel ppanel--window">
      <div className="ppanel__bar">
        <span className="ppanel__dots" aria-hidden="true"><i /><i /><i /></span>
        <span className="ppanel__url"><span className="ppanel__url-host">{label}</span></span>
      </div>
      <div className="ppanel__scroll">{children}</div>
    </div>
  )
}
export function BarrelPanel() {
  const { openFull, modal } = useFunnelModal()
  return (
    <div className="ppanel ppanel--barrel">
      <Suspense fallback={<div className="funnels__barrel-skeleton" aria-hidden="true" />}>
        <FunnelBarrel funnels={websiteFunnel} onOpen={openFull} />
      </Suspense>
      {modal}
    </div>
  )
}
export function AIWindow() {
  return <SectionWindow label="Your systems"><AIStackGrid /></SectionWindow>
}
export function AppsWindow() {
  return <SectionWindow label="Your apps"><AppsSection /></SectionWindow>
}
export function PlanPanel() {
  return <div className="ppanel ppanel--frame"><FrameBar host="yourdomain.com" path="/sample-plan" /><LiveFrame src="/placeholders/sample-plan.html" title="Sample document" /></div>
}
type Build = { id: string; label: string; src: string; path: string; Icon: Icon }
const BUILDS: Build[] = [
  { id: 'ticketing', label: 'Featured Project One', src: '/placeholders/sample-plan.html?doc=1', path: '/featured-one', Icon: Ticket },
  { id: 'framework', label: 'Featured Project Two', src: '/placeholders/sample-plan.html?doc=2', path: '/featured-two', Icon: Robot },
  { id: 'workflow', label: 'Featured Project Three', src: '/placeholders/sample-plan.html?doc=3', path: '/featured-three', Icon: FlowArrow },
]
function BuildPanel({ build }: { build: Build }) {
  return <div className="ppanel ppanel--frame"><FrameBar host="yourdomain.com" path={build.path} /><LiveFrame src={build.src} title={build.label} /></div>
}
export const TicketingPanel = () => <BuildPanel build={BUILDS[0]} />
export const FrameworkPanel = () => <BuildPanel build={BUILDS[1]} />
export const WorkflowPanel = () => <BuildPanel build={BUILDS[2]} />
function FrameBar({ host, path }: { host: string; path: string }) {
  return <div className="ppanel__bar"><span className="ppanel__dots" aria-hidden="true"><i /><i /><i /></span><span className="ppanel__url"><span className="ppanel__url-host">{host}</span><span className="ppanel__url-path">{path}</span></span></div>
}
const FRAME_DELAY_MS = 440
function LiveFrame({ src, title }: { src: string; title: string }) {
  const [ready, setReady] = useState(false)
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    const id = window.setTimeout(() => setMounted(true), FRAME_DELAY_MS)
    return () => window.clearTimeout(id)
  }, [])
  return <div className="ppanel__stage">
    {!ready && <div className="ppanel__skeleton" aria-hidden="true" />}
    {mounted && <iframe className="ppanel__iframe" src={src} title={title} loading="eager" onLoad={() => setReady(true)} data-ready={ready ? 'true' : 'false'} />}
  </div>
}
