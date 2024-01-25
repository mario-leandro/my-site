import "@/css/mainProjetos.css";
import listaProjetos from "@/js/projects.jsx";
import Image from "next/image";
import Link from "next/link";

export default function MainProjetos() {
    return (
        <main>
            <div className="projetos">
                <h2>Projetos</h2>

                <p>Aqui ficarão todos os meus melhores projetos (ou os que me deram mais trabalho e orgulho de ter feito), todos eles estarão no github, e todos eles tão links que levaram para o código no github e para a página do projeto</p>
            </div>

            <div className="card-projetos">
                {listaProjetos.map((i) => (
                    <div className="card" key={i.id}>
                        <div className="card-img">
                            <Image src={i.imgProjeto} alt={i.nomeProjeto} />
                        </div>

                        <div className="card-content">
                            <div className="card-nome">
                                <h2>{i.nomeProjeto}</h2>
                            </div>

                            <div className="botoes">
                                <Link
                                    href={i.urlProjeto}
                                    target="_blank"
                                >
                                    Repositório
                                </Link>

                                <Link
                                    href={i.urlSite}
                                    target="_blank"
                                >
                                    Site Online
                                </Link>
                            </div>

                            <div className="icones" >
                                {i.icon1}
                                {i.icon2}
                                {i.icon3}
                                {i.icon4}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
}