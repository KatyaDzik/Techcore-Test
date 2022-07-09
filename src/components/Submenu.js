import '../style/Submenu.css';
import {Link, Route, Routes} from "react-router-dom";
import MainContent from "./MainContent";
import UsersState from '../store/UsersState'

const Submenu=(props)=> {

    function ChoiceItem() {
        let btnElem = document.getElementById('arrow');
        let submenu= document.getElementById('submenu');
        let conElem = document.getElementById('content');
        btnElem.onclick = function () {
            console.log(UsersState.users);
           submenu.classList.toggle('open');
           btnElem.classList.toggle('on');
           btnElem.classList.toggle('off');
           conElem.classList.toggle('con_on')
        };
    }

    return (
        <div className="submenu" id="submenu">
            <div id="content" className="content">
                <h3>{props.submenu_title}</h3>
                { props.submenu_title==='Users' ? <div></div> : null }
                { props.submenu_title==='Settings' ? <div>
                    <ul>
                        <Link to="/settings/general"><span className="general_settings"></span><li className='line'>General</li></Link><br/>
                        <Link to="/settings/vacation"><span className="vacation_manager"/><li className='line'>Vacation Manager</li></Link>
                            <ul className="sub_sub_menu">
                                <Link to="/settings/vacation/types"><li className='line'>Leave Types</li></Link><br/>
                                <Link to="/settings/vacation/location"><li className='line'>Location</li></Link>
                            </ul>
                    </ul>

                </div> : null }
            </div>
            <button className="btn2 off" onClick={(e) => ChoiceItem(e)} id="arrow"></button>
        </div>
    );
}

export default Submenu;
