import React from 'react';
import '../styles/Header.css';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <h2>Bloggers</h2>
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/about">
          About
        </NavLink>
      </nav>
    </header>
  );
}
