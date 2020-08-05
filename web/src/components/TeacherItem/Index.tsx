import React from 'react';

import whatsIcon from '../../assets/images/icons/whatsapp.svg';

import "./styles.css";

function TeacherItem(){
    return(
        <article className="teacher-item">
        <header>
            <img src="https://avatars1.githubusercontent.com/u/57379069?s=460&u=86db1b02e30d9f49bce7e09047cb8a2a3fdc0c87&v=4" alt="Eduardo Ferraz"/>

            <div>
                <strong>Eduardo Ferraz</strong> <br/>
                <span> Quimica </span>
            </div>
        </header>

        <p>
            Entusiasta das melhores tecnologias de química avançada.
            <br/>
            Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas <br/> através de experiências e estudo.
        </p>
        
        <footer>
            <p>
                Preço/hora <strong>R$80,00</strong>
            </p>
            <button type="button">
                Entrar em contato
                <img src={whatsIcon} alt="Whatsapp"/>
            </button>
        </footer>
    </article>
    )
}

export default TeacherItem;