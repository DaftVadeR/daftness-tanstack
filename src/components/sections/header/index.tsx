import { Link } from '@tanstack/react-router';
import { logoLinkStyle, containerStyle, hiddenTitleStyle } from './styles';

export default function Header() {
  return (
    <>
      <header className={containerStyle}>
        <h1 className={hiddenTitleStyle}>
          Web Developer - Daftness
        </h1>
        <Link to="/" title="Home" aria-label="Home" className={logoLinkStyle}>
          DafT the Dev
        </Link>
      </header>
    </>
  );
}
