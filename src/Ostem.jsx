import './Ostem.css';

export default function Ostem() {
  return (
    <div className="ostem-page">
      <h1>oSTEM Hackathon 2024 Social App</h1>

      <h2>Overview</h2>
      <p>
        Our team placed <strong>2nd Place</strong> and received the <strong>Most
        Innovative</strong> award at the oSTEM Hackathon for developing a
        location-based social connection web app for LGBTQ+ users.
      </p>
      <p>
        The app uses an interactive map interface to help foster community. I
        integrated secure user verification with a MongoDB database and custom
        API endpoints for account login and authentication.
      </p>

      <h2>Slide Deck</h2>
      <div className="ostem-content">
        <iframe src="/ostem_hackathon.pdf" title="oSTEM Hackathon 2024 Slide Deck" />
      </div>

      <p>
        <a href="/ostem_hackathon.pdf" target="_blank" rel="noopener noreferrer">
          View Full Slide Deck
        </a>
        {' · '}
        <a href="https://github.com/bchan42/oSTEMhackathon2024" target="_blank" rel="noopener noreferrer">
          GitHub Repository
        </a>
      </p>
    </div>
  );
}
