"use client";
import { useState } from "react";
import axios from "axios";
export default function SubscribeToNewsletter() {
  const [email, setEmail] = useState("");
  const [hasSignedUp, setHasSignedUp] = useState(false);
  const [showError, setShowError] = useState(false);
  const onChange = (e) => {
    setEmail(e.target.value);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if (email.length) {
        await axios.post("http://localhost:1337/api/newsletter-signups", {
          data: {
            email,
          },
        });
        setHasSignedUp(true);
      }
    } catch (err) {
      console.log(err);
      setShowError(true);
    }
  };
  return (
    <section className="newsletter">
      {showError ? (
        <h4 className="newslatter__thanks">Could not sing up</h4>
      ) : hasSignedUp ? (
        <h4 className="newslatter__thanks">Thank you for signing</h4>
      ) : (
        <>
          <div className="newsletter__info">
            <h4>Subscribe to our newsletter</h4>
            <p className="copy">
              Unlock Exclusive Insights and Stay In the Know – Subscribe to Our
              Newsletter Today to always stay in touch
            </p>
          </div>
          <form action="" className="newsletter__form" onSubmit={onSubmit}>
            <input
              type="text"
              className="newsletter__email input"
              placeholder="Input your email adress"
              value={email}
              onChange={onChange}
            />
            <button
              type="submit"
              className="newsletter__subscribe btn--medium btn--turquoise"
            >
              Subscribe!
            </button>
          </form>
        </>
      )}
    </section>
  );
}
