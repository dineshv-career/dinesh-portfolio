import ThemeToggle from "@/components/ThemeToggle";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <ScrollReveal />

      <nav>
        <div className="wrap">
          <div className="brand">
            <span className="dot"></span>DINESH.V
          </div>
          <div className="nav-right">
            <ul className="navlinks">
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#work">Work</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <header className="hero">
        <div className="wrap">
          <div className="eyebrow">Bangalore, India — Open to opportunities</div>
          <h1>
            Dinesh V. Builds
            <br />
            interfaces that <span>hold up</span>
            <br />
            under real load.
          </h1>
          <p className="lede">
            Software Engineer with 4+ years shipping production front-ends — React, Next.js, Angular — for
            enterprise clients including Honeywell, from insurance platforms to real-time industrial dashboards.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="mailto:dineshv.career@gmail.com">Email me →</a>
            <a className="btn btn-ghost" href="tel:+916374762475">+91 63747 62475</a>
          </div>
          <div className="readouts reveal">
            <div className="readout"><div className="num">4+</div><div className="lbl">Years Experience</div></div>
            <div className="readout"><div className="num">9</div><div className="lbl">Production Projects</div></div>
            <div className="readout"><div className="num">20+</div><div className="lbl">REST Endpoints Integrated</div></div>
            <div className="readout"><div className="num">8+</div><div className="lbl">Team Cross-Functional</div></div>
          </div>
        </div>
      </header>

      <section id="about">
        <div className="wrap">
          <div className="sec-head"><span className="sec-num mono">01</span><h2>About</h2></div>
          <div className="about-grid">
            <div className="reveal">
              <p>
                I build responsive, user-centric interfaces with React.js, Next.js, and Angular — translating
                business requirements into scalable UI solutions with TypeScript, Bootstrap, and Sass, wired up
                to REST APIs and Node.js backends.
              </p>
              <p>
                Over the past four years I&apos;ve delivered production features for enterprise clients including
                Honeywell, working inside agile, cross-functional teams of 8+ engineers — from insurance policy
                platforms to industrial HMI displays and real-time data visualization tools.
              </p>
            </div>
            <div className="lang-panel reveal">
              <h3>Languages</h3>
              <div className="lang-row"><span>Tamil</span><span>NATIVE</span></div>
              <div className="lang-row"><span>English</span><span>FLUENT</span></div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="wrap">
          <div className="sec-head"><span className="sec-num mono">02</span><h2>Skills &amp; Stack</h2></div>
          <div className="skill-groups">
            <div className="skill-card reveal">
              <h4>Frontend</h4>
              <div className="tags">
                <span className="tag">HTML</span><span className="tag">CSS</span><span className="tag">Bootstrap</span>
                <span className="tag">SCSS</span><span className="tag">JavaScript</span><span className="tag">TypeScript</span>
                <span className="tag">React.js</span><span className="tag">Next.js</span><span className="tag">Redux</span><span className="tag">Angular</span>
              </div>
            </div>
            <div className="skill-card reveal">
              <h4>Backend</h4>
              <div className="tags"><span className="tag">Node.js</span><span className="tag">REST APIs</span></div>
            </div>
            <div className="skill-card reveal">
              <h4>Database</h4>
              <div className="tags"><span className="tag">MongoDB</span><span className="tag">DynamoDB</span></div>
            </div>
            <div className="skill-card reveal">
              <h4>Testing &amp; Quality</h4>
              <div className="tags"><span className="tag">React Testing Library</span><span className="tag">Karma</span></div>
            </div>
            <div className="skill-card reveal">
              <h4>Tools</h4>
              <div className="tags"><span className="tag">Git</span><span className="tag">Jira</span><span className="tag">Bitbucket</span></div>
            </div>
          </div>
        </div>
      </section>

      <section id="work">
        <div className="wrap">
          <div className="sec-head"><span className="sec-num mono">03</span><h2>Featured Work</h2></div>
          <div className="work-grid">
            <div className="work-card reveal">
              <div className="client">Honeywell — FPKS</div>
              <h3>Field Process Knowledge System</h3>
              <p>
                AI-driven platform streamlining field maintenance operations. Built responsive layouts with
                custom screen resolutions, a dynamic scrollbar, and dynamic font sizing for consistent UI
                across devices.
              </p>
              <div className="tags"><span className="tag">Angular</span><span className="tag">Bootstrap</span><span className="tag">TypeScript</span><span className="tag">SASS</span></div>
            </div>
            <div className="work-card reveal">
              <div className="client">SaaS Product</div>
              <h3>SE Suite — Asset Monitoring</h3>
              <p>
                Web-based SaaS platform visualizing real-time data from field Edge devices. Built Gauge, Lane,
                and Bar chart visualization cards with dynamic data integration.
              </p>
              <div className="tags"><span className="tag">React.js</span><span className="tag">Redux</span><span className="tag">Bootstrap</span><span className="tag">TypeScript</span></div>
            </div>
            <div className="work-card reveal">
              <div className="client">Cross-Device Platform</div>
              <h3>MobileApp-Copilot</h3>
              <p>
                Stepper-based web app connecting phones, tablets, and laptops for real-time data collection —
                with drag-and-drop form building and dynamic screen generation.
              </p>
              <div className="tags"><span className="tag">Next.js</span><span className="tag">React DnD</span><span className="tag">TypeScript</span></div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience">
        <div className="wrap">
          <div className="sec-head"><span className="sec-num mono">04</span><h2>Experience</h2></div>
          <div className="timeline">

            <div className="job reveal">
              <div className="job-head"><h3>Software Engineer</h3><span className="period mono">JAN 2026 — PRESENT</span></div>
              <div className="job-company">SKR Enterprises</div>
              <p className="desc"><strong>SKR Insurance Policy</strong> — insurance management system for storing, managing, and tracking policy details, with registration, renewal tracking, and quick customer lookup.</p>
              <ul>
                <li>Developed responsive UI for customer and policy management screens</li>
                <li>Built policy registration, renewal, search, and tracking workflows</li>
                <li>Integrated frontend with 20+ REST API endpoints for customer and policy data</li>
                <li>Worked on database integration to store and retrieve customer and policy details</li>
              </ul>
              <div className="tags"><span className="tag">Next.js</span><span className="tag">Tailwind CSS</span><span className="tag">TypeScript</span><span className="tag">REST APIs</span></div>
            </div>

            <div className="job reveal">
              <div className="job-head"><h3>Associate Software Engineer</h3><span className="period mono">MAR 2022 — SEP 2025</span></div>
              <div className="job-company">Utthunga Technologies</div>
              <p className="desc">Rotated across seven projects for enterprise and industrial clients, including Honeywell, spanning HMI displays, real-time dashboards, and cross-platform data tools.</p>

              <div className="subprojects">
                <div className="subproj">
                  <div className="subproj-head"><h4>Field Process Knowledge System (FPKS) — Honeywell</h4><span className="period mono">MAR — SEP 2025</span></div>
                  <p className="desc">Implemented responsive web designs for custom screen resolutions, a dynamic scrollbar, and dynamic font sizing across screen sizes.</p>
                  <div className="tags"><span className="tag">Angular</span><span className="tag">Bootstrap</span><span className="tag">TypeScript</span><span className="tag">SASS</span></div>
                </div>
                <div className="subproj">
                  <div className="subproj-head"><h4>Quality Control System SE (QCS SE) — Honeywell</h4><span className="period mono">NOV 2024 — FEB 2025</span></div>
                  <p className="desc">Built a floating keyboard window and draggable I/O components; retrieved and integrated RTDR data and plotted real-time data with TeeChart.</p>
                  <div className="tags"><span className="tag">Angular</span><span className="tag">TeeChart</span><span className="tag">SASS</span></div>
                </div>
                <div className="subproj">
                  <div className="subproj-head"><h4>SE Suite (Product)</h4><span className="period mono">JUL — NOV 2024</span></div>
                  <p className="desc">Developed Gauge, Lane, and Bar chart data visualization cards with dynamic data integration; resolved UI consistency issues.</p>
                  <div className="tags"><span className="tag">React.js</span><span className="tag">Redux</span><span className="tag">Bootstrap</span></div>
                </div>
                <div className="subproj">
                  <div className="subproj-head"><h4>MobileApp-Copilot</h4><span className="period mono">FEB — JUL 2024</span></div>
                  <p className="desc">Built a stepper-based Next.js app with responsive mobile/laptop layouts, React DnD drag-and-drop, and dynamic screen generation.</p>
                  <div className="tags"><span className="tag">Next.js</span><span className="tag">React DnD</span></div>
                </div>
                <div className="subproj">
                  <div className="subproj-head"><h4>HMI Web Display — Honeywell</h4><span className="period mono">JUL 2023 — FEB 2024</span></div>
                  <p className="desc">Resolved value-binding and display issues; created and configured new HMI displays and bound values to faceplates.</p>
                  <div className="tags"><span className="tag">HTML</span><span className="tag">CSS</span><span className="tag">JavaScript</span></div>
                </div>
                <div className="subproj">
                  <div className="subproj-head"><h4>Remote Lock</h4><span className="period mono">NOV 2022 — JUN 2023</span></div>
                  <p className="desc">Built tenant door-access frontend with a centralized React Context, third-party API integrations via Node.js/DynamoDB, and backend APIs; fixed duplicate-access bugs.</p>
                  <div className="tags"><span className="tag">React.js</span><span className="tag">Node.js</span><span className="tag">DynamoDB</span></div>
                </div>
                <div className="subproj">
                  <div className="subproj-head"><h4>uEstimate</h4><span className="period mono">APR — OCT 2022</span></div>
                  <p className="desc">Built a PrimeReact-based app with reusable components, API-driven data tables, and frontend authentication/authorization.</p>
                  <div className="tags"><span className="tag">React.js</span><span className="tag">PrimeReact</span></div>
                </div>
              </div>
            </div>

            <div className="job reveal">
              <div className="job-head"><h3>Associate Developer</h3><span className="period mono">FEB 2021 — JUL 2021</span></div>
              <div className="job-company">Vinsinfo Pvt Ltd, Chennai</div>
              <p className="desc"><strong>CMS</strong> — assisted in developing and maintaining web applications alongside senior developers in an Agile environment.</p>
              <ul>
                <li>Developed and maintained UI components for the CMS application</li>
                <li>Implemented UI features based on project requirements</li>
                <li>Fixed UI issues and supported application enhancements</li>
              </ul>
              <div className="tags"><span className="tag">HTML</span><span className="tag">CSS</span><span className="tag">JavaScript</span><span className="tag">REST APIs</span></div>
            </div>

          </div>
        </div>
      </section>

      <section id="education">
        <div className="wrap">
          <div className="sec-head"><span className="sec-num mono">05</span><h2>Education</h2></div>
          <div className="edu-grid">
            <div className="edu-card reveal">
              <div className="period">DEC 2022 — MAY 2025</div>
              <h3>Bachelor of Computer Application</h3>
              <div className="school">Alagappa University, Karaikkudi</div>
            </div>
            <div className="edu-card reveal">
              <div className="period">JUN 2017 — APR 2020</div>
              <h3>Diploma in Computer Engineering</h3>
              <div className="school">Ramakrishna Mission Polytechnic College, Chennai</div>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact">
        <div className="wrap">
          <h2>Let&apos;s build something.</h2>
          <p>Open to front-end and full-stack roles — Bangalore based, open to remote.</p>
          <div className="contact-links">
            <a href="mailto:dineshv.career@gmail.com">dineshv.career@gmail.com</a>
            <a href="tel:+916374762475">+91 63747 62475</a>
            <a href="#" id="linkedin-link">LinkedIn ↗</a>
          </div>
          <div className="foot-note">DINESH V — SOFTWARE ENGINEER — BANGALORE, INDIA</div>
        </div>
      </footer>
    </>
  );
}
