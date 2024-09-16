"use client"
import "@/styles/header.sass";
import Link from "next/link";
import menuMobileOpenIcon from "@/icons/menuMobile-open.svg";
import menuMobileCloseIcon from "@/icons/menuMobile-close.svg";
// import MobileMenu from "@/components/mobileMenu";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  // const { handleMenuOpen, handleMenuClose } = MobileMenu();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navigation = [
    { name: "Início", href: "/" },
    { name: "Sobre", href: "#sobre" },
    { name: "Conhecimentos", href: "#conhecimentos" },
    { name: "Projetos", href: "#projetos" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <header>
      <div className="header-container">
        <div className="header-content">
          <div className="header-logo">
            <Link href="/">{"</Mario Silva>"}</Link>
          </div>

          <div className={`header-nav ${menuOpen ? 'open' : ''}`}>
            <ul className="nav-list">
              <li className="nav-item">
                {navigation.map((item, index) => (
                  <Link key={index} href={item.href} className="nav-link">
                    {item.name}
                  </Link>
                ))}
              </li>

              <li className="nav-item">
                <Link className="btn" href="https://drive.google.com/file/d/12N4X_p0WgJtvyWj3J9EXZn-qP0RZ8hWB/view?usp=drive_link" target="_blank">Baixar CV</Link>
              </li>
            </ul>
          </div>

          <div className="header-mobile">
            {menuOpen ? (
              <button className="btn" onClick={toggleMenu}>
                <Image src={menuMobileCloseIcon} alt="Fechar menu" />
              </button>
            ) : (
              <button className="btn" onClick={toggleMenu}>
                <Image src={menuMobileOpenIcon} alt="Abrir menu" />
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
