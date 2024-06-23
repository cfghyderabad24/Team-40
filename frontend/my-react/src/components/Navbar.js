import { useState } from "react";
import About from "./about_us/about_us/src/components/About";

function Header() {
  const styles = {
    button: {
      backgroundColor: 'black',
      color: 'white',
      height: '40px',
      width: '80px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer'
    }
  };
  const [count, setCount] = useState(0);

  const handleEvent = () => {
    setCount(count + 1);
  };

  return (
    <>
      <style>
        {`
          .navbar {
            height:100px;
            background-color: black;
            padding: 4px 0;
          }
          #navig {
            background-color: darkslategray;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
          }
          .navbar-brand img {
            width: 90px;
          }
          .nav-links {
            list-style: none;
            display: flex;
            gap: 20px;
          }
          .nav-links li {
            cursor: pointer;
          }
        `}
      </style>
      <nav className="navbar navbar-expand-lg bg-secondary  justify-content-center sticky-top " id="navig">
        <div className="container-fluid">
          <a className="navbar-brand rounded" href="#">
            <img src="./Ns logo white back.png" alt="NEXT 360 logo" />
          </a>
          <div className="navbar-nav">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Dropdown</a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Link</a></li>
                <li><a className="dropdown-item" href="#">Another link</a></li>
                <li><a className="dropdown-item" href="#">A third link</a></li>
              </ul>
            </li>
            <li className="nav-item"><a className="nav-link active text-white" href="#"> Home</a></li>
            <li className="nav-item"><a className="nav-link active text-white" href={'/About'}>About us</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#">Log in</a></li>
            <form className="d-flex">
              <input className="form-control me-2" type="text" placeholder="Search" />
              <button className="btn btn-primary" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
