import React, { useState, useEffect, useRef } from "react";
import {
  personalInfo,
  experiences,
  projects,
  education,
  skills,
  achievements,
  codingProfiles,
} from "./constants";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
  CodeIcon,
  LeetcodeIcon,
  ExternalLinkIcon,
} from "./components/Icons";
import SplashScreen from "./components/SplashScreen";
import VisitorCounter from "./components/VisitorCounter";

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  useEffect(() => {
    const animationTimer = setTimeout(() => setIsAnimatingOut(true), 2500);
    const loadTimer = setTimeout(() => setIsLoading(false), 3000);
    return () => {
      clearTimeout(animationTimer);
      clearTimeout(loadTimer);
    };
  }, []);

  const [activeSection, setActiveSection] = useState("experience");
  const sections = useRef<Map<string, HTMLElement | null>>(new Map());

  useEffect(() => {
    if (isLoading) return;

    const canvas = document.getElementById(
      "neural-network-canvas",
    ) as HTMLCanvasElement;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const mouse = { x: null as number | null, y: null as number | null };

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    });

    window.addEventListener("mouseout", () => {
      mouse.x = null;
      mouse.y = null;
    });

    class Particle {
      constructor(
        public x: number,
        public y: number,
        public dx: number,
        public dy: number,
        public size: number,
        public baseSize = size,
      ) {}

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(52, 211, 153, 0.55)";
        ctx.fill();
      }

      update() {
        if (this.x < 0 || this.x > canvas.width) this.dx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.dy *= -1;

        if (mouse.x && mouse.y) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 80) {
            this.x -= dx / dist;
            this.y -= dy / dist;
            this.size = Math.min(this.size + 0.3, this.baseSize * 2);
          } else this.size = Math.max(this.size - 0.1, this.baseSize);
        }

        this.x += this.dx;
        this.y += this.dy;
        this.draw();
      }
    }

    const init = () => {
      particles = [];
      const count = (canvas.width * canvas.height) / 9000;
      for (let i = 0; i < count; i++) {
        particles.push(
          new Particle(
            Math.random() * canvas.width,
            Math.random() * canvas.height,
            Math.random() * 0.4 - 0.2,
            Math.random() * 0.4 - 0.2,
            Math.random() * 1.5 + 1,
          ),
        );
      }
    };

    const connect = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dist =
            (particles[i].x - particles[j].x) ** 2 +
            (particles[i].y - particles[j].y) ** 2;
          if (dist < 18000) {
            ctx.strokeStyle = "rgba(52,211,153,0.2)";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.fillStyle = "#020617"; // slate-950
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => p.update());
      connect();
      requestAnimationFrame(animate);
    };

    init();
    animate();
  }, [isLoading]);

  const navItems = [
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
  ];

  const handleNavClick = (id: string) => {
    const targetElement = document.getElementById(id);
    if (!targetElement) return;

    // Calculate target position, respecting CSS scroll-margin-top
    const scrollMargin = parseInt(
      window.getComputedStyle(targetElement).scrollMarginTop,
      10,
    );
    const targetY =
      targetElement.getBoundingClientRect().top +
      window.pageYOffset -
      scrollMargin;

    const duration = 800; // Duration in milliseconds
    const startY = window.pageYOffset;
    const distance = targetY - startY;
    let startTime: number | null = null;

    // Ease-in-out cubic easing function for a smooth acceleration/deceleration
    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easedProgress = easeInOutCubic(progress);

      window.scrollTo(0, startY + distance * easedProgress);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  if (isLoading) {
    return (
      <div className={isAnimatingOut ? "animate-fade-out" : "animate-fade-in"}>
        <SplashScreen />
      </div>
    );
  }

  return (
    <div
      className="
  min-h-screen 
  text-slate-300 
  font-sans 
  leading-relaxed
  bg-slate-950
  animate-fade-in
  lg:bg-transparent
  lg:animate-fade-in
"
    >
      <div className="max-w-screen-xl mx-auto p-4 md:p-8 lg:p-12 lg:flex lg:justify-between lg:gap-16">
        {/* LEFT PANEL */}
        <header className="lg:sticky lg:top-0 lg:w-1/2 lg:py-12">
          <h1 className="text-5xl font-bold text-slate-100">
            Abhay <span className="text-emerald-400">Goel</span>
          </h1>
          <h2 className="mt-3 text-xl text-slate-300">Software Engineer II</h2>
          <p className="mt-5 max-w-sm text-slate-400">
            Building scalable, reliable software with strong ownership and
            performance-driven engineering.
          </p>

          <nav
            className="hidden lg:block mt-16"
            aria-label="In-page navigation"
          >
            <ul className="w-max">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className="group flex items-center py-3"
                  >
                    <span
                      className={`nav-indicator mr-4 h-px w-8 bg-slate-500 transition-all group-hover:w-16 group-hover:bg-cyan-300 ${activeSection === item.id ? "w-16 bg-cyan-300" : ""}`}
                    ></span>
                    <span
                      className={`nav-text text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-cyan-300 ${activeSection === item.id ? "text-cyan-300" : ""}`}
                    >
                      {item.label}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div
            className="mt-25 flex gap-5"
            style={{ marginTop: "3.25rem", marginBottom: "1.25rem" }}
          >
            <a
              href={`mailto:${personalInfo.email}`}
              className="hover:text-emerald-400"
            >
              <MailIcon />
            </a>
            <a
              href={`tel:${personalInfo.phone}`}
              className="hover:text-emerald-400"
            >
              <PhoneIcon />
            </a>
            <a
              href={personalInfo.links.github}
              target="_blank"
              className="hover:text-emerald-400"
            >
              <GithubIcon />
            </a>
            <a
              href={personalInfo.links.linkedin}
              target="_blank"
              className="hover:text-emerald-400"
            >
              <LinkedinIcon />
            </a>
          </div>
        </header>

        {/* RIGHT CONTENT */}
        <main className="lg:w-1/2 lg:py-12 space-y-28">
          {/* EXPERIENCE */}
          <section id="experience">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-violet-400 text-transparent bg-clip-text mb-10">
              Experience
            </h3>

            <div className="relative border-l-2 border-emerald-400/30">
              {experiences.map((exp, i) => (
                <div key={i} className="mb-14 group">
                  <div className="absolute w-4 h-4 bg-slate-800 rounded-full -left-2 border border-emerald-400 group-hover:bg-emerald-400 group-hover:shadow-[0_0_18px_rgba(52,211,153,0.5)] transition" />
                  <div className="pl-8">
                    <p className="text-xs uppercase text-slate-400">
                      {exp.period}
                    </p>
                    <h4 className="text-lg font-bold text-slate-100">
                      {exp.role} ·{" "}
                      <span className="text-emerald-400">{exp.company}</span>
                    </h4>
                    <p className="text-sm text-slate-400">{exp.location}</p>
                    <ul className="mt-4 list-disc list-inside space-y-2">
                      {exp.points.map((p, idx) => (
                        <li key={idx}>{p}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>
          {/* PROJECTS */}
          <section id="projects">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-violet-400 text-transparent bg-clip-text mb-10">
              Projects
            </h3>

            <div className="space-y-12">
              {projects.map((proj, i) => (
                <div
                  key={i}
                  className="rounded-xl bg-slate-900/50 p-6 hover:bg-slate-900/70 transition"
                >
                  <h4 className="text-lg font-bold text-emerald-400">
                    {proj.name}
                  </h4>

                  <p className="mt-3 text-slate-300 leading-relaxed">
                    {proj.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {proj.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex gap-4">
                    {proj.link && (
                      <a
                        href={proj.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-slate-400 hover:text-emerald-400 transition"
                      >
                        Source Code
                      </a>
                    )}
                    {proj.demoLink && (
                      <a
                        href={proj.demoLink}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-slate-400 hover:text-emerald-400 transition"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SKILLS */}
          <section id="skills">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-violet-400 text-transparent bg-clip-text mb-10">
              Skills
            </h3>

            <div className="space-y-8">
              {skills.map((category, i) => (
                <div key={i}>
                  <h4 className="font-semibold text-slate-200">
                    {category.category}
                  </h4>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {category.items.map((skill, idx) => (
                      <span
                        key={idx}
                        className="rounded-md bg-slate-800 px-3 py-1.5 text-sm text-slate-300 hover:bg-slate-700 transition"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* EDUCATION */}
          <section id="education">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-violet-400 text-transparent bg-clip-text mb-8">
              Education
            </h3>

            <div className="rounded-xl bg-slate-900/50 p-6">
              <p className="text-lg font-semibold text-emerald-400">
                {education.degree}
              </p>
              <p className="mt-1 text-slate-300">{education.university}</p>
              <p className="mt-1 text-sm text-slate-400">
                {education.period} · {education.location}
              </p>
            </div>
          </section>

          {/* ACHIEVEMENTS */}
          <section id="achievements">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-violet-400 text-transparent bg-clip-text mb-8">
              Achievements
            </h3>

            <ul className="list-disc list-inside space-y-3 text-slate-300">
              {achievements.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          {/* CODING PROFILES */}
          <section id="coding-profiles">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-violet-400 text-transparent bg-clip-text mb-8">
              Coding Profiles
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {codingProfiles.map((profile, i) => (
                <a
                  key={i}
                  href={profile.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 rounded-xl bg-slate-900/50 p-4 hover:bg-slate-900/70 transition"
                >
                  {profile.name === "LeetCode" ? (
                    <LeetcodeIcon />
                  ) : (
                    <CodeIcon />
                  )}
                  <div>
                    <p className="font-semibold text-slate-200">
                      {profile.name}
                    </p>
                    <p className="text-sm text-emerald-400">{profile.handle}</p>
                  </div>
                </a>
              ))}
            </div>
          </section>
        </main>
        <VisitorCounter />
      </div>
    </div>
  );
};

export default App;
