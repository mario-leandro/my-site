import "@/styles/main.scss";
import Image from "next/image";
import minhaFoto from "@/img/minhaFoto.png";
import { skills } from "@/components/techKnowledge";
import Link from "next/link";
import { ListPrincipalProjects } from "@/components/principalProjects";

export const Main = () => {
    return (
        <main>
            <div className="main-container">
                <div className="apresentation">
                    <div className="text">
                        <p>
                            Olá, eu sou Mario Silva 
                            <br />
                            Sou Desenvolvedor Full-stack.
                        </p>
                    </div>
                    <div className="social">
                        <Link href="https://www.linkedin.com/in/dev-marioleandro/" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"></path></svg>
                        </Link>

                        <Link href="https://github.com/mario-leandro" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"></path></svg>
                        </Link>
                    </div>
                </div>

                <div className="about" id="about">
                    <div className="titleAbout">
                        <h2>Sobre</h2>
                    </div>

                    <div className="text-img">
                        <div className="imgAbout">
                            <Image src={minhaFoto} alt="Mario Silva" />
                            {/* <h1>Image here</h1> */}
                        </div>

                        <div className="textAbout">
                            <p>
                                Sou um desenvolvedor full-stack, 
                                apaixonado por tecnologia e por resolver problemas, 
                                sou autodidata e estou sempre procurando
                                melhorar minhas habilidades.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="knowledge" id="knowledge">
                    <div className="titleKnowledge">
                        <h2>Conhecimento</h2>
                    </div>

                    <div className="textKnowledge">
                        <p>
                            Aqui estão algumas tecnologias com as quais trabalho:
                        </p>
                    </div>

                    <div className="knowledge-container">
                        { skills.map((skill) => (
                            <div className="knowledge-card" key={skill.id}>
                                <div className="icon">
                                    <img src={skill.img} alt={skill.nome} />
                                </div>

                                <div className="name-tech">
                                    <p>{skill.nome}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="projects" id="projects">
                    <div className="titleProjects">
                        <h2>Principais Projetos</h2>
                    </div>

                    {/* 
                        Here are the projects container.
                    */}
                    <div className="projects-container">
                        {/* 
                            I use the map function to list the projects.
                        */}
                        { ListPrincipalProjects.map((project) => (
                            <div className="card" key={project.id}>
                                <div className="card-image">
                                    <Image src={project.imgProjeto} alt={project.nomeProjeto} />
                                </div>

                                <div className="card-body">
                                    <div className="card-name">
                                        <h2>{project.nomeProjeto}</h2>
                                    </div>
                                    
                                    {/* 
                                        Here in buttons, are the links to the directory and the online project.
                                        OBS: This may contain projects that are not online yet
                                    */}
                                    <div className="card-buttons">
                                        <Link href={project.urlProjeto} target="_blank" rel="noreferrer">
                                            GitHub
                                        </Link>
                                        <Link href={project.urlSite} target="_blank" rel="noreferrer">
                                            Site
                                        </Link>
                                    </div>

                                    {/* 
                                        In the file projects.tsx are the icons that I will use.
                                        In the object is included the tag Image with the src and width,
                                        so is just to call the object in the file projects.tsx
                                    */}
                                    <div className="card-icons">
                                        {project.icon1}
                                        {project.icon2}
                                        {project.icon3}
                                        {project.icon4}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="buttonProjects">
                        <Link href="/projects">
                            <button>Ver mais</button>
                        </Link>
                    </div>
                </div>

                {/* 
                    Here is the contact container.
                */}
                <div className="contact" id="contact">
                    <div className="titleContact">
                        <h2>Contato</h2>
                    </div>

                    <div className="contact-container">

                        {/* 
                            Here is the form to send me an email.
                            OBS: This form is not functional yet.
                        */}
                        <form action="https://formsubmit.co/30a92fed5ba505a6a31cde2e9bb6f5d8" method="POST" className="contactForm">
                            <div className="inputs">
                                <label htmlFor="email"></label>
                                <input type="email" name="email" placeholder="Email" />

                                <label htmlFor="topic"></label>
                                <input type="text" name="topic" placeholder="Assunto" />

                                <label htmlFor="message"></label>
                                <textarea name="message" cols={30} rows={10} placeholder="Mensagem"></textarea>
                            </div>

                            <div className="button">
                                <input type="hidden" name="_next" value="https://mario-leandro.vercel.app/" />
                                <button type="submit">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}