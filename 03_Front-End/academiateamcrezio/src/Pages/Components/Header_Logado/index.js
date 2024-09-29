import { Link } from "react-router-dom";
import header_style from "./header.module.css";

import logo_header from "../../../Assets/logoa.jpeg";

export default function Header() {

    return (

        <>
            <div>
                <section>

                    <header class={header_style.header}>
                        <div className={header_style.img_logo}>
                          <Link to="/home"> <img src={logo_header} alt="logotipo" ></img> </Link>
                        </div>
                        <div className={header_style.header_options}>

                            <div className={header_style.menu}>
                                <ul>
                                    <li> <a Link to="/">Academia+     </a></li>
                                    <li> <a Link to="/">Nossa historia</a></li>
                                    <li> < Link to="/planos">Planos   </Link></li>
                                    <li> <a Link to="/">Contato       </a></li>
                                    <li> <a Link to="/">Loja+         </a></li>
                                    <Link to="/aluno">  <li><button>meu perfil</button ></li> </Link>
                                    <Link to="/#"> <li><button>sair</button> </li></Link>
                                </ul>
                            </div>
                        </div>
                    </header>

                </section>
            </div>
        </>

    );

}
