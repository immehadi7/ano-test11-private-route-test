import React, { useState , useEffect } from 'react';
import './header.css';
import schoolLogo from '../../all img/unnamed.png';




const Header = () => {
    const [users , setUser] = useState([])
        useEffect( ()=>{
            fetch('https://immehadi7.github.io/jsonapi/donerList.json')
            .then(res => res.json() )
            .then(data => setUser(data))
        } ,[])

    return (
        <div>
            <div>
            <nav className="navbar navbar-expand-lg navbar-light nav-styles">
      <div className="container-fluid">
    <a className="navbar-brand navbar-img" href="#">
        <img src= {schoolLogo} alt="" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">Rutine</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">All course</a>
        </li> <li className="nav-item">
          <a className="nav-link active" href="#">Notice</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">Contact</a>
        </li>
       
      </ul>
      <form className="d-flex" />
        <input className="me-2" type="search" placeholder="Search for donar" aria-label="Search" />
        <button className="btn btn-outline-success custom-bg" type="submit">Search</button>
      
    </div>
  </div>
</nav>           
 </div>
        <div className='another-header'>
            <h1>There is upcoming event . So , we need some doner </h1>
            <h2>Total Budget for event : $10000 </h2>
        </div>
              {
                  users.map( user=>  )
              }
        
        
                </div>
    );
};

export default Header;