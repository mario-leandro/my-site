import "@/styles/footer.sass";
import Image from "next/image";
import Link from "next/link";
import linkedInIcon from "@/icons/linkedin.svg";
import githubIcon from "@/icons/github.svg";

export default function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <Link href="/">{"</Mario Silva>"}</Link>
                    </div>

                    <div className="footer-medias">
                        <div className="media-links">
                            <h3>Redes Sociais</h3>
                            <Link href="/" target="_blank">
                                <Image src={linkedInIcon} alt="LinkedIn icon" />
                                LinkedIn
                            </Link>

                            <Link href="/" target="_blank">
                                <Image src={githubIcon} alt="Github icon" />
                                Github
                            </Link>
                        </div>

                        <div className="media-links">
                            <h3>Links de navegação</h3>
                            <Link href="/">Início</Link>
                            <Link href="#sobre">Sobre</Link>
                            <Link href="#conhecimento">Conhecimento</Link>
                            <Link href="#projetos">Projetos</Link>
                            <Link href="#contato">Contato</Link>
                        </div>
                    </div>

                    <div className="footer-copy">
                        <p>© 2024 Mario Silva. Todos os direitos reservados.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}