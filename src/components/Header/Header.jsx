import React from 'react'
import { Container} from "reactstrap";
import "./Header.css";
import { navData } from '../../assests/Data/NavData';
import { NavLink } from 'react-router-dom';

export const Header = () => {

    return (
        <header className="header">
            <Container>
                <div className="navigation d-flex align-items-center justify-content-between">
                    
                
                    <div className="logo mb-0 d-flex align-items-center gap-3">
                        <i class="ri-fire-fill"></i>DELIVERY

                    </div>                    

                    <div className="nav d-flex align-items-center gap-5">
                        <div className="nav__menu">
                            <ul className="nav__list">
                                {navData.map((item, index) => (
                                    <li key={index} className="nav__item">
                                        <NavLink
                                        to={item.url}
                                        className={({ isActive }) => (isActive ? "link-active" : "link")}
                                      >
                                      {item.display}
                                      </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="nav__right">
                            <p className="mb-0 d-flex align-items-center gap-3">
                                <i class="ri-search-2-line nav_search"></i> SEARCH
                            </p>
                        </div>
                    </div>

                    <div className="mobile__menu">
                        <span>
                            <i class="ri-menu-line"></i>
                        </span>
                    </div>

                </div>
            </Container>
        </header>
    );
};