import imgBlog from "@/img/imgProjetos/blog.png";
import imgEcommerce from "@/img/imgProjetos/e-commerceProject.png";
import imgGeradorSenha from "@/img/imgProjetos/geradorSenha.png";

export const ListPrincipalProjects = [
    {
        id: 1,
        nomeProjeto: "Blog",
        imgProjeto: imgBlog,
        urlProjeto: "https://github.com/mario-leandro/blog",
        urlSite: "https://blog-ml.vercel.app/",
        icon1: <img width="48" height="48" src="https://img.icons8.com/officel/48/react.png" alt="react"/>,
        icon2: <img width="48" height="48" src="https://img.icons8.com/color/48/javascript--v1.png" alt="javascript--v1"/>,
        icon3: <img width="48" height="48" src="https://img.icons8.com/color/48/sass-avatar.png" alt="sass-avatar"/>
    },
    {
        id: 2,
        nomeProjeto: "e-commerce",
        imgProjeto: imgEcommerce,
        urlProjeto: "https://github.com/mario-leandro/e-commerceProject",
        urlSite: "https://e-commerce-mario-leandro.vercel.app/",
        icon1: <img width="48" height="48" src="https://img.icons8.com/officel/48/react.png" alt="react"/>,
        icon2: <img width="48" height="48" src="https://img.icons8.com/color/48/javascript--v1.png" alt="javascript--v1"/>,
        icon3: <img width="48" height="48" src="https://img.icons8.com/color/48/sass-avatar.png" alt="sass-avatar"/>,
    },
    {
        id: 3,
        nomeProjeto: "Gerador de Senha",
        imgProjeto: imgGeradorSenha,
        urlProjeto: "https://github.com/mario-leandro/password-generator-js",
        urlSite: "https://mario-leandro.github.io/password-generator-js/",
        icon1: <img width="48" height="48" src="https://img.icons8.com/color/48/html-5--v1.png" alt="html-5--v1"/>,
        icon2: <img width="48" height="48" src="https://img.icons8.com/color/48/css3.png" alt="css3"/>,
        icon3: <img width="48" height="48" src="https://img.icons8.com/color/48/javascript--v1.png" alt="javascript--v1"/>
    }
];