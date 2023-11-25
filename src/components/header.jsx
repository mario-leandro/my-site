import "@/css/header.css";
import Link from "next/link";

export default function Header() {
    return (
        <header>
            <div className="logo">
                <Link href="/">Mario Leandro</Link>
            </div>

            <ul className="nav-list">
                <li className="nav-item">
                    <Link className="nav-link" href="/">Início</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" href="/Projetos">Projetos</Link>
                </li>
            </ul>
        </header>
    )
}