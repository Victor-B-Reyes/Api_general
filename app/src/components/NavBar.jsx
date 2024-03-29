import React from 'react';
import { Link } from 'react-router-dom';

const links = [
  {
    name: "Login",
    href: "/Login",
  },
  {
    name: "Invernaderos",
    href: "/Invernaderos",
  },
];

const NavBar = ()  => {
  return (
    <div>
      {links.map((x) => (
        <Link to={x.href}>{x.name}</Link>
      ))}
    </div>
  );
};

export default NavBar;

