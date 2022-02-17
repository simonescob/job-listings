import React from 'react';
import imageHeader from "../images/bg-header-desktop.svg";

const Header = () => {
  return(
    <header className="header">
      <img src={imageHeader} alt="header" />
    </header>
  )
}

export default Header;