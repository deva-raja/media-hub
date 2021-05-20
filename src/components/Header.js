import React from 'react';

function Header() {
  return (
    <nav onClick={() => window.scroll(0, 0)} className='header'>
      🎬 Media Hub 🎥
    </nav>
  );
}
export default Header;
