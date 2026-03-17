import { catProfile } from "./content";

function App() {
  return (
    <div className="page-shell">
      <div className="ambient ambient-left" aria-hidden="true" />
      <div className="ambient ambient-right" aria-hidden="true" />

      <main className="page">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">{catProfile.eyebrow}</p>
            <h1>{catProfile.name}</h1>
            <p className="tagline">{catProfile.tagline}</p>
            <p className="description">{catProfile.description}</p>

            <div className="hero-actions">
              <a className="primary-link" href="#personality">
                {catProfile.ctaLabel}
              </a>
              <p className="micro-note">Calm presence. Sharp instincts. Exceptional lounging.</p>
            </div>

            <div className="stats" aria-label="Cat highlights">
              {catProfile.stats.map((item) => (
                <article className="stat-card" key={item.label}>
                  <span>{item.value}</span>
                  <p>{item.label}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="hero-visual" aria-label="Portrait illustration of Miso">
            <div className="portrait-card">
              <div className="portrait-frame">
                <div className="cat-illustration">
                  <div className="cat-ear ear-left" />
                  <div className="cat-ear ear-right" />
                  <div className="cat-head">
                    <div className="cat-eye eye-left" />
                    <div className="cat-eye eye-right" />
                    <div className="cat-nose" />
                    <div className="cat-whiskers whiskers-left" />
                    <div className="cat-whiskers whiskers-right" />
                  </div>
                  <div className="cat-body" />
                </div>
              </div>
              <div className="portrait-caption">
                <p>House cat, design critic, professional keeper of quiet corners.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="personality">
          <div className="section-heading">
            <p className="section-label">Personality</p>
            <h2>A reserved little icon with excellent instincts.</h2>
          </div>

          <div className="trait-grid">
            {catProfile.traits.map((trait) => (
              <article className="trait-card" key={trait.title}>
                <h3>{trait.title}</h3>
                <p>{trait.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-accent">
          <div className="section-heading">
            <p className="section-label">Daily routine</p>
            <h2>A schedule built around warmth, observation, and impeccable timing.</h2>
          </div>

          <div className="routine-list">
            {catProfile.routineItems.map((item) => (
              <article className="routine-card" key={item.time}>
                <p className="routine-time">{item.time}</p>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <p className="section-label">Highlights</p>
            <h2>Small scenes that make her feel unforgettable.</h2>
          </div>

          <div className="gallery-grid">
            {catProfile.galleryItems.map((item, index) => (
              <article className="gallery-card" key={item.title}>
                <div className={`gallery-image image-${index + 1}`} aria-hidden="true" />
                <div className="gallery-copy">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
