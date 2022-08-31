import React from "react";
import style from './Navbar.module.css'
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <NavLink to="">Produtos</NavLink>
      <NavLink to="contato">Contato</NavLink>
    </div>
  );
};

export default Navbar;
