import imgCalculadora from "../img/imgProjetos/calculadora.png";
import imgCalcImc from "../img/imgProjetos/calculadora_imc.png";
import imgProfileCard from "../img/imgProjetos/profile-card.png";
import imgRelogioDigital from "../img/imgProjetos/relogio-digital.png";
import imgCronometro from "../img/imgProjetos/cronometro.png";
import imgJuros from "../img/imgProjetos/juros.png";
import imgCardJs from "../img/imgProjetos/card-js.png";
import imgBlog from "../img/imgProjetos/blog.png";
import imgGeradorSenha from "../img/imgProjetos/geradorSenha.png";

const listaProjetos = [
    {
        id: 1,
        nomeProjeto: "Calculadora",
        imgProjeto: imgCalculadora,
        urlProjeto: "https://github.com/mario-leandro/calculadora",
        urlSite: "https://mario-leandro.github.io/calculadora/calculadora.html",
        icon1: <img width="48" height="48" src="https://img.icons8.com/color/48/html-5--v1.png" alt="html-5--v1"/>,
        icon2: <img width="48" height="48" src="https://img.icons8.com/color/48/css3.png" alt="css3"/>,
        icon3: <img width="48" height="48" src="https://img.icons8.com/color/48/javascript--v1.png" alt="javascript--v1"/>
    },
    {
        id: 2,
        nomeProjeto: "Calculadora de IMC",
        imgProjeto: imgCalcImc,
        urlProjeto: "https://github.com/mario-leandro/calculadora_imc",
        urlSite: "https://mario-leandro.github.io/calculadora_imc/",
        icon1: <img width="48" height="48" src="https://img.icons8.com/color/48/html-5--v1.png" alt="html-5--v1"/>,
        icon2: <img width="48" height="48" src="https://img.icons8.com/color/48/css3.png" alt="css3"/>,
        icon3: <img width="48" height="48" src="https://img.icons8.com/color/48/javascript--v1.png" alt="javascript--v1"/>
    },
    {
        id: 3,
        nomeProjeto: "Profile Card",
        imgProjeto: imgProfileCard,
        urlProjeto: "https://github.com/mario-leandro/Profile-Card",
        urlSite: "https://mario-leandro.github.io/Profile-Card/",
        icon1: <img width="48" height="48" src="https://img.icons8.com/color/48/html-5--v1.png" alt="html-5--v1"/>,
        icon2: <img width="48" height="48" src="https://img.icons8.com/color/48/css3.png" alt="css3"/>,
        icon3: <img width="48" height="48" src="https://img.icons8.com/color/48/sass-avatar.png" alt="sass-avatar"/>
    },
    {
        id: 4,
        nomeProjeto: "Relógio Digital",
        imgProjeto: imgRelogioDigital,
        urlProjeto: "https://github.com/mario-leandro/relogio-digital",
        urlSite: "https://mario-leandro.github.io/relogio-digital/",
        icon1: <img width="48" height="48" src="https://img.icons8.com/color/48/html-5--v1.png" alt="html-5--v1"/>,
        icon2: <img width="48" height="48" src="https://img.icons8.com/color/48/css3.png" alt="css3"/>,
        icon3: <img width="48" height="48" src="https://img.icons8.com/color/48/javascript--v1.png" alt="javascript--v1"/>
    },
    {
        id: 5,
        nomeProjeto: "Cronômetro",
        imgProjeto: imgCronometro,
        urlProjeto: "https://github.com/mario-leandro/cronometro-js",
        urlSite: "https://mario-leandro.github.io/cronometro-js/",
        icon1: <img width="48" height="48" src="https://img.icons8.com/color/48/html-5--v1.png" alt="html-5--v1"/>,
        icon2: <img width="48" height="48" src="https://img.icons8.com/color/48/css3.png" alt="css3"/>,
        icon3: <img width="48" height="48" src="https://img.icons8.com/color/48/javascript--v1.png" alt="javascript--v1"/>,
        icon4: <img width="48" height="48" src="https://img.icons8.com/color/48/sass-avatar.png" alt="sass-avatar"/>
    },
    {
        id: 6,
        nomeProjeto: "Calculadora de Juros",
        imgProjeto: imgJuros,
        urlProjeto: "https://github.com/mario-leandro/juros-js",
        urlSite: "https://mario-leandro.github.io/juros-js/",
        icon1: <img width="48" height="48" src="https://img.icons8.com/color/48/html-5--v1.png" alt="html-5--v1"/>,
        icon2: <img width="48" height="48" src="https://img.icons8.com/color/48/css3.png" alt="css3"/>,
        icon3: <img width="48" height="48" src="https://img.icons8.com/color/48/javascript--v1.png" alt="javascript--v1"/>,
        icon4: <img width="48" height="48" src="https://img.icons8.com/color/48/sass-avatar.png" alt="sass-avatar"/>
    },
    {
        id: 7,
        nomeProjeto: "Card JS",
        imgProjeto: imgCardJs,
        urlProjeto: "https://github.com/mario-leandro/card-js",
        urlSite: "https://mario-leandro.github.io/card-js/",
        icon1: <img width="48" height="48" src="https://img.icons8.com/color/48/javascript--v1.png" alt="javascript--v1"/>,
    },
    {
        id: 8,
        nomeProjeto: "Blog",
        imgProjeto: imgBlog,
        urlProjeto: "https://github.com/mario-leandro/blog",
        urlSite: "https://blog-ml.vercel.app/",
        icon1: <img width="48" height="48" src="https://img.icons8.com/officel/48/react.png" alt="react"/>,
        icon2: <img width="48" height="48" src="https://img.icons8.com/color/48/javascript--v1.png" alt="javascript--v1"/>,
        icon3: <img width="48" height="48" src="https://img.icons8.com/color/48/sass-avatar.png" alt="sass-avatar"/>
    },
    {
        id: 9,
        nomeProjeto: "Gerador de Senha",
        imgProjeto: imgGeradorSenha,
        urlProjeto: "https://github.com/mario-leandro/password-generator-js",
        urlSite: "https://mario-leandro.github.io/password-generator-js/",
        icon1: <img width="48" height="48" src="https://img.icons8.com/color/48/html-5--v1.png" alt="html-5--v1"/>,
        icon2: <img width="48" height="48" src="https://img.icons8.com/color/48/css3.png" alt="css3"/>,
        icon3: <img width="48" height="48" src="https://img.icons8.com/color/48/javascript--v1.png" alt="javascript--v1"/>
    }
];

export default listaProjetos;