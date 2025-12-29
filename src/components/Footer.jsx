import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTelegramPlane,
} from "react-icons/fa";
import {
  IoCallOutline,
  IoLocationOutline,
  IoMailOutline,
} from "react-icons/io5";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer bg-cyan-800 text-white mt-10">
      {/* Top */}
      <div className="site-footer__container max-w-7xl mx-auto px-4 py-10">
        <div className="site-footer__top grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand / About */}
          <div className="site-footer__brand">
            <h2 className="site-footer__title text-2xl font-bold">Fronto</h2>
            <p className="site-footer__desc mt-3 text-sm leading-relaxed text-cyan-100/90">
             Fronto is your go-to platform for mastering front-end development. We
             offer comprehensive courses, hands-on projects, and expert mentoring to
             help you build a successful career in web development.
            </p>

            <div className="site-footer__social mt-5 flex items-center gap-3">
              <a
                href="#"
                className="site-footer__social-link inline-flex h-10 w-10 items-center justify-center rounded-md bg-cyan-700 hover:bg-cyan-600 transition"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="site-footer__social-link inline-flex h-10 w-10 items-center justify-center rounded-md bg-cyan-700 hover:bg-cyan-600 transition"
                aria-label="Telegram"
              >
                <FaTelegramPlane />
              </a>
              <a
                href="#"
                className="site-footer__social-link inline-flex h-10 w-10 items-center justify-center rounded-md bg-cyan-700 hover:bg-cyan-600 transition"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="site-footer__social-link inline-flex h-10 w-10 items-center justify-center rounded-md bg-cyan-700 hover:bg-cyan-600 transition"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="site-footer__links">
            <h3 className="site-footer__heading text-lg font-semibold">
              Quick Links
            </h3>
            <ul className="site-footer__list mt-4 space-y-2 text-sm">
              <li className="site-footer__item">
                <a
                  className="site-footer__link text-cyan-100/90 hover:text-white transition"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="site-footer__item">
                <a
                  className="site-footer__link text-cyan-100/90 hover:text-white transition"
                  href="#"
                >
                  Courses
                </a>
              </li>
              <li className="site-footer__item">
                <a
                  className="site-footer__link text-cyan-100/90 hover:text-white transition"
                  href="#"
                >
                  Bootcamp
                </a>
              </li>
              <li className="site-footer__item">
                <a
                  className="site-footer__link text-cyan-100/90 hover:text-white transition"
                  href="#"
                >
                  Mentoring
                </a>
              </li>
              <li className="site-footer__item">
                <a
                  className="site-footer__link text-cyan-100/90 hover:text-white transition"
                  href="#"
                >
                  Blogs
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="site-footer__resources">
            <h3 className="site-footer__heading text-lg font-semibold">
              Resources
            </h3>
            <ul className="site-footer__list mt-4 space-y-2 text-sm">
              <li className="site-footer__item">
                <a
                  className="site-footer__link text-cyan-100/90 hover:text-white transition"
                  href="#"
                >
                  Roadmap Front-End
                </a>
              </li>
              <li className="site-footer__item">
                <a
                  className="site-footer__link text-cyan-100/90 hover:text-white transition"
                  href="#"
                >
                  Practice Projects
                </a>
              </li>
              <li className="site-footer__item">
                <a
                  className="site-footer__link text-cyan-100/90 hover:text-white transition"
                  href="#"
                >
                  Interview Questions
                </a>
              </li>
              <li className="site-footer__item">
                <a
                  className="site-footer__link text-cyan-100/90 hover:text-white transition"
                  href="#"
                >
                  Terms and Conditions
                </a>
              </li>
              <li className="site-footer__item">
                <a
                  className="site-footer__link text-cyan-100/90 hover:text-white transition"
                  href="#"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div className="site-footer__contact">
            <h3 className="site-footer__heading text-lg font-semibold">
              Contact
            </h3>

            <ul className="site-footer__contact-list mt-4 space-y-3 text-sm text-cyan-100/90">
              <li className="site-footer__contact-item flex items-center gap-2">
                <IoMailOutline className="text-lg" />
                <span>support@fronto.dev</span>
              </li>
              <li className="site-footer__contact-item flex items-center gap-2">
                <IoCallOutline className="text-lg" />
                <span>+49 000 000 000</span>
              </li>
              <li className="site-footer__contact-item flex items-center gap-2">
                <IoLocationOutline className="text-lg" />
                <span>Online — Germany</span>
              </li>
            </ul>

            <div className="site-footer__newsletter mt-6">
              <p className="text-sm text-cyan-100/90">
                Subscribe to our newsletter for the latest updates and offers.
              </p>

              <form
                className="site-footer__form mt-3 flex flex-col sm:flex-row gap-3"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="site-footer__input w-full rounded-md px-3 py-2 text-sm text-black outline-none border border-transparent focus:border-cyan-300"
                />
                <button
                  type="submit"
                  className="site-footer__btn rounded-md bg-cyan-700 px-4 py-2 text-sm font-medium hover:bg-cyan-600 transition"
                >
                  Subscribe
                </button>
              </form>

              <p className="mt-2 text-xs text-cyan-100/70">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="site-footer__bottom border-t border-white/15">
        <div className="site-footer__bottom-inner max-w-7xl mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="site-footer__copy text-sm text-cyan-100/90">
            © {year} Fronto. All rights reserved.
          </p>

          <div className="site-footer__bottom-links flex items-center gap-4 text-sm">
            <a
              className="text-cyan-100/90 hover:text-white transition"
              href="#"
            >
              Terms
            </a>
            <a
              className="text-cyan-100/90 hover:text-white transition"
              href="#"
            >
              Privacy
            </a>
            <a
              className="text-cyan-100/90 hover:text-white transition"
              href="#"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
