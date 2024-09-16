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
        const nav = navRef.current;
        const openButton = menuOpen.current;
        const closeButton = menuClose.current;

        if (nav && openButton && closeButton) {
            nav.style.display = "flex";
            openButton.style.display = "none";
            closeButton.style.display = "flex";

            nav.addEventListener("click", (e) => {
                if (e.target instanceof HTMLElement && e.target.tagName === "A") {
                    nav.style.display = "none";
                    openButton.style.display = "flex";
                    closeButton.style.display = "none";
                }
            });
        }
    };

    const handleMenuClose = () => {
        const nav = navRef.current;
        const openButton = menuOpen.current;
        const closeButton = menuClose.current;

        if (nav && openButton && closeButton) {
            nav.style.display = "none";
            openButton.style.display = "flex";
            closeButton.style.display = "none";
        }
    };

    return { handleMenuOpen, handleMenuClose };
};

export default MobileMenu;
