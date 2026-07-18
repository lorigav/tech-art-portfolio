import Link from 'next/link';
import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <footer className="footer footer-center p-10 bg-base-100 text-base-content">
        <nav className="grid grid-flow-col gap-4">
          <Link className="link link-hover" href="/">WORK</Link>
          <Link className="link link-hover" href="/Bios">BIO</Link>
          <Link className="link link-hover" href="/Contact">CONTACT</Link>
        </nav>
        <aside>
          <p>Copyright © {currentYear} - All right reserved by Lori Gavia</p>
        </aside>
      </footer>
    </div>
  )
}

export default Footer