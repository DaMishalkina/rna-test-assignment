import {SvgType} from "./types/type";


export const Arrow = ({
                          width = "20",
                          height = "20",
                          color = "currentColor",
                          title = "Arrow Icon",
                          className = ""}: SvgType) => {
    return (
        <svg
            role="img"
            width={width}
            height={height}
            className={className}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            fill={color}
            id={title}
        >
            <title>{title}</title>
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
    )

}