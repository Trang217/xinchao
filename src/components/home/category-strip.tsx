import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { foodCategories } from "@/components/home/home-data";

export function CategoryStrip() {
  return (
    <section className="category-section">
      <div className="section category-inner">
        <div className="section-heading category-heading">
          <div>
            <p className="eyebrow eyebrow-light">
              <span className="eyebrow-line" />
              Find your kind of comfort
            </p>
            <h2>What sounds <em>good?</em></h2>
          </div>
          <p className="category-intro">
            From cozy bowls to fresh-from-the-kitchen favorites, there’s a
            little something for every craving.
          </p>
        </div>
        <div className="category-grid">
          {foodCategories.map((category) => (
            <Link className="category-card" href="/menu" key={category.name}>
              <div className="category-image-wrap">
                <Image
                  src={category.image}
                  alt=""
                  fill
                  unoptimized
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                  className="category-image"
                />
                <span className="category-arrow">
                  <ArrowUpRight size={17} aria-hidden="true" />
                </span>
              </div>
              <span className="category-title">{category.name}</span>
              <span className="category-count">{category.count}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
