import Link from "next/link";
import Image from "next/image";

const services = [
  "Kitchen",
  "Pantry",
  "Laundry",
  "Bathroom",
  "Wardrobe",
  "Storage",
  "Living",
  "Office",
  "Shop Fit-out",
  "Custom",
];

export default function WhatWeDo() {
  return (
    <main className="what-page">
      <section className="what-hero">
        <nav className="nav shell">
          <Link className="header-logo" href="/" aria-label="Innokit home">
            <Image
              src="/innokit-header-logo.svg"
              alt="Innokit"
              width={200}
              height={50}
              priority
            />
          </Link>
          <div className="nav-links">
            <a href="/what-we-do">What we do</a>
            <a href="/about-us">About us</a>
            <a href="/contact-us" className="nav-contact">
              Contact <span aria-hidden="true">↗</span>
            </a>
          </div>
          <a
            href="/contact-us"
            className="menu-button"
            aria-label="Contact Innokit"
          >
            Menu <span aria-hidden="true">+</span>
          </a>
        </nav>
        <div className="shell what-hero-copy">
          <p className="eyebrow">What we do</p>
          <h1>
            An unmatched
            <br />
            <em>end-to-end</em>
            <br />
            joinery service.
          </h1>
          <div className="hero-bottom">
            <p>
              From the first conversation to the final installation, we design,
              build and install with care.
            </p>
            <a
              className="circle-link"
              href="#purpose"
              aria-label="Explore our purpose"
            >
              ↓
            </a>
          </div>
        </div>
      </section>
      <section className="purpose section shell" id="purpose">
        <div className="section-label">
          <span>01</span>
          <span>Our purpose</span>
        </div>
        <div className="purpose-grid">
          <h2>
            Built to be
            <br />
            <em>better.</em>
          </h2>
          <div>
            <p className="lead">
              We design, build and install high quality, functional kitchens and
              joinery solutions on-time and on-budget.
            </p>
            <p>
              In an industry that is often hit and miss, we look at every
              project as an opportunity to go further to get things right.
              Across residential, commercial and design audiences, our process
              ensures a consistently high level finished result.
            </p>
            <a className="button dark-button" href="mailto:info@innokit.com.au">
              Contact us <span>↗</span>
            </a>
          </div>
        </div>
      </section>
      <section className="what-services service-band">
        <div className="shell">
          <div className="section-label light">
            <span>02</span>
            <span>Our kitchen and joinery solutions</span>
          </div>
          <div className="service-grid">
            {services.map((service, index) => (
              <div className="service" key={service}>
                <span>0{index + 1}</span>
                <strong>{service}</strong>
                <span>↗</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="care section">
        <div className="shell care-grid">
          <div>
            <div className="section-label">
              <span>03</span>
              <span>How we do it</span>
            </div>
            <h2>
              We care
              <br />
              <em>above all else.</em>
            </h2>
          </div>
          <div className="care-copy">
            <p className="lead">
              It’s the core of Innokit’s work: we care about hitting the
              deadline, achieving the best possible finish, owning and
              rectifying any mistakes, keeping to the budget, communicating well
              and finishing the job with everyone as friends.
            </p>
          </div>
        </div>
      </section>
      <section className="why section">
        <div className="shell why-grid">
          <div>
            <div className="section-label light">
              <span>04</span>
              <span>Why we do it</span>
            </div>
            <h2>
              We’re driven
              <br />
              <em>to deliver.</em>
            </h2>
          </div>
          <div className="why-copy">
            <p className="lead">
              It’s in our DNA. Simply put, we love making spaces for our clients
              that meet their unique needs and are delivered exactly how and
              when they expected.
            </p>
            <p>Our work connects people to places.</p>
          </div>
        </div>
      </section>
      <section className="process section shell">
        <div className="section-label">
          <span>05</span>
          <span>A glimpse into our process</span>
        </div>
        <div className="process-step">
          <span className="step-number">01</span>
          <div>
            <p className="eyebrow dark-eyebrow">Step one</p>
            <h2>
              Concept
              <br />
              <em>Design.</em>
            </h2>
            <p className="lead">
              Clients, architects or designers provide a design. Or we develop a
              concept design based on discussions with the client.
            </p>
          </div>
        </div>
      </section>
      <section className="contact section">
        <div className="shell contact-grid">
          <div>
            <div className="section-label light">
              <span>06</span>
              <span>Let’s have a chat</span>
            </div>
            <h2>
              Ready to elevate
              <br />
              <em>your space?</em>
            </h2>
          </div>
          <div className="contact-copy">
            <p>
              Contact us today for a consultation, or visit our showroom to
              explore our range of custom designs. We’re excited to bring your
              vision to life!
            </p>
            <a className="button" href="mailto:info@innokit.com.au">
              Contact us <span>↗</span>
            </a>
          </div>
        </div>
      </section>
      <footer className="footer shell">
        <Link className="wordmark" href="/">
          INNOKIT<span>.</span>
        </Link>
        <div>
          <p>0424 023 832 (NSW) &nbsp; / &nbsp; 0420 345 766 (QLD)</p>
          <a href="mailto:info@innokit.com.au">info@innokit.com.au</a>
        </div>
        <div>
          <p>2025 © Innokit. All rights reserved.</p>
          <p>ABN: 74 632 072 247</p>
          <p>Licence No. 352247C</p>
        </div>
      </footer>
    </main>
  );
}
