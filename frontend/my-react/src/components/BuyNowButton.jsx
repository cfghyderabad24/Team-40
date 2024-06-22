// BuyNowButton.js
import React from 'react';

const styles = {
  button: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  }
};

const BuyNowButton = ({ onClick }) => {
  return (
    <button onClick={onClick} style={styles.button} className="buy-now-button">
      Buy Now
    </button>
  );
};

export default BuyNowButton;
