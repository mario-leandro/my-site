"use client";
import { useEffect, useRef } from "react";

const MobileMenu = () => {
    const menuOpen = useRef<HTMLButtonElement>(null);
    const menuClose = useRef<HTMLButtonElement>(null);
    const navRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        if (menuOpen.current && menuClose.current) {
            menuOpen.current.addEventListener("click", () => {
                document.body.classList.add("mobile-menu-open");
            });

            menuClose.current.addEventListener("click", () => {
                document.body.classList.remove("mobile-menu-open");
            });
        }
    }, []);

    const handleMenuOpen = () => {
        if (navRef.current && menuOpen.current && menuClose.current) {
            navRef.current.style.display = "flex";
            menuOpen.current.style.display = "none";
            menuClose.current.style.display = "flex";

            navRef.current.addEventListener("click", (e) => {
                if (e.target instanceof HTMLElement && e.target.tagName === "A") {
                    navRef.current.style.display = "none";
                    menuOpen.current.style.display = "flex";
                    menuClose.current.style.display = "none";
                }
            });
        }
    };

    const handleMenuClose = () => {
        if (navRef.current && menuOpen.current && menuClose.current) {
            navRef.current.style.display = "none";
            menuOpen.current.style.display = "flex";
            menuClose.current.style.display = "none";
        }
    };

    return { handleMenuOpen, handleMenuClose };
};

export default MobileMenu;
