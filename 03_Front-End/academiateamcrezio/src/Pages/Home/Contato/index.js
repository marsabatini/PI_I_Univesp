import Header from "../../Components/Header/index.js";
import Footer from "../../Components/Footer/index.js";

import Salao1 from "../../../Assets/salao.png";
import YoutubeColor from "../../../Assets/youtubeColor.png";
import InstagramColor from "../../../Assets/instagramColor.png";
import FacebookColor from "../../../Assets/facebookColor.png";
import TiktokColor from "../../../Assets/tiktokColor.png";


import "./contato.css"





export default function Contato () {

    return(
        <>


                    <Header/>
                    <main class="teste">

                        <section class="fotoDeFundo">
                            <div class="titulo_principal">
                            
                                <h1 >
                                    horário de funcionamento
                                </h1>

                            </div>

                            <div class="conteúdoContato">
    
                                <div class="elemento">
                                    <h2> 
                                        De segunda a sexta - 07:00 às 18:00 horas.
                                        <br/>
                                        Sábado e Domingo - horários agendados.
                                    </h2>
                                    <p> 
                                        Estamos na rua doutor Miranda de Azevedo, n°415
                                        <br/>
                                        Pompéia - São Paulo/SP
                                    </p>
                                </div>

                                <div class="elemento">
                                    <p> 
                                        Entre em contato através do nosso telefone e whatsapp (11) 98973-2215
                                        <br/>
                                        Ou pelo e-mail contato@teamcreziosp.com.br
                                        <br/>
                                        Visite nossas redes sociais
                                        <span class="posicao_icones">
                                        <a tabindex="0" Link className=""> <img src={YoutubeColor} alt="N/A" className="icones_contato" /></a>
                                        <a tabindex="0" Link href="https://www.instagram.com/teamcreziosp/"> <img src={InstagramColor} alt="N/A" className="icones_contato" /></a>
                                        <a tabindex="0" Link className=""> <img src={FacebookColor} alt="N/A" className="icones_contato" /></a>
                                        <a tabindex="0" Link href="https://www.tiktok.com/@team.crezio"> <img src={TiktokColor} alt="N/A" className="icones_contato" /></a>
                                        </span>
                                    </p>
                                </div>
    
                            </div>

                        </section>

                    </main>
  

                <Footer/>

        </>
    );

}