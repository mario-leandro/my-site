import "@/styles/mainProjects.sass";
import Link from "next/link";
import Image from "next/image";
import { listProjects } from "@/components/listProjects";

export default function MainProjects() {
    return (
        <main>
            <div className="main-container">
                <div className="main-content">
                    <div className="main-title">
                        <h1>Projetos</h1>
                    </div>

                    <div className="projects-content">
                        {listProjects.map((project, index) => (
                            <div key={index} className="project">
                                <div className="project-image">
                                    <Image src={project.image} alt={project.name} />
                                </div>

                                <div className="project-info">
                                    <div className="project-name">
                                        <h2>{project.name}</h2>
                                    </div>

                                    <div className="project-description">
                                        <p>{project.description}</p>
                                    </div>

                                    <div className="project-tecnologies">
                                        {project.tecnologies.map((tecnology, index) => (
                                            <span key={index}>{tecnology}</span>
                                        ))}
                                    </div>

                                    <div className="project-btns">
                                        <Link href={project.linkRepo} target="_blank">
                                            Repositório
                                        </Link>

                                        <Link href={project.linkProject} target="_blank">
                                            Projeto
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}