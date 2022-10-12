import React, {useState} from "react";
import "./Header.css"
import {IoMdImage, IoIosIceCream, IoMdContacts, IoLogoInstagram, IoMdMenu, IoMdClose} from 'react-icons/io'
import { Link } from "react-router-dom";


const Header = () => {

    const [active, setActive] =useState(false)
    const activateNav = () => {
        setActive(!active)
    }

  return <div className={active ? 'header': 'header-mobile'}>
        {
            <div className="menu-icon" onClick={activateNav}>

              {!active ? <IoMdMenu className="menu"/> : <IoMdClose className="menu"/>}
            
            </div>

        }
    <nav>
      <ul className={active ? 'ul-item' : 'ul-item oicon' }>
        <li>
          
          <IoMdImage className="icon"/>
          <Link to= "/">Photos</Link>
          
        </li>
        <li>
          
          <IoIosIceCream className="icon"/>
          <Link to= "/">Shop</Link>
          
        </li>
        <li>
          
          <IoMdContacts className="icon"/>
          <Link to= "/">Contact</Link>
          
        </li>
        <li>
          
          <IoLogoInstagram className="icon"/>
          <Link to= "/">Instagram</Link>
          
        </li>
        
      </ul>
    </nav>
  </div>;
};

export default Header;
