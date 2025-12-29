// Main landing page component with multiple sections
import { useMemo, useState } from "react";

// Image imports (replace with actual assets)
import blogImg1 from "../assets/images/blogs/blog-1.svg";
import blogImg2 from "../assets/images/blogs/blog-2.svg";
import {
  default as blogImg3,
  default as heroImg,
} from "../assets/images/blogs/blog-3.svg";

import { FiArrowRight, FiCheckCircle, FiHelpCircle } from "react-icons/fi";
import {
  HiOutlineAcademicCap,
  HiOutlineCheckBadge,
  HiOutlineCodeBracket,
  HiOutlineSparkles,
} from "react-icons/hi2";

export default function LandingMain() {
  // State to manage which FAQ item is open
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  // Features section data
  const features = useMemo(
    () => [
      {
        icon: <HiOutlineCodeBracket className="text-2xl" />,
        title: "Project-based learning",
        desc: "Build real UI components and apps—focused, practical, and modern.",
      },
      {
        icon: <HiOutlineAcademicCap className="text-2xl" />,
        title: "Structured roadmap",
        desc: "A clear path from fundamentals to job-ready skills.",
      },
      {
        icon: <HiOutlineCheckBadge className="text-2xl" />,
        title: "Code reviews & mentoring",
        desc: "Get actionable feedback and unblock quickly with guidance.",
      },
      {
        icon: <HiOutlineSparkles className="text-2xl" />,
        title: "Career-ready output",
        desc: "Portfolio projects, GitHub structure, and interview preparation.",
      },
    ],
    []
  );

  // Learning roadmap section data
  const roadmap = useMemo(
    () => [
      {
        step: "01",
        title: "HTML & CSS",
        desc: "Layout, responsive design, and accessibility basics.",
      },
      {
        step: "02",
        title: "JavaScript",
        desc: "DOM, async, APIs, and clean code fundamentals.",
      },
      {
        step: "03",
        title: "React",
        desc: "Components, state, routing, patterns, and performance.",
      },
      {
        step: "04",
        title: "Real Projects",
        desc: "Landing pages, dashboards, and UI systems.",
      },
      {
        step: "05",
        title: "Deploy & Portfolio",
        desc: "Ship your work, document it, and present it.",
      },
    ],
    []
  );
  // Program offerings (Courses, Bootcamp, Mentoring) data

  const programs = useMemo(
    () => [
      {
        badge: "Best for beginners",
        title: "Courses",
        desc: "Self-paced lessons with exercises and guided projects.",
        bullets: ["Clear modules", "Hands-on tasks", "Downloadable resources"],
        cta: "Explore courses",
      },
      {
        badge: "Fast-track",
        title: "Bootcamp",
        desc: "An intensive plan with milestones, reviews, and real output.",
        bullets: [
          "Weekly milestones",
          "Modern workflow habits",
          "Portfolio-grade results",
        ],
        cta: "View bootcamp",
        featured: true,
      },
      {
        badge: "1:1 support",
        title: "Mentoring",
        desc: "Personal roadmap, code reviews, and weekly guidance sessions.",
        bullets: [
          "Weekly sessions",
          "Code review notes",
          "Interview preparation",
        ],
        cta: "Book a call",
      },
    ],
    []
    // Portfolio projects examples data
  );

  const projects = useMemo(
    () => [
      {
        title: "Course Marketplace UI",
        tag: "React • Tailwind",
        desc: "Cards, filtering, responsive layouts, and reusable UI sections.",
      },
      {
        title: "Mentoring Dashboard",
        tag: "UI Patterns",
        desc: "Progress tracking, task flows, and clean component composition.",
      },
      {
        title: "Landing System",
        tag: "Design System",
        desc: "Reusable sections, BEM structure, and consistent styling patterns.",
      },
    ],
    []
    // Blog posts preview data
  );

  const blogPosts = useMemo(
    () => [
      {
        title: "How to Build a Clean Landing Page in React",
        date: "Dec 2025",
        tag: "React",
        img: blogImg1,
        excerpt:
          "A practical structure for sections, reusable components, and responsive layout decisions.",
      },
      {
        title: "Tailwind Patterns for Scalable UI",
        date: "Dec 2025",
        tag: "Tailwind",
        img: blogImg2,
        excerpt:
          "Utilities are fast—but patterns make them maintainable. Here’s an approach that scales.",
      },
      {
        title: "Roadmap: From CSS to Job-ready React",
        date: "Dec 2025",
        tag: "Roadmap",
        img: blogImg3,
        excerpt:
          "A clear learning sequence that reduces confusion and helps you build portfolio output.",
      },
    ],
    // User testimonials/reviews data
    []
  );

  const reviews = useMemo(
    () => [
      {
        name: "Sara K.",
        role: "Career switcher",
        quote:
          "The roadmap made everything click. I shipped two projects and finally understood clean components.",
      },
      {
        name: "Amir M.",
        role: "Junior developer",
        quote:
          "Code reviews were the game changer. I stopped guessing and started writing code with intent.",
      },
      {
        name: "Nina L.",
        role: "Student",
        quote:
          "Bootcamp pacing was perfect. Every week I delivered something real and got feedback fast.",
      },
      // Pricing plans data
    ],
    []
  );

  const plans = useMemo(
    () => [
      {
        title: "Starter",
        price: "€19",
        period: "/mo",
        desc: "Learn at your pace with structured content.",
        items: ["Core lessons", "Exercises", "Resource library"],
        cta: "Start Starter",
      },
      {
        title: "Pro",
        price: "€49",
        period: "/mo",
        desc: "Projects + guidance to build stronger output.",
        items: [
          "Everything in Starter",
          "Project templates",
          "Monthly feedback",
        ],
        cta: "Choose Pro",
        featured: true,
      },
      {
        title: "Mentored",
        price: "€149",
        period: "/mo",
        desc: "Hands-on mentoring and weekly check-ins.",
        items: ["Everything in Pro", "Weekly 1:1 call", "Code reviews & prep"],
        cta: "Go Mentored",
        // Frequently asked questions data
      },
    ],
    []
  );

  const faqs = useMemo(
    () => [
      {
        q: "Do I need prior experience?",
        a: "No. If you can commit consistent time, you’ll get a step-by-step path from basics to real projects.",
      },
      {
        q: "How much time should I study per week?",
        a: "A good baseline is 6–10 hours/week. Bootcamp learners often do 10–15 hours/week for faster results.",
      },
      {
        q: "Is this focused on real-world skills?",
        a: "Yes. It’s project-driven with code reviews, Git workflow habits, and deployment practices.",
      },
      {
        q: "Do you help with portfolio and interviews?",
        a: "Yes. You’ll build portfolio-grade projects and get guidance on GitHub presentation and interview prep.",
      },
      {
        q: "How does mentoring work?",
        a: "You get a tailored plan, weekly sessions, and actionable code review feedback based on your goals.",
      },
    ],
    []
  );

  return (
    <main id="home" className="landing landing--main bg-white text-slate-900">
      {/* HERO */}
      <section className="landing__hero">
        <div className="landing__container max-w-7xl mx-auto px-4 py-12 md:py-16">
          <div className="landing__hero-grid grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Copy */}
            <div className="landing__hero-content lg:col-span-7">
              <p className="landing__eyebrow inline-flex items-center gap-2 text-sm font-medium text-cyan-800 bg-cyan-50 px-3 py-1 rounded-full">
                <HiOutlineSparkles className="text-base" />
                Front-end learning that turns into shipped work
              </p>

              <h1 className="landing__title mt-4 text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
                Build job-ready front-end skills with{" "}
                <span className="text-cyan-800">projects</span>, mentoring, and
                a clear roadmap.
              </h1>

              <p className="landing__subtitle mt-4 text-base md:text-lg text-slate-600 leading-relaxed">
                Fronto helps you learn HTML, CSS, JavaScript, and React through
                a structured system: hands-on projects, feedback loops, and
                modern workflow habits.
              </p>

              <div className="landing__cta mt-7 flex flex-col sm:flex-row gap-3">
                <a
                  href="#programs"
                  className="landing__cta-primary inline-flex items-center justify-center rounded-md bg-cyan-700 px-5 py-3 text-white font-medium hover:bg-cyan-600 transition"
                >
                  Explore programs <FiArrowRight className="ml-2" />
                </a>
                <a
                  href="#pricing"
                  className="landing__cta-secondary inline-flex items-center justify-center rounded-md border border-cyan-700 px-5 py-3 text-cyan-800 font-medium hover:bg-cyan-50 transition"
                >
                  View pricing
                </a>
              </div>

              <div className="landing__proof mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { k: "Weekly", v: "Milestones" },
                  { k: "Real", v: "Projects" },
                  { k: "Fast", v: "Feedback" },
                  { k: "Clean", v: "Code" },
                ].map((x) => (
                  <div
                    key={x.v}
                    className="landing__proof-card rounded-md border border-slate-200 p-3"
                  >
                    <p className="text-sm font-semibold text-slate-900">
                      {x.k}
                    </p>
                    <p className="text-xs text-slate-500">{x.v}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual */}
            <div className="landing__hero-visual lg:col-span-5">
              <div className="landing__hero-media rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                <img
                  src={heroImg}
                  alt="Fronto hero preview"
                  className="w-full h-60 sm:h-75 lg:h-90 object-cover object-center"
                />
                <div className="p-5">
                  <p className="text-sm font-semibold text-slate-900">
                    This week’s focus
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Responsive layout, clean components, and deployment-ready
                    structure.
                  </p>

                  <div className="mt-4 space-y-2">
                    {[
                      "Build sections",
                      "Reuse components",
                      "Ship a polished landing",
                    ].map((t) => (
                      <div key={t} className="flex items-start gap-2">
                        <FiCheckCircle className="mt-0.5 text-cyan-800" />
                        <p className="text-sm text-slate-700">{t}</p>
                      </div>
                    ))}
                  </div>

                  <a
                    href="#projects"
                    className="mt-5 inline-flex items-center text-sm font-medium text-cyan-800 hover:text-cyan-700 transition"
                  >
                    See example projects <FiArrowRight className="ml-1" />
                  </a>
                </div>
              </div>

              <p className="mt-3 text-xs text-slate-500">
                Replace images with your real assets when ready.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="landing__features" aria-label="Why Fronto">
        <div className="landing__container max-w-7xl mx-auto px-4 py-12 md:py-14">
          <div className="landing__section-head flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Why Fronto</h2>
              <p className="mt-2 text-slate-600">
                A practical system that turns learning into shipped work.
              </p>
            </div>
            <a
              href="#roadmap"
              className="inline-flex items-center text-sm font-medium text-cyan-800 hover:text-cyan-700 transition"
            >
              View roadmap <FiArrowRight className="ml-1" />
            </a>
          </div>

          <div className="landing__feature-grid mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="landing__feature-card rounded-2xl border border-slate-200 p-5 hover:shadow-sm transition"
              >
                <div className="h-11 w-11 rounded-xl bg-cyan-50 text-cyan-800 flex items-center justify-center">
                  {f.icon}
                </div>
                <h3 className="mt-4 font-semibold text-slate-900">{f.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section id="roadmap" className="landing__roadmap bg-cyan-50">
        <div className="landing__container max-w-7xl mx-auto px-4 py-12 md:py-14">
          <h2 className="text-3xl font-bold text-slate-900">Roadmap</h2>
          <p className="mt-2 text-slate-600">
            A clear path that keeps you focused and moving forward.
          </p>

          <div className="landing__timeline mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {roadmap.map((r) => (
              <div
                key={r.step}
                className="landing__timeline-card rounded-2xl bg-white border border-slate-200 p-5"
              >
                <p className="text-sm font-semibold text-cyan-800">{r.step}</p>
                <h3 className="mt-2 font-semibold text-slate-900">{r.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {r.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="programs" className="landing__programs">
        <div className="landing__container max-w-7xl mx-auto px-4 py-12 md:py-14">
          <h2 className="text-3xl font-bold text-slate-900">Programs</h2>
          <p className="mt-2 text-slate-600">
            Choose a format that matches your pace and goals.
          </p>

          <div className="landing__program-grid mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {programs.map((p) => (
              <div
                key={p.title}
                className={[
                  "landing__program-card rounded-2xl border p-6 flex flex-col",
                  p.featured
                    ? "border-cyan-700 shadow-sm"
                    : "border-slate-200 hover:shadow-sm transition",
                ].join(" ")}
              >
                <div className="flex items-center justify-between gap-3">
                  <span
                    className={[
                      "text-xs font-semibold px-3 py-1 rounded-full",
                      p.featured
                        ? "bg-cyan-700 text-white"
                        : "bg-cyan-50 text-cyan-800",
                    ].join(" ")}
                  >
                    {p.badge}
                  </span>
                  {p.featured && (
                    <span className="text-xs font-semibold text-cyan-800">
                      Most popular
                    </span>
                  )}
                </div>

                <h3 className="mt-4 text-xl font-bold text-slate-900">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {p.desc}
                </p>

                <ul className="landing__program-list mt-5 space-y-2">
                  {p.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 text-sm text-slate-700"
                    >
                      <FiCheckCircle className="mt-0.5 text-cyan-800" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#pricing"
                  className={[
                    "mt-6 inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition",
                    p.featured
                      ? "bg-cyan-700 text-white hover:bg-cyan-600"
                      : "border border-cyan-700 text-cyan-800 hover:bg-cyan-50",
                  ].join(" ")}
                >
                  {p.cta} <FiArrowRight className="ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="landing__projects bg-cyan-50">
        <div className="landing__container max-w-7xl mx-auto px-4 py-12 md:py-14">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">
                Projects you will build
              </h2>
              <p className="mt-2 text-slate-600">
                Portfolio-grade UI that demonstrates real skills.
              </p>
            </div>
            <a
              href="#blog"
              className="inline-flex items-center text-sm font-medium text-cyan-800 hover:text-cyan-700 transition"
            >
              Learn the patterns <FiArrowRight className="ml-1" />
            </a>
          </div>

          <div className="landing__project-grid mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((p) => (
              <div
                key={p.title}
                className="landing__project-card rounded-2xl bg-white border border-slate-200 p-6"
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-semibold text-slate-900">{p.title}</h3>
                  <span className="text-xs font-semibold text-cyan-800 bg-cyan-50 px-2 py-1 rounded-full">
                    {p.tag}
                  </span>
                </div>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {p.desc}
                </p>
                <div className="mt-5 flex items-center gap-2 text-sm text-slate-700">
                  <FiCheckCircle className="text-cyan-800" />
                  <span>Responsive, clean structure, and deploy-ready.</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG PREVIEWS */}
      <section id="blog" className="landing__blog">
        <div className="landing__container max-w-7xl mx-auto px-4 py-12 md:py-14">
          <div className="landing__section-head flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">
                Blog previews
              </h2>
              <p className="mt-2 text-slate-600">
                Short reads that teach patterns you’ll use in projects.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center text-sm font-medium text-cyan-800 hover:text-cyan-700 transition"
            >
              Request topics <FiArrowRight className="ml-1" />
            </a>
          </div>

          <div className="landing__blog-grid mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {blogPosts.map((post) => (
              <article
                key={post.title}
                className="landing__blog-card rounded-2xl border border-slate-200 overflow-hidden hover:shadow-sm transition bg-white"
              >
                <div className="landing__blog-media">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-48 object-cover object-center"
                    loading="lazy"
                  />
                </div>

                <div className="landing__blog-body p-5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-semibold text-cyan-800 bg-cyan-50 px-2 py-1 rounded-full">
                      {post.tag}
                    </span>
                    <span className="text-xs text-slate-500">{post.date}</span>
                  </div>

                  <h3 className="mt-3 font-semibold text-slate-900">
                    {post.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <a
                    href="#"
                    className="mt-4 inline-flex items-center text-sm font-medium text-cyan-800 hover:text-cyan-700 transition"
                    aria-label={`Read more: ${post.title}`}
                  >
                    Read more <FiArrowRight className="ml-1" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="landing__reviews bg-cyan-50">
        <div className="landing__container max-w-7xl mx-auto px-4 py-12 md:py-14">
          <h2 className="text-3xl font-bold text-slate-900">
            What learners say
          </h2>
          <p className="mt-2 text-slate-600">
            Feedback that reflects progress and clarity.
          </p>

          <div className="landing__review-grid mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {reviews.map((r) => (
              <div
                key={r.name}
                className="landing__review-card rounded-2xl border border-slate-200 bg-white p-6"
              >
                <p className="text-sm text-slate-700 leading-relaxed">
                  “{r.quote}”
                </p>
                <div className="mt-5 flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-slate-900">{r.name}</p>
                    <p className="text-xs text-slate-500">{r.role}</p>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-cyan-50 text-cyan-800 flex items-center justify-center font-bold">
                    {r.name.charAt(0)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="landing__pricing">
        <div className="landing__container max-w-7xl mx-auto px-4 py-12 md:py-14">
          <h2 className="text-3xl font-bold text-slate-900">Pricing</h2>
          <p className="mt-2 text-slate-600">
            Pick a plan you can stick to. Upgrade anytime.
          </p>

          <div className="landing__pricing-grid mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {plans.map((pl) => (
              <div
                key={pl.title}
                className={[
                  "landing__plan-card rounded-2xl border p-6 flex flex-col bg-white",
                  pl.featured
                    ? "border-cyan-700 shadow-sm"
                    : "border-slate-200",
                ].join(" ")}
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-bold text-slate-900">
                    {pl.title}
                  </h3>
                  {pl.featured && (
                    <span className="text-xs font-semibold bg-cyan-700 text-white px-3 py-1 rounded-full">
                      Recommended
                    </span>
                  )}
                </div>

                <div className="mt-4 flex items-end gap-1">
                  <span className="text-4xl font-bold text-slate-900">
                    {pl.price}
                  </span>
                  <span className="text-sm text-slate-500">{pl.period}</span>
                </div>

                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {pl.desc}
                </p>

                <ul className="landing__plan-list mt-5 space-y-2">
                  {pl.items.map((it) => (
                    <li
                      key={it}
                      className="flex items-start gap-2 text-sm text-slate-700"
                    >
                      <FiCheckCircle className="mt-0.5 text-cyan-800" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={[
                    "mt-6 inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition",
                    pl.featured
                      ? "bg-cyan-700 text-white hover:bg-cyan-600"
                      : "border border-cyan-700 text-cyan-800 hover:bg-cyan-50",
                  ].join(" ")}
                >
                  {pl.cta} <FiArrowRight className="ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="landing__faq bg-cyan-50">
        <div className="landing__container max-w-7xl mx-auto px-4 py-12 md:py-14">
          <div className="flex items-start gap-3">
            <div className="h-11 w-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-cyan-800">
              <FiHelpCircle className="text-2xl" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900">FAQ</h2>
              <p className="mt-2 text-slate-600">
                Quick answers to common questions.
              </p>
            </div>
          </div>

          <div className="landing__faq-list mt-8 space-y-3">
            {faqs.map((f, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={f.q}
                  className="landing__faq-item rounded-2xl bg-white border border-slate-200 overflow-hidden"
                >
                  <button
                    className="landing__faq-btn w-full text-left px-5 py-4 flex items-center justify-between gap-4"
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold text-slate-900">{f.q}</span>
                    <span className="text-cyan-800 font-bold select-none">
                      {isOpen ? "–" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="landing__faq-panel px-5 pb-5 text-sm text-slate-600 leading-relaxed">
                      {f.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
