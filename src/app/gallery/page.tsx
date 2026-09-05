import Link from "next/link";
import Image from "next/image";

const galleryImages = Array.from({ length: 12 }, (_, index) => {
  const number = String(index + 1).padStart(3, "0");
  return `https://innokit.com.au/wp-content/uploads/2024/12/${number}.jpg`;
});

export default function Gallery() {
  return (
    <main className="gallery-page">
      <section className="gallery-heading">
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
        <div className="shell">
          <p className="eyebrow dark-eyebrow">Selected projects</p>
          <h1>
            Gallery
            <br />
            <em>of work.</em>
          </h1>
        </div>
      </section>
      <section
        className="gallery-grid shell"
        aria-label="Innokit project gallery"
      >
        {galleryImages.map((image, index) => (
          <a
            className={`gallery-image gallery-image-${index + 1}`}
            href={image}
            target="_blank"
            rel="noreferrer"
            key={image}
          >
            <img
              src={image}
              alt={`Innokit joinery project ${index + 1}`}
              loading={index < 3 ? "eager" : "lazy"}
            />
          </a>
        ))}
      </section>
      <section className="contact section">
        <div className="shell contact-grid">
          <div>
            <div className="section-label light">
              <span>01</span>
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
