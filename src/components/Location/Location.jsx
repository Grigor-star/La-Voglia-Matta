import React, { useState, useEffect } from "react";

const Location = () => {
  const [dataForm, setDataForm] = useState();
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [feedback, setFeedback] = useState("");
  useEffect(() => {
    setDataForm({ name: name, lastname: lastname, feedback: feedback });
  }, [name, lastname, feedback]);
  const handleSubmit = async () => {
    try {
      if (dataForm) {
        console.log(dataForm);
        const response = await fetch(
          "https://lavogliamattaserver.onrender.com/mail",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              // You might need additional headers like authentication tokens
            },
            body: JSON.stringify(dataForm),
          }
        );
        alert("Clicked");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        alert("Feedback was sent successfully");
      } else {
        alert("Error");
      }
    } catch (err) {
      console.error(err);
      alert("Error sending feedback. Please try again later.");
    }
  };

  return (
    <section
      id="Location"
      className="map-section">
      <div>
        <h1>Nostra Posizione</h1>
        <div className="location-inner">
          <iframe
            title="iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2852.887520961599!2d11.705343876422837!3d44.35336177107761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132b4a786218fde5%3A0xb04b50bc621d3ab0!2sPizzeria%20La%20Voglia%20Matta!5e0!3m2!1sit!2sit!4v1702666614597!5m2!1sit!2sit"
            width="50%"
            height="600px"></iframe>
          <div className="email-form">
            <label htmlFor="">* Name</label>
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="">* Lastname</label>
            <input
              type="text"
              placeholder="Lastname"
              onChange={(e) => setLastname(e.target.value)}
            />
            <label htmlFor="">* Feedback</label>
            <textarea
              placeholder="Type here..."
              name=""
              id=""
              cols="30"
              rows="10"
              onChange={(e) => setFeedback(e.target.value)}></textarea>
            <button onClick={handleSubmit}>submit</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
