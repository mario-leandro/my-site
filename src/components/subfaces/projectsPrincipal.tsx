import Link from "next/link";
import imgBlog from "@/img/imgProjetos/blog.png";
import imgEcommerce from "@/img/imgProjetos/e-commerceProject.png";
import imgGeradorSenha from "@/img/imgProjetos/geradorSenha.png";
import Image from "next/image";

export default function ProjectsPrincipal() {
    const listPrincipalProjects = [
        {
            name: "Blog",
            image: imgBlog,
            tecnologies: ["React", "NextJs", "NodeJs", "Javascript", "Sass"],
            linkRepo: "https://github.com/mario-leandro/blog",
            linkProject: "https://blog-mario-leandro-silva-marques-projects.vercel.app/",
        },
        {
            name: "E-commerce",
            image: imgEcommerce,
            tecnologies: ["React", "NextJs", "NodeJs", "Javascript", "Sass"],
            linkRepo: "https://github.com/mario-leandro/e-commerceProject",
            linkProject: "https://e-commerce-mario-leandro.vercel.app/"
        },
        {
            name: "Gerador de Senha",
            image: imgGeradorSenha,
            tecnologies: ["HTML", "CSS", "Javascript"],
            linkRepo: "https://github.com/mario-leandro/password-generator-js",
            linkProject: "https://mario-leandro.github.io/password-generator-js/"
        }
    ];

    return (
        <>
            <div className="projects-title">
                <h2 id="projetos">Projetos</h2>
            </div>

            <div className="projects-content">
                {/* Criar uma div pra colocar os cards com os projetos dentro */}
                { listPrincipalProjects.map((project, index) => (
                <div className="projects-card" key={index}>
                    <div className="card-top">
                        <Image src={project.image} alt={project.name} />
                    </div>

                    <div className="card-bottom">
                        <div className="card-name">
                            <h3>{project.name}</h3>
                        </div>

                        <ul className="card-tecnologies">
                            { project.tecnologies.map((tecnology, index) => (
                                <li className="tech-item" key={index}>{tecnology}</li>
                            ))}
                        </ul>

                        <div className="card-btns">
                            <Link href={project.linkRepo} target="_blank">Ver Código</Link>
                            <Link href={project.linkProject} target="_blank">Ver Online</Link>
                        </div>
                    </div>
                </div>
                ))}
            </div>

            <div className="projects-seeMore">
                <Link href="/projetos">Ver mais projetos</Link>
            </div>
        </>
    )
}