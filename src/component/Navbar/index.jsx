import React, { useState } from 'react';
import { Logo } from '../../assets/image';
import { NavLink } from './Navlink';
import { Link } from 'raviger'

const PageRoutes = [
  { name: 'Home', link: '/' },
  { name: 'About Us', link: '/aboutus' },
  { name: 'Rooms', link: '/rooms' },
  { name: 'Facilities', link: '/facilities' },
  { name: 'Contacts', link: '/contacts' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className='navbar bg-white px-10 absolute'>
      <div className='flex-1'>
        <Link href='/'>
          <img src={Logo} alt='logo' style={{ height: '70px', width: '120px' }} />
        </Link>
      </div>
      <div className='flex-none text-black font-bold'>
        {/* Mobile menu button */}
        <div className='md:hidden'>
          <button onClick={toggleMobileMenu}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M6 18L18 6M6 6l12 12'
                />
              ) : (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16m-7 6h7'
                />
              )}
            </svg>
          </button>
        </div>
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className='bg-white shadow-md p-4 md:hidden'>
            <ul className='menu-vertical text-lg'>
              {PageRoutes.map((link) => (
                <li key={link.name}>
                  <NavLink label={link.name} link={link.link} />
                </li>
              ))}
            </ul>
          </div>
        )}
        {/* Desktop menu */}
        <ul className='menu menu-horizontal gap-10 text-lg md:flex hidden'>
          {PageRoutes.map((link) => (
            <NavLink key={link.name} label={link.name} link={link.link} />
          ))}
        </ul>
      </div>
    </div>
  );
}
