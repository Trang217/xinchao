import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { featuredDishes } from "@/components/home/home-data";

export function FeaturedDishes() {
  return (
    <section className="section favorites-section" id="favorites">
      <div className="section-heading">
        <div>
          <p className="eyebrow">
            <span className="eyebrow-line" />
            A few of our favorites
          </p>
          <h2>Good food, <em>good mood.</em></h2>
        </div>
        <Link className="text-link desktop-link" href="/menu">
          Explore the menu <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
      <div className="dish-grid">
        {featuredDishes.map((dish, index) => (
          <article className="dish-card" key={dish.name}>
            <Link
              href="/menu"
              className="dish-image-wrap"
              aria-label={`See ${dish.name} on the menu`}
            >
              <Image
                src={dish.image}
                alt={dish.name}
                fill
                unoptimized
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="dish-image"
              />
              <span className="dish-tag">
                <Star size={12} fill="currentColor" aria-hidden="true" />
                {dish.tag}
              </span>
              <span className="dish-number">0{index + 1}</span>
            </Link>
            <div className="dish-info">
              <div>
                <h3>{dish.name}</h3>
                <p>{dish.description}</p>
              </div>
              <span className="dish-price">{dish.price}</span>
            </div>
          </article>
        ))}
      </div>
      <Link className="button button-outline mobile-menu-button" href="/menu">
        See the full menu <ArrowRight size={16} aria-hidden="true" />
      </Link>
    </section>
  );
}
