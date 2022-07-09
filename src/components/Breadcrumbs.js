import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Breadcrumb } from "antd";
import '../style/Breadcrumbs.css'
import 'antd/dist/antd.css';


const Breadcrumbs = () => {
    const location = useLocation();
    const breadCrumbView = () => {
        const { pathname } = location;
        const pathnames = pathname.split("/").filter((item) => item);
        const capatilize = (s) => s.charAt(0).toUpperCase() + s.slice(1);
        const firstElem = pathnames[0];
        return (
            <div className="wrapper_breadcrums">
                { firstElem=='users' ? <span className="icon_section users_icon"/> : null }
                { firstElem=='settings' ? <span className="icon_section setting_icon"/> : null }
                { firstElem=='p&l' ? <span className="icon_section pl_icon"/> : null }
                { firstElem=='vacatiom' ? <span className="icon_section vacation_icon"/> : null }
                <Breadcrumb separator=">">
                    {pathnames.map((name, index) => {
                        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                        const isLast=pathnames.length;

                        /*return isLast ? (
                            <Breadcrumb.Item>{capatilize(name)}</Breadcrumb.Item>
                        ) : (
                            <Breadcrumb.Item>
                                <Link to={`${routeTo}`}>{capatilize(name)}</Link>
                            </Breadcrumb.Item>
                        );*/
                        return(
                            <Breadcrumb.Item className="bread_link">
                                <Link to={`${routeTo}`} >{capatilize(name)}</Link>
                            </Breadcrumb.Item>

                        )

                    })}
                </Breadcrumb>
            </div>
        );
    };

    return <>{breadCrumbView()}</>;
};

export default Breadcrumbs;