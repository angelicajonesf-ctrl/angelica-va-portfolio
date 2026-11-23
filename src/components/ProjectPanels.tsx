import { useEffect, useState, type ReactNode } from 'react'
import { Ticket, Robot, FlowArrow, type Icon } from '@/components/slab'
import { lazy, Suspense } from 'react'
import AIStackGrid from './AIStackGrid'
import { AppsSection } from './Projects'
import { useFunnelModal } from './FunnelModal'
import { websiteFunnel } from '@/data/funnels'

const FunnelBarrel = lazy(() => import('./FunnelBarrel'))
const inboxAsset = (name: string) => `${import.meta.env.BASE_URL}projects/${name}`

export function AutomationsPanel() {
  return (
    <div className="ppanel ppanel--window inbox-window">
      <div className="ppanel__bar">
        <span className="ppanel__dots" aria-hidden="true"><i /><i /><i /></span>
        <span className="ppanel__url"><span className="ppanel__url-host">Executive & Business Operations</span> / case studies</span>
      </div>
      <div className="inbox-gallery">
        <article className="inbox-case">
          <header className="inbox-case__header">
            <span className="inbox-case__eyebrow">01 / Executive Inbox Management</span>
            <h2>3,714 emails, 241 unread — <em>now zero.</em></h2>
            <p>From unstructured correspondence to a priority-driven inbox management system.</p>
          </header>
          <div className="inbox-case__comparison">
            { [
              { name: 'Before', status: '241 unread', file: 'inbox-before.png', desc: 'Unsorted correspondence with no custom labeling system.' },
              { name: 'After', status: 'Inbox zero', file: 'inbox-after.png', desc: 'Color-coded labels and dedicated action sections.' }
            ].map((shot) => <figure key={shot.name} className="inbox-case__shot" data-state={shot.name.toLowerCase()}>
              <div className="inbox-case__shot-head"><strong>{shot.name}</strong><span>{shot.status}</span></div>
              <a href={inboxAsset(shot.file)} target="_blank" rel="noopener noreferrer" aria-label={`Open ${shot.name.toLowerCase()} screenshot full size (new tab)`}>
                <img src={inboxAsset(shot.file)} alt={`${shot.name} inbox organization`} />
              </a>
              <figcaption>{shot.desc}</figcaption>
            </figure>) }
          </div>
          <div className="inbox-case__details">
            <section><h3>The challenge</h3><p>Thousands of unsorted emails made it difficult to identify urgent requests and track follow-ups.</p></section>
            <section><h3>My approach</h3><p>Created color-coded labels by category and priority, cleared the backlog, set up action sections, and maintained daily inbox reviews.</p></section>
            <section className="inbox-case__result"><h3>The result</h3><p>Inbox zero achieved, with a structured system for tracking requests and managing correspondence.</p></section>
          </div>
          <footer className="inbox-case__footer"><span>Tool: Gmail</span><span>01 / Inbox Management</span></footer>
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
