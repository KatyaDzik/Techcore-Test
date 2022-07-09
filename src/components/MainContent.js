import React, {useState} from "react";
import '../style/MainContent.css'
import {Link} from "react-router-dom";
import Submenu from "./Submenu";
import ModalWindow from "./ModalWindow";
import Breadcrumbs from "./Breadcrumbs";
/*import CardsState from "../store/CardsState";*/
import UsersState from "../store/UsersState";
import Card from './Card'

let cards=[{
    day_start: "6",
    isDefault: true,
    isExpiryDate: true,
    location_name: "Italy",
    quota_base: "According Year",
    time_zone: "Qatar",
    users: ['2','5'],
    week_start: "Sunday",
    workweek: ['Wednesday'],
    year_start: "January",
},{
    day_start: "6",
    isDefault: false,
    isExpiryDate: true,
    location_name: "USA",
    quota_base: "According Year",
    time_zone: "Qatar",
    users: ['1','2','3'],
    week_start: "Sunday",
    workweek: ['Wednesday'],
    year_start: "January",
}, {
    day_start: "6",
    isDefault: false,
    isExpiryDate: true,
    location_name: "Belarus",
    quota_base: "According Year",
    time_zone: "Qatar",
    users: ['1','2','3'],
    week_start: "Sunday",
    workweek: ['Wednesday'],
    year_start: "January",
},{
    day_start: "6",
    isDefault: false,
    isExpiryDate: true,
    location_name: "Canada",
    quota_base: "According Year",
    time_zone: "Qatar",
    users: ['5','1','2','3'],
    week_start: "Sunday",
    workweek: ['Wednesday'],
    year_start: "January",
}];

const MainContent=(props)=> {
    const [cards_data, setCardsData]=useState(cards);

    const handleCheckNewCard = (new_list)=> {
        setCardsData(new_list);
        console.log(cards_data);
    }

    return (
        <div className="main_cnt">
            <Breadcrumbs></Breadcrumbs>
            { props.page=='Locations' ?
                <div>
                    <h2 className="main_title">{props.page}</h2>
                    <div className="paragraf_create">
                        <p>Create new users or update the existng users. You can then set their permissons here too.</p>
                       {/* <button onClick={(e) => alert('n')}>Create Location</button>*/}
                        <ModalWindow onChange={handleCheckNewCard} crd={cards_data}></ModalWindow>
                    </div>
                    <div className="cards">
                        {cards_data.map((number,index) =>
                            <Card title={number.location_name} index={index} isDef={number.isDefault} users={number.users}></Card>
                        )}
                    </div>
                </div> : null }
        </div>
    );
}

export default MainContent;
