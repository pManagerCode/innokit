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
const testimonials = [
  [
    "Kirk",
    "Builder",
    "Innokit can handle volume, that’s why I use them. Their quality, price, speed of delivery and service are standout qualities to me.",
  ],
  [
    "Kevin",
    "Builder",
    "No matter how big or small the project, Innokit always come through. Their quality of work is always excellent.",
  ],
  [
    "Steve",
    "Builder",
    "Working with Innokit is a very positive experience. The commitment to deliver and efficiency is always there.",
  ],
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <nav className="nav shell">
          <a className="header-logo" href="#top" aria-label="Innokit home">
            <Image
              src="/innokit-header-logo.svg"
              alt="Innokit"
              width={200}
              height={50}
              priority
            />
          </a>
          <div className="nav-links">
            <a href="#what-we-do">What we do</a>
            <a href="#about">About us</a>
            <a href="#contact" className="nav-contact">
              Contact <span aria-hidden="true">↗</span>
            </a>
          </div>
          <a
            href="#contact"
            className="menu-button"
            aria-label="Open contact menu"
          >
            Menu <span aria-hidden="true">+</span>
          </a>
        </nav>
        <div className="hero-content shell">
          <p className="eyebrow">Custom kitchens & joinery</p>
          <h1>
            Connecting
            <br />
            <em>people</em> and places.
          </h1>
          <div className="hero-bottom">
            <p>
              High-quality, tailored joinery that turns the spaces you live and
              work in into something distinctly yours.
            </p>
            <a
              className="circle-link"
              href="#what-we-do"
              aria-label="Explore what we do"
            >
              ↓
            </a>
          </div>
        </div>
      </section>
      <section className="intro section shell" id="what-we-do">
        <div className="section-label">
          <span>01</span>
          <span>What we do</span>
        </div>
        <div className="intro-grid">
          <h2>
            Made to fit
            <br />
            <em>your life.</em>
          </h2>
          <div>
            <p className="lead">
              We specialise in custom joinery solutions, offering high-quality,
              tailored designs for kitchens and interiors. Our work blends
              innovation, precision, and craftsmanship to create functional,
              beautiful spaces.
            </p>
            <a className="text-link" href="#contact">
              Learn more <span>↗</span>
            </a>
          </div>
        </div>
      </section>
      <section className="service-band">
        <div className="shell service-grid">
          {services.map((service, index) => (
            <div className="service" key={service}>
              <span>0{index + 1}</span>
              <strong>{service}</strong>
              <span>↗</span>
            </div>
          ))}
        </div>
      </section>
      <section className="standards section shell">
        <div className="section-label">
          <span>02</span>
          <span>The Innokit standard</span>
        </div>
        <div className="standards-grid">
          <div className="standard">
            <span>01</span>
            <h3>We always deliver.</h3>
            <p>On-time and on-budget.</p>
          </div>
          <div className="standard">
            <span>02</span>
            <h3>We care about our work.</h3>
            <p>As much as you do.</p>
          </div>
          <div className="standard">
            <span>03</span>
            <h3>We pride ourselves on quality.</h3>
            <p>Only as good as our last job.</p>
          </div>
          <div className="standard">
            <span>04</span>
            <h3>We communicate.</h3>
            <p>Throughout every stage.</p>
          </div>
        </div>
      </section>
      <section className="audience section shell">
        <div className="section-label">
          <span>03</span>
          <span>Who we work with</span>
        </div>
        <div className="audience-list">
          <span>Home Owners</span>
          <span>Interior Designers</span>
          <span>Builders</span>
        </div>
      </section>
      <section className="about section" id="about">
        <div className="shell about-grid">
          <div>
            <div className="section-label light">
              <span>04</span>
              <span>About us</span>
            </div>
            <h2>
              Precision with
              <br />
              <em>purpose.</em>
            </h2>
          </div>
          <div className="about-copy">
            <p className="lead">
              Founded with a passion for precision and innovation, we provide
              high-end joinery services across the Greater Sydney region. We’re
              committed to delivering unique, custom designs that transform
              spaces, driven by advanced technology and expert craftsmanship.
            </p>
            <a className="text-link light-link" href="#contact">
              View more <span>↗</span>
            </a>
          </div>
        </div>
      </section>
      <section className="voices section shell">
        <div className="section-label">
          <span>05</span>
          <span>What others say about us</span>
        </div>
        <div className="quotes">
          {testimonials.map(([name, role, quote]) => (
            <blockquote key={name}>
              <span className="quote-mark">“</span>
              <p>{quote}</p>
              <footer>
                — {name}, {role}
              </footer>
            </blockquote>
          ))}
        </div>
      </section>
      <section className="contact section" id="contact">
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
              vision to life.
            </p>
            <a className="button" href="mailto:info@innokit.com.au">
              Contact us <span>↗</span>
            </a>
          </div>
        </div>
      </section>
      <footer className="footer shell">
        <a className="footer-logo" href="#top" aria-label="Innokit home">
          <Image
            src="/innokit-header-logo.svg"
            alt="Innokit"
            width={200}
            height={50}
            priority
          />
        </a>
        <div>
          <p>0424 023 832 (NSW) &nbsp; / &nbsp; 0420 345 766 (QLD)</p>
          <a href="mailto:info@innokit.com.au">info@innokit.com.au</a>
        </div>
        <div>
          <p>2025 © Innokit. All rights reserved.</p>
          <p>ABN: 74 632 072 247</p>
        </div>
      </footer>
    </main>
  );
}
