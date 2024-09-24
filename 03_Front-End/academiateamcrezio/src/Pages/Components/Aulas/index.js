import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";


export default function Aulas() {

    return (

        <>

        
                <table className="Semana-Dia-Atual">

                    <tr className="aula">
                        <td>23/05 Quinta-Feira</td>
                        <td>6:00</td>
                        <td>Boxe</td>
                        <td>Eduardo</td>
                        <td>08</td>
                        <td>00</td>
                        <td>00</td>
                        <button className="inserir_aluno" type="submit">Agendar Aula</button>
                    </tr>

                </table>

        </>

    );

}