
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

export default function ToolsView() {
  const [active, setActive] = useState(groups[0].id)
  const current = groups.find(group => group.id === active) ?? groups[0]

  return (
    <div className="tw-page">
      <div className="tw-ambient" aria-hidden="true" />

      {/* HERO */}
      <section className="tw-hero tw-clean-hero">
        <div className="tw-hero-copy">
          <span className="tw-kicker">MY DIGITAL WORKSPACE</span>
          <h1>Tools that help me <em>get things done.</em></h1>
          <p>From managing real estate leads to organizing operations and creating content, here's a look at the platforms that support my work.</p>
        </div>
      </section>

{/* TOOL EXPLORER */}
<section className="tw-explorer" id="explore-tools">
  <div className="tw-browser-intro">
    <div><span className="tw-kicker">ONE TOOLKIT</span><h2>Many<br/><em>possibilities.</em></h2></div>
    <p>Select a category to see the platforms I've worked with and the tasks they support.</p>
    <a href="#workflow" className="tw-browser-action">See My Workflow <span>→</span></a>
  </div>
  <div className="tw-explorer-shell">
    <div className="tw-browser-bar"><div className="tw-browser-dots" aria-hidden="true"><i/><i/><i/></div><div className="tw-browser-address">my.toolkit <span>/{active === 'real-estate' ? 'crm-real-estate' : active}</span></div></div>
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
