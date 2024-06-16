import "@/styles/mainProjects.scss";
import Link from "next/link";
import Image from "next/image";
import { ListaProjetos } from "@/components/allProjects";

export const MainProjects = () => {
    return (
        <main>
            <div className="main-container">
                <div className="allProjectsDiv">
                    <div className="titleProjects">
                        <h2>Projetos</h2>
                    </div>

                    <div className="projects-container">
                        { ListaProjetos.map((i) => (
                            <div className="card" key={i.id}>
                                <div className="card-image">
                                    <Image src={i.imgProjeto} alt={i.nomeProjeto} />
                                </div>

                                <div className="card-body">
                                    <div className="card-name">
                                        <h2>{i.nomeProjeto}</h2>
                                    </div>

                                    <div className="card-buttons">
                                        <Link href={i.urlProjeto}>Código</Link>
                                        <Link href={i.urlSite}>Projeto</Link>
                                    </div>

                                    <div className="card-icons">
                                        {i.icon1}
                                        {i.icon2}
                                        {i.icon3}
                                        {i.icon4}
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