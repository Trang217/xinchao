"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Eye, EyeOff } from "lucide-react";
import { useActionState, useState } from "react";
import { registerAction } from "@/actions/auth";

export function RegisterForm() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [state, formAction, isPending] = useActionState(registerAction, {
    error: "",
  });

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

      <div className="auth-content auth-content-register">
        <section className="auth-art" aria-label="XinChao restaurant">
          <Image
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1400&q=90"
            alt="A Vietnamese meal ready to share"
            fill
            priority
            unoptimized
            sizes="(max-width: 760px) 100vw, 48vw"
            className="auth-art-image"
          />
          <div className="auth-art-overlay" />
          <div className="auth-art-copy">
            <span className="auth-art-kicker">There’s always room.</span>
            <p>
              Good food is
              <br />
              better together.
            </p>
            <span className="auth-art-caption">
              Pull up a chair at XinChao.
            </span>
          </div>
          <span className="auth-art-flower" aria-hidden="true">
            ✳
          </span>
        </section>

        <section className="auth-panel auth-panel-register">
          <div className="auth-form-wrap">
            <p className="auth-eyebrow">
              <span className="eyebrow-line" />A seat at our table
            </p>
            <h1 className="auth-title">Let’s get acquainted.</h1>
            <p className="auth-intro">
              Create your account and make yourself at home.
            </p>

            <form action={formAction} className="auth-form auth-form-register">
              <div className="auth-field">
                <label htmlFor="register-name">Your name</label>
                <input
                  id="register-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="How should we call you?"
                />
              </div>

              <div className="auth-field">
                <label htmlFor="register-email">Email address</label>
                <input
                  id="register-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                />
              </div>

              <div className="auth-field">
                <label htmlFor="register-password">Password</label>
                <div className="auth-password-wrap">
                  <input
                    id="register-password"
                    name="password"
                    type={passwordVisible ? "text" : "password"}
                    autoComplete="new-password"
                    placeholder="Create a password"
                  />
                  <button
                    className="password-toggle"
                    type="button"
                    aria-label={
                      passwordVisible ? "Hide password" : "Show password"
                    }
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

              <div className="auth-field">
                <label htmlFor="register-address">Address</label>
                <input
                  id="register-address"
                  name="address"
                  type="text"
                  autoComplete="street-address"
                  placeholder="Street address"
                />
              </div>

              <div className="auth-field">
                <label htmlFor="register-phone">Phone number</label>
                <input
                  id="register-phone"
                  name="phoneNumber"
                  type="tel"
                  autoComplete="tel"
                  placeholder="Your phone number"
                />
              </div>

              <button className="auth-submit" type="submit">
                Create account <ArrowRight size={17} aria-hidden="true" />
              </button>
            </form>

            <p className="auth-switch">
              Already have an account? <Link href="/login">Login</Link>
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
