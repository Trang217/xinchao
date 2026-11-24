"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export function LoginForm() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <main className="auth-page">
      <header className="auth-topbar">
        <Link href="/" className="brand" aria-label="XinChao home">
          <span className="brand-mark" aria-hidden="true">
            x
          </span>
          <span className="brand-name">
            xin<span>chao</span>
            <small>VIETNAMESE KITCHEN</small>
          </span>
        </Link>
        <Link className="auth-back-link" href="/">
          <ArrowLeft size={15} aria-hidden="true" />
          <span>Back to home</span>
        </Link>
      </header>

      <div className="auth-content">
        <section className="auth-art" aria-label="XinChao restaurant">
          <Image
            src="https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1400&q=90"
            alt="A warm bowl of Vietnamese pho"
            fill
            priority
            unoptimized
            sizes="(max-width: 760px) 100vw, 48vw"
            className="auth-art-image"
          />
          <div className="auth-art-overlay" />
          <div className="auth-art-copy">
            <span className="auth-art-kicker">Xin chào, friend.</span>
            <p>
              A familiar seat.
              <br />A favorite bowl.
            </p>
            <span className="auth-art-caption">Good to have you back.</span>
          </div>
          <span className="auth-art-flower" aria-hidden="true">
            ✳
          </span>
        </section>

        <section className="auth-panel">
          <div className="auth-form-wrap">
            <p className="auth-eyebrow">
              <span className="eyebrow-line" />
              Welcome back
            </p>
            <h1 className="auth-title">Come on in.</h1>
            <p className="auth-intro">
              Sign in to pick up right where the good stuff begins.
            </p>

            <form className="auth-form">
              <div className="auth-field">
                <label htmlFor="login-email">Email address</label>
                <input
                  id="login-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                />
              </div>

              <div className="auth-field">
                <label htmlFor="login-password">Password</label>
                <div className="auth-password-wrap">
                  <input
                    id="login-password"
                    name="password"
                    type={passwordVisible ? "text" : "password"}
                    autoComplete="current-password"
                    placeholder="Enter your password"
                  />
                  <button
                    className="password-toggle"
                    type="button"
                    aria-label={passwordVisible ? "Hide password" : "Show password"}
                    onClick={() => setPasswordVisible((visible) => !visible)}
                  >
                    {passwordVisible ? (
                      <EyeOff size={18} aria-hidden="true" />
                    ) : (
                      <Eye size={18} aria-hidden="true" />
                    )}
                  </button>
                </div>
              </div>

              <button className="auth-submit" type="button">
                Login <ArrowRight size={17} aria-hidden="true" />
              </button>
            </form>

            <p className="auth-switch">
              New to XinChao? <Link href="/register">Create an account</Link>
            </p>
            <p className="auth-footnote">
              Made with a little extra love <span aria-hidden="true">♥</span>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}