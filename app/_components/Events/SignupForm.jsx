"use client";

import axios from "axios";
import { useState } from "react";
import TextInput from "../TextInput";
import { allDataFilledIn } from "@/utils/validation.utils";
export default function SignupForm({ infoText, headline, buttonLabel }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      data: { ...formData, isGeneralInterest: true },
    };

    if (allDataFilledIn(formData)) {
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/participants`,
          payload
        );
        setShowConfirmation(true);
      } catch (err) {
        setErrorMsg(err.response?.data?.error?.message || "bad code bro");
      }
    } else {
      setErrorMsg("fill out all");
    }
  };

  return (
    <section className="signup-form">
      <div className="signup-form__info">
        <h3 className="signup-form__headline">{headline || "or this lel"}</h3>
      </div>
      {showConfirmation ? (
        <div className="signup-form__form">
          <h4>thank you broski</h4>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="signup-form__form">
          <div className="singup-form__name-container">
            <TextInput
              inputName="firstName"
              value={formData.firstName}
              label="first Name"
              onChange={onChange}
            />
            <TextInput
              inputName="lastName"
              value={formData.lastName}
              label="last Name"
              onChange={onChange}
            />
            <TextInput
              inputName="email"
              value={formData.email}
              label="email"
              onChange={onChange}
            />
            <TextInput
              inputName="telephone"
              value={formData.telephone}
              label="telephone"
              onChange={onChange}
            />
            <button type="submit" className="btn btn--medium btn--teal">
              {buttonLabel || "stay in touch"}
            </button>
            {errorMsg && <p className="copy">{errorMsg}</p>}
          </div>
        </form>
      )}
    </section>
  );
}
