import {SvgType} from "./types/type";


export const Hamburger = ({
                          width = "24",
                          height = "24",
                          color = "currentColor",
                          title = "Hamburger Menu Icon",
                          className = ""}: SvgType) => {
    return (
        <svg
            role="img"
            width={width}
            height={height}
            className={className}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill={color}
        >
            <title>{title}</title>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
    )

}