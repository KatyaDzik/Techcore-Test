import '../style/Card.css';
import React from "react";
import photo from '../img/user_photo/men_two.jpg'




const Card=(props)=> {

    function ChoiceItem() {
        let swtc = document.getElementById('nav');
        let menuElem = document.getElementById('mn');
        swtc.onclick = function () {
            menuElem.classList.toggle('open_menu');
        };
    }

    return (
        <div className="wrap_card">
            <div id='nav' className='switch' onClick={(e) => ChoiceItem(e)}>
                { <ul id='mn' className='card_menu'>
                    <li>Edit</li>
                    <li>Set as Default</li>
                    <li>Delete</li>
                </ul>}...</div>
            <h5>{props.title}</h5>
            <span>{props.isDef==true ? <span className="default">default</span> : null}</span>
            <div className="log">
            <h6>Holidays</h6>
            <a href="/">View Holidays</a></div>
            <div className="log">
                <h6>Leave Polices</h6>
                <a href="/">View Leave Polices</a></div>
            <div className="pictures">
                {props.users.map((number) =>
                        <img src={photo} alt=""/>
                )}
            </div>


        </div>
    );
}

export default Card;