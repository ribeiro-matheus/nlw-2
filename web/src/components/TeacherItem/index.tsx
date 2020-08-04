import React from 'react';

import whatsAppIcon from '../../assets/images/icons/whatsapp.svg'

import './style.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
        <header>
            <img src="https://cdn.pixabay.com/photo/2015/09/02/13/24/girl-919048_960_720.jpg" alt="nome do professor"/>
            <div>
                <strong>Nome do Professor</strong>
                <span>Química</span>
            </div>
        </header>

        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            <br /><br />
            A illum temporibus accusamus nulla, fuga itaque voluptas officia neque illo voluptatibus ad cupiditate, aperiam facere minima.
        </p>
        
        <footer>
            <p>
                Preço/hora 
                <strong>R$ 80,00</strong>
            </p>
            <button type="button">
                <img src={whatsAppIcon} alt="Whatsapp"/>
                Entrar em contato
            </button>
        </footer>

    </article>
    );
}

export default TeacherItem;