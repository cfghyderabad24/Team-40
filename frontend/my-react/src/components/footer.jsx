import React from 'react'

export const Footer = () => {
    let footerStyle={
        backgroundColor : 'orange',
        color : 'white',
        width : '100vw',
        height : '10vh' ,
        textAlign : "center",
        position : 'fixed',
        bottom : '0',
        fontSize:'0.75rem',
        padding:"10px"
    }
    let anchorstyle={
      textDecoration:"none",
      color : "white",
      fontSize: '0.75rem',
    }
  return (
    <>
        <footer className='footer' style={footerStyle}>
            <p> Next skills 360  &copy; 2023-2028 All rights reserved </p> 
            <a href="#" style={anchorstyle}>Terms and Conditions</a> | <a href="#" style={anchorstyle}>Privacy policy</a>
        </footer>
    </>
  )
}
