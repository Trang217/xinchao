import Link from "next/link";
import { ShoppingBag, UserRound } from "lucide-react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export function Header() {
  return (
    <header className="main-header">
      <div className="header-inner">
        <Link href="/" className="brand" aria-label="XinChao Restaurant home">
          <span className="brand-mark" aria-hidden="true">
            x
          </span>
          <span className="brand-name">
            xin<span>chao</span>
            <small>VIETNAMESE KITCHEN</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link href={item.href} key={item.label}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <Link className="login-link" href="/login">
            <UserRound size={17} strokeWidth={1.8} aria-hidden="true" />
            <span>Login</span>
          </Link>
          <Link className="cart-link" href="/menu" aria-label="View your cart">
            <ShoppingBag size={17} strokeWidth={1.8} aria-hidden="true" />
            <span>Cart</span>
            <span className="cart-count">0</span>
          </Link>
        </div>
      </div>
      <nav className="mobile-nav" aria-label="Mobile navigation">
        {navigation.map((item) => (
          <Link href={item.href} key={item.label}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
