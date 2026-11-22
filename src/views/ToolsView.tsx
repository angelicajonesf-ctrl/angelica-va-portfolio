
import { useState, useRef } from 'react'
import type { PointerEvent, CSSProperties } from 'react'
import './ToolsView.css'

type Tool = {
  name: string
  file: string
  use: string
}

type Group = {
  id: string
  title: string
  description: string
  tools: Tool[]
}

const groups: Group[] = [
  {
    id: 'real-estate',
    title: 'CRM & Real Estate',
    description: 'Researching properties, organizing leads, and maintaining accurate client records.',
    tools: [
      { name: 'Bitrix24', file: 'bitrix.png', use: 'Lead records and follow-ups' },
      { name: 'HubSpot', file: 'hubspot.svg', use: 'CRM and pipeline tracking' },
      { name: 'Zoho CRM', file: 'zoho.png', use: 'Business and CRM tools' },
      { name: 'Salesforce', file: 'salesforce.png', use: 'Lead and contact management' },
      { name: 'Realtor.com', file: 'realtor.png.png', use: 'Property information' },
      { name: 'Zillow', file: 'zillow.png', use: 'Property research' },
      { name: 'PropStream', file: 'propstream.png', use: 'Real estate lead research' },
      { name: 'BatchLeads', file: 'batchleads.png', use: 'Property and lead data' },
      { name: 'Podio', file: 'podio.png', use: 'Real estate CRM and workflows' },
      { name: 'Odoo', file: 'odoo.svg', use: 'Client records and invoicing' },
    ],
  },
  {
    id: 'communication',
    title: 'Calling & Communication',
    description: 'Connecting with prospects, handling inquiries, and keeping conversations organized.',
    tools: [
      { name: 'Readymode', file: 'readymode.png.png', use: 'Outbound calling' },
      { name: 'Mojo Dialer', file: 'mojo.png.png', use: 'Prospecting calls' },
      { name: 'Dialpad', file: 'dialpad.png', use: 'Business communication' },
      { name: 'BatchDialer', file: 'batchdialer.png', use: 'Outbound call campaigns' },
      { name: 'CallTools', file: 'calltools.png.jpg', use: 'Calling and follow-ups' },
      { name: 'Slack', file: 'slack.png', use: 'Team communication' },
      { name: 'Microsoft Teams', file: 'teams.png', use: 'Team meetings and collaboration' },
      { name: 'Zoom', file: 'zoom.png', use: 'Virtual meetings' },
      { name: 'RingCentral', file: 'ringcentral.png', use: 'Business phone communication' },
      { name: 'VICIdial', file: 'vicidial.png', use: 'Call center operations' },
      { name: 'Google Meet', file: 'googlemeet.png', use: 'Video meetings' },
      { name: 'WhatsApp', file: 'whatsapp.png', use: 'Client communication' },
      { name: 'Loom', file: 'loom.png', use: 'Video messaging and walkthroughs' },
    ],
  },
  {
    id: 'productivity',
    title: 'Admin & Productivity',
    description: 'Managing documentation, scheduling, reporting, and daily business operations.',
    tools: [
      { name: 'Gmail', file: 'gmail.png', use: 'Email communication' },
      { name: 'Google Calendar', file: 'googlecalendar.png', use: 'Scheduling and appointments' },
      { name: 'Google Drive', file: 'googledrive.png', use: 'File organization' },
      { name: 'Google Docs', file: 'googledocs.png', use: 'Document creation' },
      { name: 'Google Sheets', file: 'googlesheets.png', use: 'Spreadsheets and reporting' },
      { name: 'Google Slides', file: 'googleslides.png', use: 'Presentation creation' },
      { name: 'Microsoft Word', file: 'word.png', use: 'Document formatting' },
      { name: 'Microsoft Excel', file: 'excel.png', use: 'Spreadsheet management' },
      { name: 'Microsoft PowerPoint', file: 'powerpoint.png', use: 'Presentation design' },
      { name: 'Microsoft Outlook', file: 'outlook.png', use: 'Email and calendar management' },
      { name: 'ClickUp', file: 'clickup.png', use: 'Task organization' },
      { name: 'Calendly', file: 'calendly.png', use: 'Appointment scheduling' },
      { name: 'Asana', file: 'asana.png', use: 'Task management' },
      { name: 'Notion', file: 'notion.svg', use: 'Trackers and documentation' },
      { name: 'DocuSign', file: 'docusign.png', use: 'Electronic signatures' },
      { name: 'Dropbox', file: 'dropbox.png', use: 'Cloud storage and file sharing' },
      { name: 'Otter.ai', file: 'otter.png', use: 'Meeting transcription and notes' },
    ],
  },
  {
    id: 'creative',
    title: 'Creative & AI',
    description: 'Creating visual content, basic video edits, and supporting writing and research.',
    tools: [
      { name: 'Canva', file: 'canva.png', use: 'Graphics and visual content' },
      { name: 'CapCut', file: 'capcut.png', use: 'Basic video editing' },
      { name: 'ChatGPT', file: 'chatgpt.png', use: 'AI-assisted writing and planning' },
      { name: 'Claude', file: 'claude.png', use: 'AI-assisted research and drafting' },
      { name: 'Gemini', file: 'gemini.png', use: 'AI assistance and research' },
      { name: 'Grammarly', file: 'grammarly.png', use: 'Writing and proofreading' },
      { name: 'Zapier', file: 'zapier.png', use: 'Workflow automation' },
      { name: 'Make', file: 'make.png', use: 'Visual workflow automation' },
    ],
  },
  {
    id: 'social',
    title: 'Social Media & Marketing',
    description: 'Managing content, audience engagement, scheduling, and digital outreach.',
    tools: [
      { name: 'Meta Business Suite', file: 'metabusinesssuite.png', use: 'Social media management' },
      { name: 'Facebook', file: 'facebook.png', use: 'Page management' },
      { name: 'Instagram', file: 'instagram.png', use: 'Content and engagement' },
      { name: 'LinkedIn', file: 'linkedin.png', use: 'Professional networking' },
      { name: 'LinkedIn Sales Navigator', file: 'salesnavigator.png', use: 'Prospect research' },
      { name: 'Metricool', file: 'metricool.png', use: 'Content scheduling and analytics' },
    ],
  },
  {
    id: 'web',
    title: 'Web Development & Digital Tools',
    description: 'Supporting website creation, customization, deployment, and troubleshooting.',
    tools: [
      { name: 'Wix', file: 'wix.png', use: 'Website creation and editing' },
      { name: 'Netlify', file: 'netlify.png', use: 'Website hosting and deployment' },
      { name: 'GitHub', file: 'github.png', use: 'Version control and hosting' },
      { name: 'Visual Studio Code', file: 'vscode.png', use: 'Code editing and customization' },
      { name: 'Chrome DevTools', file: 'chromedevtools.png', use: 'Website inspection and debugging' },
    ],
  },
]

const imagePath = (file: string) =>
  `${import.meta.env.BASE_URL}icons/${file}`

function Logo({ tool }: { tool: Tool }) {
  const [failed, setFailed] = useState(false)

  return (
    <span className="tw-logo">
      {failed ? (
        <span className="tw-logo-fallback">
          {tool.name.slice(0, 2).toUpperCase()}
        </span>
      ) : (
        <img
          src={imagePath(tool.file)}
          alt=""
          loading="lazy"
          onError={() => setFailed(true)}
        />
      )}
    </span>
  )
}

const featured = [
  groups[0].tools[1],
  groups[0].tools[5],
  groups[0].tools[6],
  groups[2].tools[12], // Asana
  groups[2].tools[13],
  groups[3].tools[0],
  groups[3].tools[1],
  groups[3].tools[2],
]

const workflow = [
  {
    number: '01',
    title: 'Research',
    description: 'Find and review property information and potential leads.',
    tools: [groups[0].tools[6], groups[0].tools[5]],
  },
  {
    number: '02',
    title: 'Organize',
    description: 'Record contact details, lead status, and follow-up notes.',
    tools: [groups[0].tools[1], groups[0].tools[0]],
  },
  {
    number: '03',
    title: 'Connect',
    description: 'Reach out to prospects and document conversations.',
    tools: [groups[1].tools[0], groups[1].tools[2]],
  },
  {
    number: '04',
    title: 'Schedule',
    description: 'Coordinate appointments and keep calendars updated.',
    tools: [groups[2].tools[1], groups[2].tools[11]],
  },
]

const stickerColors = ['#ffe4da','#deebff','#ffeadb','#ffdddd','#ebeaee','#efe3ff','#eee5fa','#dbf3ec']
const tapeColors = ['#f58db1','#f58db1','#f58db1','#8dcfc2','#8dcfc2','#c0a4f4','#c0a4f4','#edc66d']
const tilts = [-3,3,-2,3,2,-3,3,-2]
const stickerCategories = ['CRM','Real Estate','Real Estate','Operations','Operations','Creative','Creative','AI']

function Sticker({tool,index}: {tool: Tool; index: number}) {
  const drag = useRef<{id:number; x:number; y:number; dx:number; dy:number} | null>(null)
  const motion = useRef<Animation | null>(null)
  const [held,setHeld] = useState(false)
  const [returning,setReturning] = useState(false)
  function down(e: PointerEvent<HTMLDivElement>) {
    if (e.button !== 0 || drag.current) return
    motion.current?.cancel()
    setReturning(false)
    const el = e.currentTarget
    el.setPointerCapture(e.pointerId)
    drag.current = {id:e.pointerId,x:e.clientX,y:e.clientY,dx:0,dy:0}
    setHeld(true)
    el.style.transform = 'translateY(-8px) rotate(0deg) scale(1.1)'
  }
  function move(e: PointerEvent<HTMLDivElement>) {
    const d = drag.current
    if (!d || d.id !== e.pointerId) return
    d.dx=e.clientX-d.x; d.dy=e.clientY-d.y
    e.currentTarget.style.transform = `translate(${d.dx}px,${d.dy-8}px) rotate(0deg) scale(1.1)`
  }
  function release(e: PointerEvent<HTMLDivElement>) {
    const d=drag.current
    if (!d || d.id !== e.pointerId) return
    drag.current=null
    const el=e.currentTarget
    const start=el.style.transform
    setHeld(false)
    el.style.transform=''
    if(el.hasPointerCapture(e.pointerId)) el.releasePointerCapture(e.pointerId)
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches || !el.animate) return
    setReturning(true)
    const tilt=tilts[index]
    const a=el.animate([{transform:start},{transform:`translate(${-d.dx*.055}px,${-d.dy*.055}px) rotate(${tilt}deg) scale(.98)`,offset:.72},{transform:`rotate(${tilt}deg)`}],{duration:560,easing:'cubic-bezier(.18,.75,.24,1)'})
    motion.current=a
    a.onfinish=()=>{setReturning(false); motion.current=null}
  }
  return <div className="tw-board-slot"><div tabIndex={0} aria-label={tool.name} className={`tw-board-sticker${held?' is-held':''}${returning?' is-returning':''}`} style={{'--tilt':`${tilts[index]}deg`,'--tile':stickerColors[index],'--tape':tapeColors[index]} as CSSProperties} onPointerDown={down} onPointerMove={move} onPointerUp={release} onPointerCancel={release} onLostPointerCapture={release} onDragStart={e=>e.preventDefault()}>
    <span className="tw-board-tape" aria-hidden="true" />
    <div className="tw-board-picture"><Logo tool={tool}/></div>
    <strong>{tool.name}</strong><small>{tool.use}</small><span className="tw-board-tag">{stickerCategories[index]}</span>
  </div></div>
}

export default function ToolsView() {
  const [active, setActive] = useState(groups[0].id)
  const current = groups.find(group => group.id === active) ?? groups[0]
  const total = groups.reduce((sum, group) => sum + group.tools.length, 0)

  return (
    <div className="tw-page">
      <div className="tw-ambient" aria-hidden="true" />

      {/* HERO */}
      <section className="tw-hero tw-board-hero">
        <div className="tw-compact-heading">
        <div className="tw-hero-copy">
          <span className="tw-kicker">MY DIGITAL WORKSPACE</span>
          <h1>Tools that help me <em>get things done.</em></h1>
          <p>From managing real estate leads to organizing operations and creating content, here's a look at the platforms that support my work.</p>
        </div>
          <div className="tw-hero-actions"><a href="#explore-tools" className="tw-primary-btn">Explore My Toolkit <span>↗</span></a><a href="#workflow" className="tw-text-link">See My Workflow →</a></div>
        </div>
        <div className="tw-board">
          <div className="tw-board-head">
            <div><span className="tw-kicker">MY TOOLKIT</span><h2>Organized. Connected. Creative.</h2></div>
            <div className="tw-hero-stat"><strong>{total}</strong><span>Platforms<br />across {groups.length} categories</span></div>
          </div>
          <div className="tw-board-stage">
            <svg className="tw-board-ribbon" viewBox="0 0 800 400" preserveAspectRatio="none" aria-hidden="true">
              <path d="M-30 95 C220 -40 460 220 830 70 M-30 320 C240 150 530 450 830 280" fill="none" stroke="#f6a9c6" strokeWidth="42" opacity=".55" />
              <path d="M-30 65 C220 -70 460 190 830 40 M-30 290 C240 120 530 420 830 250" fill="none" stroke="#fff" strokeWidth="1.5" opacity=".8" />
            </svg>
            <div className="tw-board-grid">{featured.map((tool,index) => <Sticker key={tool.name} tool={tool} index={index} />)}</div>
          </div>
      
        </div>
      </section>
    
{/* TOOL EXPLORER */}
<section className="tw-explorer" id="explore-tools">
  <div className="tw-section-intro">
    <h2>One toolkit. Many possibilities<span>.</span></h2>
    <p>
      Select a category to see the platforms I've worked with
      and the tasks they support.
    </p>
  </div>

  <div className="tw-explorer-shell">
    <div className="tw-category-nav" aria-label="Tool categories">
      {groups.map(group => (
        <button
          key={group.id}
          type="button"
          className={`tw-category-btn${active === group.id ? ' is-active' : ''}`}
          onClick={() => setActive(group.id)}
          aria-pressed={active === group.id}
        >
          <span>{group.title}</span>
          <small>{group.tools.length}</small>
        </button>
      ))}
    </div>

    <div className="tw-category-content" key={current.id}>
      <div className="tw-category-heading">
        <div>
          <span className="tw-mini-label">SELECTED CATEGORY</span>
          <h3>{current.title}</h3>
          <p>{current.description}</p>
        </div>

        <span className="tw-category-count">
          {current.tools.length} tools
        </span>
      </div>

      <div className="tw-tool-grid">
        {current.tools.map((tool, index) => (
          <article
            className="tw-tool-card"
            key={tool.name}
            style={{ animationDelay: `${index * 45}ms` }}
          >
            <div className="tw-explorer-logo">
              <Logo tool={tool} />
            </div>

            <div className="tw-tool-info">
              <h4>{tool.name}</h4>
              <p>{tool.use}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* WORKFLOW */}
      <section className="tw-workflow" id="workflow">
        <div className="tw-section-intro">
          <span className="tw-kicker">HOW I PUT THEM TO WORK</span>
          <h2>From research to results<span>.</span></h2>
        </div>

        <div className="tw-workflow-grid">
          {workflow.map((step, index) => (
            <article className="tw-workflow-card" key={step.number}>
              <div className="tw-workflow-top">
                <span>{step.number}</span>
                {index < workflow.length - 1 && (
                  <span className="tw-workflow-arrow" aria-hidden="true">
                    →
                  </span>
                )}
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              <div className="tw-workflow-logos">
                {step.tools.map(tool => (
                  <span key={tool.name} title={tool.name}>
                    <Logo tool={tool} />
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
