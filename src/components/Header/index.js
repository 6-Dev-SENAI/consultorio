import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header
      className="navbar navbar-expand-lg navbar-dark"
      style={{
        backgroundColor: "#1B3675",
      }}
    >
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img
            src="/assets/images/dente.png"
            alt="Dentes Saudáveis"
            width="25"
            height="25"
            class="d-inline-block align-text-top me-2"
          />
          Dentes Saudáveis
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse flex-grow-0"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contato" className="nav-link">
                Contato
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
