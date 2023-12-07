import classNames from "classnames";
import {Link} from "react-router-dom";
import {useState} from "react";

import {Arrow} from "../svgs/Arrow";

import "./DropdownMenu.css";

interface Props {
    defaultOption: string,
    options: {
        [key: string]: string
    }
    title?: string,
    className?: string
}

export const DropdownMenu = ({defaultOption, options, title, className="" }: Props) => {
    const [isOpened, setIsOpened] = useState(false);
    return (
        <div className={classNames("dropdown-menu", className)}>
            <button
                className="dropdown-menu__chosen-option"
                onClick={() => setIsOpened((prevState) => !prevState)}
            >
                {defaultOption}
                <Arrow className={classNames("dropdown-icon dropdown-menu__icon",
                    isOpened && "dropdown-icon--reverse"
                    )} />
            </button>
            {isOpened && (
                <div className="dropdown-menu__options-list">
                    <p className="dropdown-menu__title">{title}</p>
                    {Object.entries(options).map(([optionTitle, optionLink]) => (
                        <Link
                            key={optionTitle}
                            to={optionLink}
                            className="dropdown-menu__option"
                        >
                            {optionTitle}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}