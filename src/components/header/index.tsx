import { Link } from '@tanstack/react-router';

import Modal from './modal';

import { useState } from 'react';

import {
  Menu,
} from 'lucide-react';

import { logoLinkStyle, containerStyle, navButtonStyle } from './styles';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const [groupedExpanded, setGroupedExpanded] = useState<
    Record<string, boolean>
  >({});

  return (
    <>
      <header className={containerStyle}>
        <button
          // onClick={() => setIsOpen(true)}
          className={navButtonStyle}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
        <h1 className={logoLinkStyle}>
          <Link to="/">
            Daftness
          </Link>
        </h1>
        <Modal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          groupedExpanded={groupedExpanded}
          setGroupedExpanded={setGroupedExpanded}
        />
      </header>
    </>
  )
}
