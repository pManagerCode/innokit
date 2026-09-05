import Link from "next/link";
import Image from "next/image";

const values = [
  [
    "01",
    "Delivering",
    "We know how important it is to everyone involved that we do exactly what we said we would, every single time.",
  ],
  [
    "02",
    "Care",
    "The key ingredient of our service: care for our work, for our clients, and for each other.",
  ],
  [
    "03",
    "Quality",
    "We are only as good as our last job, and so we aim to make that last job exceptional.",
  ],
  [
    "04",
    "Communication",
    "Taking responsibility for ensuring everyone we deal with knows when, where and what exactly we are going to do.",
  ],
];

export default function AboutUs() {
  return (
    <main className="about-page">
      <section className="about-hero">
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
        <div className="shell about-hero-copy">
          <p className="eyebrow">About us</p>
          <h1>
            We are
            <br />
            <em>Innokit.</em>
          </h1>
          <p className="hero-note">
            Creating kitchens and joinery that connect people and places.
          </p>
        </div>
      </section>

      <section className="story section shell">
        <div className="section-label">
          <span>01</span>
          <span>Our story</span>
        </div>
        <div className="story-grid">
          <h2>
            Built on
            <br />
            <em>good work.</em>
          </h2>
          <div className="story-copy">
            <p className="lead">
              Our story began with humble roots, as we embarked on an immigrant
              journey to build a new life in Australia. What started as a
              small-scale joinery operation soon transformed into a trusted name
              in the joinery industry.
            </p>
            <p>
              Over the years, we’ve grown thanks to a commitment to quality,
              customer satisfaction, and innovation. By embracing advanced
              automation and continually investing in technology, we’ve
              developed a unique edge in providing premium, custom joinery
              solutions.
            </p>
            <p>
              Today, we combine our rich heritage with a forward-thinking
              mindset, ensuring that each project delivers functional elegance,
              tailored precisely to our customers’ needs. Our journey is far
              from over: our vision is to continue evolving and competing on a
              global scale while maintaining our roots.
            </p>
          </div>
        </div>
      </section>

      <section className="partnerships section">
        <div className="shell">
          <div className="section-label light">
            <span>02</span>
            <span>Innokit represents and includes</span>
          </div>
          <div className="partnership-grid">
            <article>
              <p className="card-index">01 / Partnership</p>
              <h2>
                Baineng
                <br />
                <em>Stainless.</em>
              </h2>
              <p>
                Innokit are the only approved provider of Baineng across Sydney,
                Brisbane and the Gold Coast.
              </p>
              <p>
                Baineng kitchen cabinets are made of 304 food grade stainless
                steel: waterproof, termite-proof, durable, and easy to install.
              </p>
              <a
                className="text-link light-link"
                href="https://innokit.com.au/premium-stainless-steel-joinery/"
              >
                Premium stainless steel joinery <span>↗</span>
              </a>
            </article>
            <article>
              <p className="card-index">02 / Showroom</p>
              <h2>
                Kembla
                <br />
                <em>Kitchens.</em>
              </h2>
              <p>
                Innokit incorporates Kembla Kitchens, our second showroom in
                Port Kembla. With over 20 years of exposure and heritage, this
                established business gives Innokit a trusted frontage in the
                Wollongong and South Coast area.
              </p>
              <p>
                Visit us for tangible inspiration or to ask questions as you
                embark on your next kitchen renovation or larger joinery
                project.
              </p>
              <a
                className="text-link light-link"
                href="https://www.kemblakitchens.com.au/"
              >
                More on Kembla Kitchens <span>↗</span>
              </a>
            </article>
          </div>
        </div>
      </section>

      <section className="values section shell">
        <div className="section-label">
          <span>03</span>
          <span>What we value</span>
        </div>
        <div className="values-grid">
          {values.map(([number, title, copy]) => (
            <article className="value" key={title}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="team section">
        <div className="shell team-grid">
          <div>
            <div className="section-label light">
              <span>04</span>
              <span>Join the team</span>
            </div>
            <h2>
              Bring your
              <br />
              <em>craft.</em>
            </h2>
          </div>
          <div className="team-copy">
            <p className="lead">
              Our team is passionate, skilled, and dedicated to delivering
              exceptional joinery solutions. We foster a collaborative and
              innovative culture.
            </p>
            <p>
              Interested in joining us? Check out our current opportunities and
              be part of our journey.
            </p>
            <a
              className="button"
              href="mailto:info@innokit.com.au?subject=Position%20enquiry"
            >
              Email us for position enquiries <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="showroom section shell" id="showroom">
        <div className="section-label">
          <span>05</span>
          <span>Visit our showroom</span>
        </div>
        <div className="showroom-grid">
          <div>
            <p className="eyebrow dark-eyebrow">Smithfield</p>
            <h2>
              Innokit
              <br />
              <em>Showroom.</em>
            </h2>
          </div>
          <div className="showroom-copy">
            <p className="lead">95 Market St, Smithfield NSW 2164</p>
            <a
              className="button dark-button"
              href="https://calendly.com/innokit-smithfield/30min?text_color=000000&primary_color=9da382"
            >
              Book an appointment <span>↗</span>
            </a>
            <p>
              For Baineng showroom bookings, email{" "}
              <a className="underlined" href="mailto:info@baineng.com.au">
                info@baineng.com.au
              </a>
            </p>
            <p>
              For Kembla Kitchens showroom bookings email{" "}
              <a
                className="underlined"
                href="mailto:sales@kemblakitchens.com.au"
              >
                sales@kemblakitchens.com.au
              </a>
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
