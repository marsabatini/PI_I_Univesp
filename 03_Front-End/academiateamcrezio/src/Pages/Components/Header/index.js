import { Link } from "react-router-dom";
import header_style from "./header.module.css";

import logo_master from "../../../Assets/logoa.jpeg";

export default function Header() {

    return (

        <>
            <div>
                <section>
                    <div className={header_style.linha}></div>
                    <header>
                        <div class="container-logo">
                            <div className="logo-imagem"></div>
                            <div className="logo-texto">
                                <img src={logo_master} alt="logotipo" class="img-logo" />
                            </div>
                            <div className="menu">
                                <ul>
                                    <li> <a Link className="">Academia+     </a></li>
                                    <li> <a Link className="">Nossa historia</a></li>
                                    <li> <a Link className="">Planos        </a></li>
                                    <li> <a Link className="">Contato       </a></li>
                                    <li> <a Link className="">Loja+         </a></li>
                                    <button>Login</button >
                                </ul>
                            </div>
                        </div>
                    </header>

                </section>
            </div>
        </>

    );

}
