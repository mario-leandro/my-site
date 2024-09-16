import "@/styles/main.sass"
import Image from "next/image";
import minhaFoto from "@/img/minhaFoto.png";
import Link from "next/link";
import SkillsTech from "@/components/skillsTech";
import ProjectsPrincipal from "@/components/subfaces/projectsPrincipal";

export default function Main() {
    return (
        <main>
            <div className="main-container">
                <div className="main-content">
                    <div className="main-title">
                        <div className="main-text">
                            <h1>Olá, eu sou o Mario Silva</h1>
                            <p>Desenvolvedor Full Stack</p>
                        </div>
                    </div>

                    <div className="main-about">
                        <div className="title">
                            <h2 id="sobre">Sobre</h2>
                        </div>

                        <div className="about-content">
                            <div className="about-photography">
                                <div className="img">
                                    <Image src={minhaFoto} alt="Mario Silva" width={300} height={300} />
                                </div>

                                <div className="btn-cv">
                                    <Link href="https://drive.google.com/file/d/12N4X_p0WgJtvyWj3J9EXZn-qP0RZ8hWB/view?usp=drive_link" target="_blank">Baixar CV</Link>
                                </div>
                            </div>

                            <div className="text">
                                <div className="about-text">
                                    <p>
                                        Sou um desenvolvedor Full Stack com foco em tecnologias modernas e práticas de programação. 
                                        Meu objetivo é sempre melhorar minhas habilidades e aprender novas tecnologias para me manter atualizado.
                                    </p>
                                    
                                    <br />

                                    <p>
                                        Atualmente, estou estudando e trabalhando com tecnologias como React, Node.js, TypeScript, Vite, entre outras.
                                        Estou sempre disposto a aprender e aprimorar minhas habilidades com novas linguagens.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="skills-container">
                        <SkillsTech />
                    </div>

                    <div className="projects-container">
                        <ProjectsPrincipal />
                    </div>

                    <div className="contact-container">
                        <div className="contact-title">
                            <h2 id="contato">Contato</h2>
                        </div>

                        <div className="contact-content">
                            <form action="https://formsubmit.co/30a92fed5ba505a6a31cde2e9bb6f5d8" method="POST">
                                <div className="form-group">
                                    <label htmlFor="name">Nome</label>
                                    <input type="text" name="name" id="name" required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" id="email" required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Mensagem</label>
                                    <textarea name="message" id="message" required></textarea>
                                </div>

                                <div className="form-group">
                                    <button type="submit">Enviar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}