import { Link } from "react-router-dom";
import styles from "./footer.module.css";
import logo from "../../../Assets/logopng.png";

function Footer() {

    return (
        <>
            <div className={styles.linha}></div>
            <div class="container">
                <footer>
                    <img src={ logo } alt="logobaixo" className="imgb"/>
                        <div className="boxs">
                            <Link to="/login">login</Link>
                            <h2>Onde nos encontrar</h2>
                            <div className="area--icons">
                                {/* <a Link className=""> <img src= {} alt="facebook" class="rsicon"/></a>
                                <a Link className=""> <img src= {} alt="facebook" class="rsicon"/></a>
                                <a Link className=""> <img src= {} alt="facebook" class="rsicon"/></a>
                                <a Link className=""> <img src= {} alt="facebook" class="rsicon"/></a>
                                <a Link className=""> <img src= {} alt="facebook" class="rsicon"/></a>   */}
                            </div>
                        </div>
                        <div className="boxs">
                            <h2>Onde nos encontrar</h2>
                            <div className="areat">
                                <span Link className="">(11)98973-2215</span>
                                <span Link className="">contato@teamcrezio.com.br</span>
                                <span Link className="">Rua Dr. Miranda de Azevedo, 415-Pompeia, São Paulo</span>
                            </div>
                        </div>
                        <div className="boxs">
                            <h2>Onde nos encontrar</h2>
                            <div className="areat">
                                <a Link className="">Atendimento</a>
                                <a Link className="">Aulas</a>
                                <a Link className="">Team Crezio Petropolis</a>
                            </div>
                        </div>
                </footer>
            </div>
        </>
    );
}

export default Footer;