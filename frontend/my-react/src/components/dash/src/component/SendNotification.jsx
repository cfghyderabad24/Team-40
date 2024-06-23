import React, { useState } from "react";

const SendNotification = () => {
  const [body, setBody] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ notification: body }),
      }).then((response) => {
        alert("Notification sent!");
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <label htmlFor="body">Body of the notification:</label>
      <input
        name="body"
        id="body"
        value={body}
        onInput={(e) => {
          setBody(e.target.value);
        }}
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default SendNotification;
