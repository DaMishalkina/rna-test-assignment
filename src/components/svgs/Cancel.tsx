import {SvgType} from "./types/type";


export const Cancel = ({
                          width = "24",
                          height = "24",
                          color = "currentColor",
                          title = "Cancel Icon",
                          className = ""}: SvgType) => {
    return (
        <svg
            role="img"
            width={width}
            height={height}
            className={className}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            stroke={color}
            id={title}
        >
            <title>{title}</title>
            <path stroke-linecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
    )

}