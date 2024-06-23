import React, { useState } from 'react';
import './Ideaform.css'

function IdeaForm() {
  const [email, setEmail] = useState('');
  const [idea, setIdea] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Implement form submission logic here (e.g., send email with idea)
    console.log('Email:', email);
    console.log('Idea:', idea);

    // Clear form after submission (optional)
    setEmail('');
    setIdea('');
  };


  return (
    <form className="idea-form" onSubmit={handleSubmit}>  <b>Have a product idea?</b>
      <label htmlFor="email">Your Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Enter your email"
        required
      />
      <label htmlFor="idea">Product Idea:</label>
      <textarea
        id="idea"
        value={idea}
        onChange={(event) => setIdea(event.target.value)}
        placeholder="Describe your product idea"
        required
      />
      <button type="submit">Submit Idea</button>
    </form>
  );
}

export default IdeaForm;
