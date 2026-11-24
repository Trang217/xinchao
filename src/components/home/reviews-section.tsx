import { Star } from "lucide-react";
import { reviews } from "@/components/home/home-data";

export function ReviewsSection() {
  return (
    <section className="reviews-section">
      <div className="section">
        <div className="reviews-heading">
          <p className="eyebrow">
            <span className="eyebrow-line" />
            Kind words from our table
          </p>
          <h2>A little love <em>goes a long way.</em></h2>
          <div className="reviews-rating">
            <span>Sample guest notes — replace with verified reviews</span>
          </div>
        </div>
        <div className="review-grid">
          {reviews.map((review) => (
            <figure className="review-card" key={review.name}>
              <div className="review-stars" aria-hidden="true">
                {Array.from({ length: 5 }, (_, index) => (
                  <Star key={index} size={13} fill="currentColor" />
                ))}
              </div>
              <blockquote>“{review.quote}”</blockquote>
              <figcaption>
                <span className="review-avatar" aria-hidden="true">
                  {review.name.charAt(0)}
                </span>
                <span>
                  <strong>{review.name}</strong>
                  <small>{review.location}</small>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
