import React from 'react';
import imageHeaderDT from "../images/bg-header-desktop.svg";
import imageHeaderMB from "../images/bg-header-mobile.svg";

const Header = () => {
  let width_mobile = 375;

  return(
    <header className="header">

      {
        window.screen.width <= width_mobile ?
        <img src={imageHeaderMB} alt="header-mb" />
        : <img src={imageHeaderDT} alt="header-dt" />
      }

    </header>
  )
}

export default Header;