import { Link } from "react-router-dom";
import header_style from "./header.module.css";
import logo_header from "../../../Assets/logoa.jpeg";


export default function Header() {

    function OpenMenu() {

        let hidden_menu = document.getElementById('hidden_menu'),
            list = document.getElementById('hidden_links'),
            icon = document.getElementById('list_icon');
        
    
        if( hidden_menu.className == header_style.show_menu ){
            hidden_menu.className = "";
            list.className = header_style.hide;
            icon.className = "bi bi-list";
    
        }else{
    
            hidden_menu.className = header_style.show_menu;
            list.className = "";
            icon.className = "bi bi-x-lg";

        }
    
    }

    return (

        <>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>
            <header class={header_style.header}>

                <div className={header_style.img_logo}>
                   <Link to="/home"> <img src={logo_header} alt="logotipo" ></img> </Link>
                </div>
               
                <div id="hidden_menu" >

                    <i onClick={OpenMenu} class="bi bi-list" id="list_icon"></i>   
  
                    <ul id="hidden_links" className={header_style.hide}>
                         <li> <a Link to="/">Academia+     </a></li>
                         <li> <a Link to="/">Nossa historia</a></li>
                         <li> < Link to="/planos">Planos   </Link></li>
                         <li> <a Link to="/">Contato       </a></li>
                         <li> <a Link to="/">Loja+         </a></li>
                    </ul>

                </div>


                <div className={header_style.header_options}>

                    <ul>
                         <li> <a Link to="/">Academia+     </a></li>
                         <li> <a Link to="/">Nossa historia</a></li>
                         <li> < Link to="/planos">Planos   </Link></li>
                         <li> <a Link to="/">Contato       </a></li>
                         <li> <a Link to="/">Loja+         </a></li>
                    </ul>


                    <div className={header_style.user_buttons}>
                        <Link to="/login">  <li><button >Login</button ></li> </Link>
                        <Link to="/cadastro"> <li><button >cadastrar</button></li> </Link>
                    </div>

                </div>


            </header>
          
        </>

    );

}
