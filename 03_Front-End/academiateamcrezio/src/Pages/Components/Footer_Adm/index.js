import { Link } from "react-router-dom";
import Footer_Adm_styles from "../Footer_Adm/footeradm.modules.css";


import logo_footer from "../../../Assets/logopng.png";
import tiktok from "../../../Assets/tiktok.png";
import instagram from "../../../Assets/instagram.png";
import whatsapp from "../../../Assets/whatsapp.png";


export default function Footer_Adm() {


    return (

        <>
            <div>
                <section>

                <footer className="footer">
                    <img src={logo_footer} alt="logobaixo" className="logo_footer_left" />
                    <div className="boxs">
                        <h2 className="footer_titles">Onde nos encontrar</h2>
                        <div className="area_icons">
                            <a Link className=""> <img src={tiktok} alt="N/A" className="rsicon" /></a>
                            <a Link className=""> <img src={instagram} alt="N/A" className="rsicon" /></a>
                            <a Link className=""> <img src={whatsapp} alt="N/A" className="rsicon" /></a>
                        </div>
                    </div>
                    <img src={logo_footer} alt="logobaixo" className="logo_footer_right" />
                </footer>

                </section>
            </div>
        </>

    );


}