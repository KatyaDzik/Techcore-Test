import '../style/Menu.css';
import Submenu from "./Submenu";
import {useState} from "react";
import {Link, Route, Routes} from "react-router-dom";


const Menu=()=> {
    const [title, setTitle]=useState('Dashboard');

    return (
        <div className="wrap_menu">
        <div className="menu">
            <button className="toolbar btn icon" />
            <Link to="/" onClick={(e) => setTitle('Dashboard')} className="menu_link"><span className="btn home menu_title"/><span className="menu_title">Dashboard</span></Link>
            <Link to="/users" onClick={(e) => setTitle('Users')} className="menu_link"><span className="btn users menu_title"/><span className="menu_title">Users</span></Link>
            <Link to="/settings" onClick={(e) => setTitle('Settings')} className="menu_link"><span className=" btn settings menu_title"/><span className="menu_title">Settings</span></Link>
            <Link to="/p&l" onClick={(e) => setTitle('P&L')} className="menu_link"><span className=" btn pl menu_title"/><span className="menu_title">P&L</span></Link>
            <Link to="/vacation" onClick={(e) => setTitle('Vacation Manager')} className="menu_link"><span className=" btn vacation menu_title"/><span className="menu_title">Vacation<br/>Manager</span></Link>
            <span className="btn bell menu_title" />
            <span className="btn round menu_title" />
        </div>
            <Submenu menu submenu_title={title}/>
        </div>
    );
}

export default Menu;
