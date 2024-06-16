"use client"
import "@/styles/header.scss";
import Link from "next/link";
import mobile_icon_open from "@/icons/menuMobile-open.svg";
import mobile_icon_close from "@/icons/menuMobile-close.svg";
import Image from "next/image";
import MobileMenu from "@/components/mobileMenu";
 
export const Header = () => { 
    const { handleMenuOpen, handleMenuClose } = MobileMenu();

    return (
        <header className="header">
            <div className="header-container">
                <div className="logo">
                    <Link href="/">Mario Silva</Link>
                </div>
                
                <div className="nav-bar" id="nav">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <Link href="/" className="nav-link">Início</Link>
                        </li>

                        <li className="nav-item">
                            <a href="#about" className="nav-link">Sobre</a>
                        </li>

                        <li className="nav-item">
                            <a href="#knowledge" className="nav-link">Conhecimento</a>
                        </li>

                        <li className="nav-item">
                            <a href="#projects" className="nav-link">Projetos</a>
                        </li>

                        <li className="nav-item">
                            <a href="#contact" className="nav-link">Contato</a>
                        </li>
                    </ul>
                </div>

                <div className="mobile-icon">
                    <Image id="menu-open" src={mobile_icon_open} alt="Menu Mobile" onClick={handleMenuOpen} />
                    <Image id="menu-close" src={mobile_icon_close} alt="Menu Mobile" onClick={handleMenuClose} />
                </div>
            </div>
        </header>
    );
}