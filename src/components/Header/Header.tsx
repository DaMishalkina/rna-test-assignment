import {Link} from "react-router-dom";
import {ReactElement, useState} from "react";


import {Cancel} from "../svgs/Cancel";
import {DropdownMenu} from "../DropdownMenu/DropdownMenu";
import {Hamburger} from "../svgs/Hamburger";
import {NavigationList} from "../Navigation/NavigationList";
import {replaceSpaceWithUnderline} from "../../utils/replaceSpaceWithUnderline";


import {NavType} from "../Navigation/types/types";

import "./Header.css";



interface Props {
    navigationMenu: NavType,
    languagesSection: {
        title: string,
        languages: {[key: string]: string}
    },
    registerLinks: {
        title: string,
        links: string[]
    },
    title: string,
    logo?: ReactElement
}

export const Header = ({
                           navigationMenu,
                           languagesSection,
                           registerLinks,
                           title,
                           logo}: Props) => {
    const [isMenuOpened, setIsMenuOpened] = useState(false);
    return (
        <header className="header">
            {logo ? (
                <Link to="/" className="header__logo">
                    {logo && logo}
                </Link>
                ) : (
                <p>{title}</p>
            )}
            {(navigationMenu || languagesSection || registerLinks)  && (
                <div className="header__content">
                    <button
                        className="header__button"
                        onClick={() => setIsMenuOpened(prevState => !prevState)}
                    >
                        {isMenuOpened ? <Cancel /> : <Hamburger />}
                    </button>
                    {isMenuOpened && (
                        <div className="header-menu header__menu">
                            {navigationMenu && <NavigationList navMenu={navigationMenu}/>}
                            {(registerLinks || languagesSection) && (
                                <div className="header-dropdowns header-menu__dropdowns">
                                    {languagesSection && (
                                        <div className="header-dropdown">
                                            <DropdownMenu
                                                className="header-dropdown--desktop"
                                                defaultOption={(languagesSection.languages["English"]).toUpperCase()}
                                                options={languagesSection.languages}
                                                title={languagesSection.title}
                                            />
                                            <ul className="header-dropdown--mobile">
                                                {Object.entries(languagesSection.languages).map((language) => (
                                                    <li key={language[0]}>
                                                        <Link to={language[1]}>{language[0]}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                    {registerLinks && (
                                        <div className="header-dropdown">
                                            <DropdownMenu
                                                className="header-dropdown--desktop"
                                                defaultOption={registerLinks.links[0]}
                                                options={Object.fromEntries(registerLinks.links.map((link) => {
                                                    return [link, link]
                                                }))}
                                                title={registerLinks.title}
                                            />
                                            <ul className="header-dropdown--mobile">
                                                {registerLinks.links.map((link) => (
                                                    <li key={link}>
                                                        <Link to={replaceSpaceWithUnderline(link)}>{link}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            ) }
        </header>
    )
}