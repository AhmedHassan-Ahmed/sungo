// import { menuData, MenuItemDataType } from "@/db/menuData";
import { Fragment, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { menuDataSingleHomePage } from "@/db/menuDataSingleHomePage";
import { menuData, MenuItemDataType } from "@/db/menuData";

function Navbar() {
    return (
        <ul>
            {menuData.map(({ link, title, megamenu, submenu }, index) => (
                <li
                    key={index}
                    className={`${submenu ? 'has-dropdown' : ''}`}
                >
                    <Link to={link}>
                        {title}{' '}
                        {(submenu || megamenu) && <i className="fas fa-angle-down" />}
                    </Link>

                    {/* Submenu */}
                    {submenu?.length && (
                        <ul className="submenu">
                            {submenu.map((dropdown, ind) => (
                                <Fragment key={ind}>
                                    {dropdown.submenu ? (
                                        <li className="has-dropdown">
                                            <Link to="#">
                                                {dropdown.title} <i className="fas fa-angle-down" />
                                            </Link>
                                            <ul className="submenu">
                                                {dropdown.submenu.map((sub, i) => (
                                                    <li key={i}>
                                                        <Link to={sub.link}>{sub.title}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                    ) : (
                                        <li>
                                            <Link to={dropdown.link}>{dropdown.title}</Link>
                                        </li>
                                    )}
                                </Fragment>
                            ))}
                        </ul>
                    )}
                </li>
            ))}
        </ul>
    );
}

export default Navbar;
