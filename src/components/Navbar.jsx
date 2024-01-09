import React from 'react'
import {Link}from "react-router-dom";

function Navbar() {
  return <>
  <div className="d-flex justify-content-center mt-4">
    <img src="https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Scalable-Vector-Graphics-SVG-for-Responsive-UI-Design.webp" className="card-img-top" alt="..."/>
  <ul className="nav nav-underline">
        <li class="nav-item">
          <Link to='/all' class="nav-link active" aria-current="page" href="#">ALL</Link>
        </li>
        <li class="nav-item">
          <Link to='/fullstack' class="nav-link active" aria-current="page" href="#">FULL STACK DEVELOPMENT</Link>
        </li>
        <li class="nav-item">
          <Link to='/datascience' class="nav-link active" aria-current="page" href="#">DATA SCIENCE</Link>
        </li>
        <li class="nav-item">
          <Link  to='/cybersecurity' class="nav-link active" aria-current="page" href="#">CYBER SECURITY</Link>
        </li>
        <li class="nav-item">
          <Link  to= '/career' class="nav-link active" aria-current="page" href="#">CAREER</Link>
        </li>
      </ul>
    </div>

  
  
  </>
  
}

export default Navbar