import LanguageSelector from "./components/language-selector";
import {Trans, useTranslation} from "react-i18next";
import "./App.css";

const App = () => {
  const {t} = useTranslation();
  const {line1, line2} = t("description", {channel: "RoadsideCoder"});

  return (
    <main className="page-shell">
      <div className="ambient ambient-one" aria-hidden="true"></div>
      <div className="ambient ambient-two" aria-hidden="true"></div>
      <header className="topbar">
        <div className="brand">
          <span className="brand-icon" aria-hidden="true">
            <svg viewBox="0 0 40 40" fill="none">
              <path d="M8 17h6v6H8zM16 17h6v6h-6zM24 17h6v6h-6zM16 9h6v6h-6zM24 9h6v6h-6z" fill="currentColor" />
              <path d="M5 25h29c-.9 5.1-4.5 8-10.6 8H15c-5.5 0-8.8-2.8-10-8Z" fill="currentColor" opacity=".68" />
              <path d="M31 18c2.6-2.5 4.7-2.4 6.7-.7-1 2.8-3.2 4.1-6.3 3.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </span>
          <span className="brand-name">Docker<span>Learning</span></span>
        </div>
        <LanguageSelector />
      </header>

      <section className="hero-card" aria-labelledby="greeting">
        <div className="card-glow" aria-hidden="true"></div>
        <div className="hero-content">
          <div className="eyebrow"><span className="eyebrow-dot"></span> YOUR LEARNING JOURNEY</div>
          <h1 id="greeting">{t("greeting")}</h1>
          <p className="hero-description">
            <Trans
              i18nKey={line1}
              values={{channel: "RoadsideCoder"}}
              components={{1: <strong />}}
            />
          </p>
          {line2 && <p className="hero-secondary">{line2}</p>}
          <div className="journey-divider"></div>
          <div className="journey-footer">
            <span className="journey-label">A great day to start</span>
            <span className="journey-steps">
              <span>LEARN</span><i></i><span>BUILD</span><i></i><span>GROW</span>
            </span>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="art-orbit orbit-one"></div>
          <div className="art-orbit orbit-two"></div>
          <div className="art-cube">
            <span className="cube-top"></span>
            <span className="cube-left"></span>
            <span className="cube-right"></span>
          </div>
          <span className="art-spark spark-one"></span>
          <span className="art-spark spark-two"></span>
        </div>
      </section>

      <footer className="page-footer">ONE STEP AT A TIME <span>•</span> YOU’VE GOT THIS</footer>
    </main>
  );
};

export default App;
