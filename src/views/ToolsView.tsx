
import { useState } from 'react'
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
      { name: 'Zoho', file: 'zoho.png', use: 'Business and CRM tools' },
      { name: 'Salesforce', file: 'salesforce.png', use: 'Lead and contact management' },
      { name: 'Realtor.com', file: 'realtor.png.png', use: 'Property information' },
      { name: 'Zillow', file: 'zillow.png', use: 'Property research' },
      { name: 'PropStream', file: 'propstream.png', use: 'Real estate lead research' },
      { name: 'BatchLeads', file: 'batchleads.png', use: 'Property and lead data' },
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
      { name: 'Batch Dialer', file: 'batchdialer.png', use: 'Outbound call campaigns' },
      { name: 'Call Tools', file: 'calltools.png.jpg', use: 'Calling and follow-ups' },
      { name: 'Slack', file: 'slack.svg', use: 'Team communication' },
      { name: 'Microsoft Teams', file: 'teams.png', use: 'Team meetings and collaboration' },
      { name: 'Zoom', file: 'zoom.png', use: 'Virtual meetings' },
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
      { name: 'Google Workspace', file: 'googleworkspace.svg', use: 'Documents and collaboration' },
      { name: 'Microsoft 365', file: 'microsoft365.svg', use: 'Office productivity' },
      { name: 'Odoo', file: 'odoo.svg', use: 'Invoicing and client records' },
      { name: 'ClickUp', file: 'clickup.png', use: 'Task organization' },
      { name: 'Calendly', file: 'calendly.png', use: 'Appointment scheduling' },
      { name: 'Asana', file: 'asana.png', use: 'Task management' },
      { name: 'Notion', file: 'notion.svg', use: 'Trackers and documentation' },
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
  groups[2].tools[8], // Asana instead of ClickUp
  groups[2].tools[9],
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
    tools: [groups[2].tools[1], groups[2].tools[7]],
  },
]

export default function ToolsView() {
  const [active, setActive] = useState(groups[0].id)
  const current = groups.find(group => group.id === active) ?? groups[0]
  const total = groups.reduce((sum, group) => sum + group.tools.length, 0)

  return (
    <div className="tw-page">
      <div className="tw-ambient" aria-hidden="true" />

      {/* HERO */}
      <section className="tw-hero">
        <div className="tw-hero-copy">
          <span className="tw-kicker">
            MY DIGITAL WORKSPACE
          </span>

          <h1>
            Tools that help
            <br />
            me <em>get things done.</em>
          </h1>

          <p>
            From managing real estate leads to organizing operations
            and creating content, here's a look at the platforms
            that support my work.
          </p>

          <div className="tw-hero-actions">
            <a href="#explore-tools" className="tw-primary-btn">
              Explore My Toolkit
              <span aria-hidden="true">↗</span>
            </a>
            <a href="#workflow" className="tw-text-link">
              See My Workflow <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="tw-hero-stat">
            <strong>{total}</strong>
            <span>
              Platforms
              <br />
              across {groups.length} categories
            </span>
          </div>
        </div>

        <div className="tw-hero-visual" aria-label="Featured software tools">
          <div className="tw-orbit tw-orbit-one" aria-hidden="true" />
          <div className="tw-orbit tw-orbit-two" aria-hidden="true" />

          <div className="tw-center-card">
            <span className="tw-center-icon">✦</span>
            <span className="tw-center-title">My Toolkit</span>
            <span className="tw-center-subtitle">
              Organized. Connected. Creative.
            </span>
          </div>

          {featured.map((tool, index) => (
            <div
              className={`tw-float-card tw-float-${index + 1}`}
              key={tool.name}
              title={tool.name}
            >
              <Logo tool={tool} />
              <span>{tool.name}</span>
            </div>
          ))}
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
              {current.tools.map(tool => (
                <article className="tw-tool-card" key={tool.name}>
                  <Logo tool={tool} />
                  <div className="tw-tool-info">
                    <h4>{tool.name}</h4>
                    <p>{tool.use}</p>
                  </div>
                  <span className="tw-tool-corner" aria-hidden="true">
                    ✧
                  </span>
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
          <p>
            An example of how different tools can support
            a real estate lead management workflow.
          </p>
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

        <p className="tw-workflow-note">
          Illustrative workflow based on administrative and real estate
          support tasks — not an automated software integration.
        </p>
      </section>

      {/* FOOTER */}
      <div className="tw-outro">
        <span>✦</span>
        <p>
          Technology supports the process.
          <strong> Reliable support makes it work.</strong>
        </p>
      </div>
    </div>
  )
}
