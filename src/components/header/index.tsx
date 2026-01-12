import { Link } from '@tanstack/react-router';
import { Image } from '@unpic/react';

import logo from './dafticon.png';
import { logoLinkStyle, containerStyle } from './styles';

export default function Header() {
  return (
    <>
      <header className={containerStyle}>
        <h1 className={logoLinkStyle}>
          <Link to="/" title="Home" aria-label="Home">
            <Image src={logo} alt="Web Developer - Daftness" width={80} height={80} />
          </Link>
        </h1>
      </header>
    </>
  );
}
