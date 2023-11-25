import Image from "next/image";
import minhaFoto from "@/img/minhaFoto.png";
import "@/css/main.css";
import skills from "@/js/skills";
import Link from "next/link";

export default function Main() {
    return (
        <main>
            <div className="principal">
                <div className="imgProfile">
                    <Image
                        src={minhaFoto}
                        alt="Foto de perfil"
                    />
                </div>

                <div className="apresentacao">
                    {/* aqui terá a animação de apresentação */}
                    <p>
                        Olá meu nome é Mario Leandro Silva Marques e sou 
                        <br/>
                        Desenvolvedor FullStack
                    </p>
                </div>
            </div>

            <div className="sobreMim">
                <div className="textoSobre">
                    <h2>Sobre mim</h2>

                    <p>
                        Comecei a programar no meio de 2022 e desde então sou apaixonado por programação. Minha primeira linguagem foi python, pois me falaram que era uma ótima opção, até que conheci javascript, fiquei muito animado quando vi, pois eu gosto muito de design e desenvolvimento front-end, mas para que eu pudesse aprender javascript, teria que começar com html e css para depois ir para o javascript.
                    </p>
                    <p>
                        No começo foi bem facíl aprender html e css, mas quando cheguei em javascript, vi que tinha muitas diferenças entre javascript e python, mas com muito esforço estou tentando dominar a cada dia mais javascript.
                    </p>
                    <p>
                        Hoje, tenho conhecimento em full-stack, mas minha zona de conforto é o front-end, pois como ja falei, eu amo design e criar interfaces gráficas. Estou estudando e me esforçando muito para trabalhar como desenvolvedor mobile futuramente, mas estou procurando algo como desenvolvedor full-stack.
                    </p>
                </div>
            </div>

            <div className="conhecimento">
                <div className="tituloSkill">
                    <h2>Conhecimento/Skills</h2>
                </div>

                <div className="card-skills">
                    {skills.map((i) => (
                        <div className="card" key={i.id}>
                            <div className="card-icon">
                                <img src={i.img} alt={i.nome} />
                            </div>
                            <div className="card-nome">
                                <h4>{i.nome}</h4>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="botaoProjs">
                    <Link href="/Projetos">Veja meus projetos</Link>
                </div>
            </div>

            <div className="contato">
                <div className="tituloContato">
                    <h2>Contato</h2>
                </div>

                <div className="divInfos">
                    <div className="leftInfo">
                        <div className="email">
                            <h3>Me envie um email</h3>
                            <p>devmariosilva@gmail.com</p>
                        </div>

                        <h3>Ou</h3>

                        <div className="redeSocial">
                            <h3>Veja minhas redes profissionais</h3>

                            <div className="botoesLink">
                                <Link
                                    href="https://github.com/mario-leandro"
                                    target="_blank"
                                >
                                    Github
                                </Link>

                                <Link
                                    href="https://www.linkedin.com/in/dev-mariosilva/"
                                    target="_blank"
                                >
                                    LinkedIn
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="rightInfo">
                        <div className="curriculo">
                            <h3>Veja meu currículo</h3>
                            <Link
                                href="https://drive.google.com/file/d/1DLLJCvMn1OIxR_qRcbT1b-CfDuVD5sFC/view?usp=drive_link"
                                target="_blank"
                            >
                                Clique aqui para abrir o curriculo
                            </Link>
                        </div>

                        <h3>Ou</h3>

                        <div className="telefone">
                            <h3>Me mande uma mensagem</h3>
                            <Link
                                href="https://wa.me/+5585988246915"
                                target="_blank"
                            >
                                Clique a que e fale comigo
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}