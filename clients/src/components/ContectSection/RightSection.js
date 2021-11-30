import axios from "axios";
import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import AppConfig from "../../App.config";

export default function RightSection() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [error1, setError1] = useState("");
  const [token, setToken] = useState("");
  const reCaptcha = useRef();

  const handleRequest = async (e) => {
    if (!token) {
      setError("You must verify the captcha");
      return;
    }

    setError("");
    setError1("");
    if (email && message && name && subject !== "") {
      e.preventDefault();
      setLoading(true);
      console.log({ email, name, subject, message });

      const body = {
        name,
        email,
        message,
        subject,
      };

      await axios
        .post("/mail", body, {
          headers: {
            "Content-type": "application/json",
          },
        })
        .then((res) => {
          // alert("Email Sent Successfully");
          setLoading(false);
          console.log(res);
          // window.location.reload();
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } else {
      setError1("Please fill all required filled");
    }
    setEmail("");
    setName("");
    setMessage("");
    setSubject("");
  };

  return (
    <div>
      <p className="text-danger">{error1}</p>
      <form className="contact-form" id="contact-form" method="POST">
        <div className="row g-4">
          <div className="col-md-6">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="form-control input-style-2"
              placeholder="Your Name"
            />
          </div>
          <div className="col-md-6">
            <input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              type="number"
              required
              className="form-control input-style-2"
              placeholder="Your Moblie Number"
            />
          </div>
          <div className="col-md-12">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-control input-style-2"
              placeholder="Your Email Address"
            />
          </div>
          <div className="col-12">
            <textarea
              className="form-control input-style-2"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              placeholder="Please write a message to our consultant."
              defaultValue={""}
            />
          </div>
          <div className="col-12">
            <ReCAPTCHA
              ref={reCaptcha}
              sitekey={AppConfig.GOOGLE.reCaptcha}
              onChange={(token) => setToken(token)}
              onErrored={(e) => setToken("")}
            />
          </div>
          {error && <p className="text-danger">{error}</p>}
          <div className="col-12 text-center ">
            <button
              type="button"
              style={{ width: "100%" }}
              disabled={loading}
              onClick={handleRequest}
              className="theme-btn mt-20"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
          <div className="col-12 text-center">
            <p className="form-message" />
          </div>
        </div>
      </form>
    </div>
  );
}
