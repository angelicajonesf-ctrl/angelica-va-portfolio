
import { useState } from 'react'
import type { CSSProperties } from 'react'
import './ToolsView.css'

type Tool = Readonly<{
  name: string
  file: string
}>

type ToolGroup = Readonly<{
  title: string
  description: string
  tools: readonly Tool[]
}>

const groups: readonly ToolGroup[] = [
  {
    title: 'CRM & Real Estate',
    description: 'Lead management, property research, and client records.',
    tools: [
      { name: 'Bitrix24', file: 'bitrix.png' },
      { name: 'HubSpot', file: 'hubspot.svg' },
      { name: 'Zoho', file: 'zoho.png' },
      { name: 'Salesforce', file: 'salesforce.png' },
      { name: 'Realtor.com', file: 'realtor.png.png' },
      { name: 'Zillow', file: 'zillow.png' },
      { name: 'PropStream', file: 'propstream.png' },
      { name: 'BatchLeads', file: 'batchleads.png' },
    ],
  },
  {
    title: 'Calling & Communication',
    description: 'Outbound calling, follow-ups, and team communication.',
    tools: [
      { name: 'Readymode', file: 'readymode.png.png' },
      { name: 'Mojo Dialer', file: 'mojo.png.png' },
      { name: 'Dialpad', file: 'dialpad.png' },
      { name: 'Batch Dialer', file: 'batchdialer.png' },
      { name: 'Call Tools', file: 'calltools.png.jpg' },
      { name: 'Slack', file: 'slack.svg' },
      { name: 'Microsoft Teams', file: 'teams.png' },
      { name: 'Zoom', file: 'zoom.png' },
    ],
  },
  {
    title: 'Admin & Productivity',
    description: 'Scheduling, organization, documentation, and operations.',
    tools: [
      { name: 'Gmail', file: 'gmail.png' },
      { name: 'Google Calendar', file: 'googlecalendar.png' },
      { name: 'Google Drive', file: 'googledrive.png' },
      { name: 'Google Workspace', file: 'googleworkspace.svg' },
      { name: 'Microsoft 365', file: 'microsoft365.svg' },
      { name: 'Odoo', file: 'odoo.svg' },
      { name: 'ClickUp', file: 'clickup.png' },
      { name: 'Calendly', file: 'calendly.png' },
      { name: 'Asana', file: 'asana.png' },
      { name: 'Notion', file: 'notion.svg' },
    ],
  },
  {
    title: 'Creative & AI',
    description: 'Content design, basic video editing, and AI-assisted work.',
    tools: [
      { name: 'Canva', file: 'canva.png' },
      { name: 'CapCut', file: 'capcut.png' },
      { name: 'ChatGPT', file: 'chatgpt.png' },
      { name: 'Claude', file: 'claude.png' },
    ],
  },
]

const allTools = groups.flatMap(group => group.tools)

const logoUrl = (file: string): string =>
  `${import.meta.env.BASE_URL}icons/${file}`

function ToolLogo({ tool }: { tool: Tool }) {
  const [failed, setFailed] = useState(false)

  return (
    <span className="tools-logo">
      {failed ? (
        <span className="tools-logo__fallback" aria-hidden="true">
          {tool.name.slice(0, 2).toUpperCase()}
        </span>
      ) : (
        <img
          src={logoUrl(tool.file)}
          alt=""
          loading="lazy"
          onError={() => setFailed(true)}
        />
      )}
    </span>
  )
}

function ToolPill({ tool }: { tool: Tool }) {
  return (
    <span className="tools-pill">
      <ToolLogo tool={tool} />
      <span>{tool.name}</span>
    </span>
  )
}

function Marquee({
  tools,
  reverse = false,
}: {
  tools: readonly Tool[]
  reverse?: boolean
}) {
  const repeated = [...tools, ...tools]

  return (
    <div
      className={`tools-marquee${reverse ? ' tools-marquee--reverse' : ''}`}
    >
      <div className="tools-marquee__track">
        {repeated.map((tool, index) => (
          <span
            className="tools-marquee__item"
            key={`${tool.name}-${index}`}
            aria-hidden={index >= tools.length ? 'true' : undefined}
          >
            <ToolPill tool={tool} />
          </span>
        ))}
      </div>
    </div>
  )
}

export default function ToolsView() {
  const firstRow = allTools.slice(0, 15)
  const secondRow = allTools.slice(15)

  return (
    <section className="tools-page">
      <div className="tools-page__glow" aria-hidden="true" />

      <header className="tools-hero">
        <span className="tools-eyebrow">TOOLS & TECH STACK</span>
        <h1>The Tools Behind My Work<span>.</span></h1>
        <p>
          A collection of platforms I've worked with for administrative
          support, real estate operations, communication, organization,
          and creative tasks.
        </p>
        <span className="tools-hero__count">
          {allTools.length} platforms across {groups.length} categories
        </span>
      </header>

      <div className="tools-marquees" aria-label="Tools and platforms">
        <Marquee tools={firstRow} />
        <Marquee tools={secondRow} reverse />
      </div>

      <div className="tools-section-heading">
        <span className="tools-eyebrow">MY TOOLKIT</span>
        <h2>Organized by What I Do</h2>
        <p>
          From managing leads and client communication to keeping
          daily operations organized.
        </p>
      </div>

      <div className="tools-groups">
        {groups.map((group, index) => (
          <section
            className="tools-group"
            key={group.title}
            style={{ '--group-index': index } as CSSProperties}
          >
            <div className="tools-group__heading">
              <span className="tools-group__number">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
              </div>
            </div>

            <div className="tools-group__grid">
              {group.tools.map(tool => (
                <div className="tools-tile" key={tool.name}>
                  <ToolLogo tool={tool} />
                  <span>{tool.name}</span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <footer className="tools-footer">
        <span className="tools-footer__sparkle" aria-hidden="true">✦</span>
        <p>
          The right tools make a difference — but thoughtful,
          reliable support is what brings everything together.
        </p>
      </footer>
    </section>
  )
}
