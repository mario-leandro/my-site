"use client"
import { useEffect, useRef } from 'react';

const MobileMenu = () => {
    const menuOpenRef = useRef(null);
    const menuCloseRef = useRef(null);
    const navRef = useRef(null);

    useEffect(() => {
        if (typeof document !== 'undefined') {
            menuOpenRef.current = document.getElementById("menu-open");
            menuCloseRef.current = document.getElementById("menu-close");
            navRef.current = document.getElementById("nav");
        }
    }, []);

    const handleMenuOpen = () => {
        navRef.current.style.display = "flex";
        menuOpenRef.current.style.display = "none";
        menuCloseRef.current.style.display = "flex";

        navRef.current.addEventListener("click", (e) => {
            if (e.target.tagName === "A") {
                navRef.current.style.display = "none";
                menuOpenRef.current.style.display = "flex";
                menuCloseRef.current.style.display = "none";
            }
        });
    };

    const handleMenuClose = () => {
        navRef.current.style.display = "none";
        menuOpenRef.current.style.display = "flex";
        menuCloseRef.current.style.display = "none";
    };

    return { handleMenuOpen, handleMenuClose };
};

export default MobileMenu;