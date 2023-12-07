import {NavType} from "../Navigation/types/types";
import {ReactElement} from "react";


interface Props {
    navigationMenu: NavType,
    languages: { [key: string]: string },
    registerLinks: string[],
    title: string,
    logo?: ReactElement
}

export const Header = ({navigationMenu, languages, registerLinks, title}: Props) => {
    return (
        <header>

        </header>
    )
}