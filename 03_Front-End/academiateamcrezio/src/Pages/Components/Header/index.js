import { Link } from "react-router-dom";
import header_style from "./header.module.css";

import logo_header from "../../../Assets/logoa.jpeg";

export default function Header() {

    return (

        <>
            <div>
                <section>

                    <header class={header_style.header}>
                        <div>
                          <Link to="/home"> <img src={logo_header} alt="logotipo" className={header_style.img_logo}></img> </Link>
                        </div>
                        <div className={header_style.header_options}>

                            <div className={header_style.menu}>
                                <ul>
                                    <li> <a Link to="/">Academia+     </a></li>
                                    <li> <a Link to="/">Nossa historia</a></li>
                                    <li> <a Link to="/">Planos        </a></li>
                                    <li> <a Link to="/">Contato       </a></li>
                                    <li> <a Link to="/">Loja+         </a></li>
                                 <Link to="/login">  <button>Login</button > </Link>
                                 <Link to="/cadastro"> <button>cadastrar</button></Link>
                                </ul>
                            </div>
                        </div>
                    </header>

                </section>
            </div>
        </>

    );

}
