import { useState } from "react";
import "./contact.scss";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    /*this is to prevent page from refreshing when you click submit button*/
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {/*if there is a message or if setMessage is true, write a span below the submit button*/}
          {message && (
            <span>Response submitted. We will get back you ASAP!</span>
          )}
        </form>
      </div>
    </div>
  );
}
