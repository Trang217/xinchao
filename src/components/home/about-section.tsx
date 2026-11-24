import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf } from "lucide-react";

export function AboutSection() {
  return (
    <section className="section about-section" id="about">
      <div className="about-visual">
        <div className="about-image-wrap">
          <Image
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=90"
            alt="A warm, welcoming restaurant dining room"
            fill
            unoptimized
            sizes="(max-width: 760px) 100vw, 46vw"
            className="about-image"
          />
        </div>
        <div className="about-badge">
          <Leaf size={18} aria-hidden="true" />
          <span>Rooted in tradition</span>
        </div>
        <span className="about-image-caption">A seat at our table, just for you.</span>
      </div>
      <div className="about-copy" id="our-story">
        <p className="eyebrow">
          <span className="eyebrow-line" />
          Xin chào — hello, friend
        </p>
        <h2>
          Our kitchen.
          <br />
          <em>Your new happy place.</em>
        </h2>
        <p>
          XinChao began with a simple feeling: the best meals are the ones that
          bring people together. We make the food we grew up loving—fresh herbs,
          family recipes, and broths that take their time.
        </p>
        <p>
          Nothing fussy. Just thoughtful, feel-good Vietnamese cooking, made
          fresh and shared with a warm welcome.
        </p>
        <Link href="/#contact" className="text-link about-link">
          A little more about us <ArrowRight size={16} aria-hidden="true" />
        </Link>
        <div className="about-values">
          <span>
            <strong>01</strong> Fresh, always
          </span>
          <span>
            <strong>02</strong> From the heart
          </span>
          <span>
            <strong>03</strong> Made to share
          </span>
        </div>
      </div>
    </section>
  );
}
