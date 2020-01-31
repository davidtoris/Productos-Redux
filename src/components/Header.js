import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <ul class="nav">
        <li class="nav-item">
          <Link class="nav-link active" to="/">
            Inicio
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="productos/nuevo">
            Nuevo
          </Link>
        </li>
      </ul>
    </div>
  );
}
