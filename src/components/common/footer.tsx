import Link from "next/link";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-main">
        <div className="footer-brand">
          <Link
            href="/"
            className="brand brand-footer"
            aria-label="XinChao home"
          >
            <span className="brand-mark" aria-hidden="true">
              x
            </span>
            <span className="brand-name">
              xin<span>chao</span>
              <small>VIETNAMESE KITCHEN</small>
            </span>
          </Link>
          <p>Good food, good people, and a little taste of Vietnam.</p>
          <div className="social-links">
            <a href="https://www.instagram.com/" aria-label="Instagram">
              <FaInstagram size={17} aria-hidden="true" />
            </a>
            <a href="https://www.facebook.com/" aria-label="Facebook">
              <FaFacebook size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="footer-column">
          <h3>Come say hello</h3>
          <p>
            <MapPin size={16} aria-hidden="true" />
            <span>Restaurant address coming soon</span>
          </p>
          <p>
            <Phone size={16} aria-hidden="true" />
            <span>Phone number coming soon</span>
          </p>
        </div>
        <div className="footer-column">
          <h3>Good to know</h3>
          <p>Opening hours coming soon</p>
          <Link href="/menu" className="footer-menu-link">
            Take a look at the menu{" "}
            <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>
        <div className="footer-note">
          <span>Have a seat.</span>
          <span>We saved you one.</span>
          <span className="footer-flower" aria-hidden="true">
            ✳
          </span>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 XinChao Restaurant</span>
        <span>
          Made with a little extra love <span aria-label="love">♥</span>
        </span>
      </div>
    </footer>
  );
}
