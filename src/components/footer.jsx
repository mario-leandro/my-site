import "@/css/footer.css";
import Link from "next/link";

export default function Footer() {
    return (
        <footer>
            <div className="nav-footer">
                <div className="logo">
                    <Link href="/">Mario Leandro</Link>
                </div>

                <ul className="nav-list">
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            href="/"
                        >
                            Início
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            href="/Projetos"
                        >
                            Projetos
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="copy">
                <p>@Todos os direitos reservados ao criador</p>
            </div>
        </footer>
    )
}