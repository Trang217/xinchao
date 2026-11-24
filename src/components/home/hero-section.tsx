import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, MapPin } from "lucide-react";

export function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="eyebrow-line" />
            A little taste of Vietnam
          </p>
          <h1>
            Come hungry.
            <br />
            Leave <span>happy.</span>
          </h1>
          <p className="hero-description">
            The comfort of a slow-simmered broth. The crunch of a warm bánh mì.
            A seat at our table is always waiting.
          </p>
          <div className="hero-buttons">
            <Link className="button button-primary" href="/menu">
              Order now <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <Link className="text-link" href="/#our-story">
              Get to know us
            </Link>
          </div>
          <div className="hero-location">
            <MapPin size={16} aria-hidden="true" />
            <span>Made with love, served with a smile</span>
          </div>
          <Link className="scroll-cue" href="/#favorites" aria-label="Scroll to favorites">
            <ArrowDown size={16} aria-hidden="true" />
          </Link>
        </div>
        <div className="hero-visual">
          <div className="hero-image-frame">
            <Image
              src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1400&q=90"
              alt="A colorful Vietnamese meal shared around the table"
              fill
              priority
              unoptimized
              sizes="(max-width: 760px) 100vw, 52vw"
              className="hero-image"
            />
          </div>
          <div className="hero-note">
            <span className="note-sparkle">✳</span>
            <span>
              <strong>Made from scratch</strong>
              <small>Every bowl, every day</small>
            </span>
          </div>
          <div className="hero-stamp" aria-hidden="true">
            <span>FRESH</span>
            <span>·</span>
            <span>LOCAL</span>
            <span>·</span>
            <span>LOVED</span>
          </div>
        </div>
      </div>
    </section>
  );
}
